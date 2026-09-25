import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export type Line = { kind: "cmd" | "out"; text: string };

export interface ConsoleState {
  lineIdx: number;
  charIdx: number;
  typingDone: boolean;
}

interface BootOptions {
  canvas: HTMLCanvasElement;
  host: HTMLElement;
  reduced: boolean;
  script: Line[];
  state: ConsoleState;
}

const fullText = (l: Line) => (l.kind === "cmd" ? "$ " : "") + l.text;

const wrap = (text: string, max: number) => {
  const words = text.split(" ");
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) {
      out.push(cur.trim());
      cur = w;
    } else cur += " " + w;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
};

// The Screen mesh is UV-atlased: the display itself is the top-right region
// of a square texture. The atlas is drawn as the base and the console is
// painted into that region.
const ATLAS = 1536;
const DISPLAY = { x: 0.478, y: 0.0115, w: 0.521, h: 0.3065 };

export function bootLaptop({ canvas, host, reduced, script, state }: BootOptions) {
  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = ATLAS;
  screenCanvas.height = ATLAS;
  const sctx = screenCanvas.getContext("2d")!;
  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  const atlasImg = new Image();
  atlasImg.src = "/laptop/source/ComputerScreenTextureBase.png";

  const drawScreen = () => {
    const W = ATLAS;
    sctx.fillStyle = "#101010";
    sctx.fillRect(0, 0, W, W);
    if (atlasImg.complete && atlasImg.naturalWidth) sctx.drawImage(atlasImg, 0, 0, W, W);

    const dx = DISPLAY.x * W;
    const dy = DISPLAY.y * W;
    const dw = DISPLAY.w * W;
    const dh = DISPLAY.h * W;
    sctx.fillStyle = "#070a12";
    sctx.fillRect(dx, dy, dw, dh);
    const bar = dh * 0.075;
    sctx.fillStyle = "#141c2b";
    sctx.fillRect(dx, dy, dw, bar);
    const fs = Math.round(dh * 0.042);
    sctx.fillStyle = "#c9a24a";
    sctx.font = `600 ${fs}px 'Azeret Mono', monospace`;
    sctx.fillText("pbthang@main — zsh", dx + fs, dy + bar * 0.68);

    sctx.font = `500 ${fs}px 'Azeret Mono', monospace`;
    const lh = fs * 1.45;
    const maxCols = Math.floor((dw - fs * 2) / (fs * 0.62));
    let y = dy + bar + lh * 1.2;
    const bottom = dy + dh - fs * 0.6;
    const put = (txt: string, cmd: boolean) => {
      sctx.fillStyle = cmd ? "#e3c46e" : "#f2f4f7";
      sctx.fillText(txt, dx + fs, y);
      y += lh;
    };
    for (let i = 0; i < script.length && y < bottom; i++) {
      const l = script[i];
      const t =
        i < state.lineIdx
          ? fullText(l)
          : i === state.lineIdx
          ? fullText(l).slice(0, state.charIdx)
          : null;
      if (t === null) break;
      const segs = wrap(t, maxCols);
      for (const seg of segs.length ? segs : [""]) {
        if (y >= bottom) break;
        put(seg, l.kind === "cmd");
      }
    }
    if (state.lineIdx >= script.length && y < bottom) {
      const blink = Math.floor(performance.now() / 500) % 2 === 0;
      put("$ " + (blink ? "_" : ""), true);
    }
    screenTex.needsUpdate = true;
  };

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1000);
  camera.position.set(0, 0, 26);
  const scene = new THREE.Scene();

  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(-8, 12, 10);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xc9a24a, 0.45);
  fill.position.set(10, 4, -6);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));

  const size = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  size();
  new ResizeObserver(size).observe(host);

  let model: THREE.Group | undefined;
  let screen: THREE.Mesh | undefined;
  const modelRot = [0.42, -0.85, 0];
  const screenRot = [0, Math.PI, 0];
  const modelPos = [0.5, -7, -42];

  new FBXLoader().load("/laptop/source/Laptop.fbx", (object: THREE.Group) => {
    model = object;
    model.position.set(modelPos[0], modelPos[1], modelPos[2]);
    model.rotation.set(modelRot[0], modelRot[1], modelRot[2]);
    model.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const mat = child.material as THREE.MeshStandardMaterial;
      if (child.name === "Frame") {
        mat.roughness = 0.55;
        mat.metalness = 0.35;
      }
      if (child.name === "Screen") {
        screen = child;
        child.rotation.set(screenRot[0], screenRot[1], screenRot[2]);
        mat.map = screenTex;
        mat.emissive = new THREE.Color(0xffffff);
        mat.emissiveMap = screenTex;
        mat.emissiveIntensity = 0.9;
        mat.roughness = 0.35;
        mat.metalness = 0.2;
        mat.needsUpdate = true;
      }
    });
    scene.add(model);
  });

  const clock = new THREE.Clock();
  let lastDraw = 0;
  let scrollY = window.scrollY;
  const animate = () => {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    if (model && !reduced) {
      model.position.y = modelPos[1] + Math.sin(t * 0.9) * 0.35;
      // Read scroll here (not in the handler) so no layout is forced mid-scroll.
      if (screen) screen.rotation.x = screenRot[0] + Math.min(scrollY / 420, Math.PI / 2.2);
      model.rotation.y = modelRot[1] + scrollY * 0.0006;
    }
    const now = performance.now();
    if (now - lastDraw > (state.typingDone ? 500 : 40)) {
      drawScreen();
      lastDraw = now;
    }
    renderer.render(scene, camera);
  };
  animate();

  if (!reduced) {
    document.addEventListener(
      "scroll",
      () => {
        scrollY = window.scrollY;
      },
      { passive: true }
    );
  }
}

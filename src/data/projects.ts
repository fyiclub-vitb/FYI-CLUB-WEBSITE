import type { Project } from '../types';

// PROJECTS & EXPERIMENTS (RESTORED PREVIEW DATA - CLEARLY MARKED AS DUMMY)
// ============================================================================
export const PROJECTS: Project[] = [
  {
    id: "aether-os",
    number: "001",
    title: "AETHER OS",
    tags: ["DUMMY CONCEPT", "P2P PROTOCOL", "RUST + WASM", "ZERO CENTRAL RELAY"],
    description: "[DUMMY SPECIFICATION] Campus P2P Mesh Protocol. Designed to explore torrent-speed peer-to-peer data distribution across student hostel blocks with zero central server dependencies during high-traffic exam periods.",
    specs: [
      { label: "Concept Speed", value: "14.2 MB/s" },
      { label: "Target Density", value: "128+ Peers" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    version: "V1.4 • [DUMMY PROTOTYPE]",
    repoUrl: "https://github.com/fyi-vitbhopal"
  },
  {
    id: "neurocanvas",
    number: "002",
    title: "NEUROCANVAS",
    tags: ["DUMMY CONCEPT", "CREATIVE AI", "WEBGL SHADERS", "IN-BROWSER ONNX"],
    description: "[DUMMY SPECIFICATION] Zero-Cloud Latent Space Synthesizer. Concept simulation running localized neural diffusion models directly inside client browser memory via WebGL 2.0 at 60fps without cloud server costs.",
    specs: [
      { label: "Target FPS", value: "60 FPS" },
      { label: "Local Latency", value: "18ms" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    version: "WEBGL 2.0 • [DUMMY PROTOTYPE]",
    demoUrl: "#"
  },
  {
    id: "pulsebotics",
    number: "003",
    title: "PULSEBOTICS",
    tags: ["DUMMY CONCEPT", "AUTONOMOUS HARDWARE", "LORAWAN", "ROS 2"],
    description: "[DUMMY SPECIFICATION] Autonomous Agro-Field Rover. Low-cost custom carbon-fiber chassis blueprint equipped with multi-spectral crop diagnostic cameras and long-range LoRa sub-GHz telemetry.",
    specs: [
      { label: "Telemetry Range", value: "15.8 KM" },
      { label: "Endurance", value: "9.5 Hours" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    version: "CUSTOM PCB • [DUMMY PROTOTYPE]",
    demoUrl: "#"
  }
];

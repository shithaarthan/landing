import { useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';

// Configure DRACOLoader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco-gltf/'); // Path to Draco decoder files in public folder

// Configure GLTFLoader to use DRACOLoader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

export const useDracoGLTF = (path) => {
  const gltf = useGLTF(path, gltfLoader); // Use the configured GLTFLoader
  return gltf;
};

/*
Notes for useAssets.js:

1.  **DRACO Decoder Files:**
    For DRACO compression to work, you need to place the DRACO decoder files
    (e.g., `draco_decoder.wasm`, `draco_decoder.js`, `draco_encoder.js`)
    in your `/public/draco-gltf/` directory.
    You can usually find these files in `node_modules/three/examples/jsm/libs/draco/`.
    Copy the entire `draco` folder from there to `public/draco-gltf`.

    Example command to copy (run from your project root):
    `cp -R node_modules/three/examples/jsm/libs/draco/ public/draco-gltf/` (for Linux/macOS)
    `xcopy node_modules\three\examples\jsm\libs\draco\ public\draco-gltf\ /E /I` (for Windows)

2.  **Usage in PhoneAnimation.jsx:**
    Replace the inline `useDracoGLTF` definition in `PhoneAnimation.jsx` with an import:
    `import { useDracoGLTF } from '../lib/useAssets';`
*/

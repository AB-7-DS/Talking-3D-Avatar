import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Middle } from "./Middle";

export const Experience = () => {
  const texture = useTexture("textures/background_mall.jpeg")
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls />
      <Middle position={[0, -2, 4]} scale={3} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls, Float } from '@react-three/drei';
import WashingMachineModel from './WashingMachineModel';
import { Box, Spinner } from '@chakra-ui/react';

const LaundryScene = () => {
  return (
    <Box w="100%" h="100%" position="absolute" top="0" left="0" zIndex="0">
      <Suspense fallback={<Box display="flex" justifyContent="center" alignItems="center" h="100%"><Spinner size="xl" color="brand.500" /></Box>}>
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <Float rotationIntensity={0.5}>
              <WashingMachineModel position={[0, -1, 0]} scale={[1.5, 1.5, 1.5]} />
            </Float>
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </Box>
  );
};

export default LaundryScene;

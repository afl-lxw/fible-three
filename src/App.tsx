import * as THREE from 'three'
import  { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 3.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
  )
}


const App = () => {
    return (
      <>
        <Canvas className='w-full h-500px' style={{ width: '100vw', height: '100vh' }} >
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <Box position={[2.5, 2, 0]} />
          <Box position={[-1.2, 2, 0]} />
        </Canvas>
      </>
    )
}

export default App

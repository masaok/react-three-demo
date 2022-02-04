import './App.css'

import { Canvas } from '@react-three/fiber'

import Box from './components/Box'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas
          camera={{
            fov: 60,
            position: [0, 0, 20],
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-10.2, 0, 0]} />
          <Box position={[10.2, 0, 0]} />
        </Canvas>
      </header>
    </div>
  )
}

export default App

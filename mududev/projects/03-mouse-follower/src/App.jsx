import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  
  useEffect(() => {

    const handleMove = (event) => {
      setPosition({x: event.clientX, y: event.clientY});
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    
    // Limpiando efecto/suscripciones
    return  () => {
      window.removeEventListener('pointermove', handleMove);
      setPosition({x: 0, y: 0});
    }
    
  }, [enabled]);

  return (
    <>
     <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
     <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'dejar de seguir el puntero' : 'Activar seguir puntero' }
     </button>
    </>
  )
}

export default App

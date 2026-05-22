import { useState } from 'react'
import './App.css'

function App() {
  // przechowuje tekst wpisany w input
  const [task, setTask] = useState('')

  // przechowuje wszystkie zadania
  const [tasks, setTasks] = useState([])
//zeby guzik sie obracal
const [rotation, setRotation] = useState(0)
const [scale, setScale] = useState(1)
const [color, setColor] = useState('#3498db')
//zeby guzik zmienial polozenie
  const [position, setPosition] = useState({
    top: 161,
    left: 1177,
  });
  // funkcja dodająca zadanie
  const addTask = () => {
    setPosition({
      top: Math.random() * (window.innerHeight - 150),
      left: Math.random() * (window.innerWidth - 100),
    })
    setRotation(Math.random() * 860)
    setScale(0.01 + Math.random() * 10)
    setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    ;
    
    
    // jeśli input pusty -> nic nie rób
    if (task.trim() === '') {
      return
    }

    // dodanie nowego zadania do listy
    setTasks([...tasks, task])

    // wyczyszczenie inputa
    setTask('')
  }

  return (
    <div className="app">
      <h1>Moja Checklista</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Wpisz zadanie..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask} style={{
          position: "fixed",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transition: '1s',
          transform: `rotate(${rotation}deg) scale(${scale})`,
          backgroundColor: color,
          
        }}>
          Dodaj
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
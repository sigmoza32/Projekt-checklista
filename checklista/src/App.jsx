import { useState } from 'react'
import './App.css'

function App() {
// przechowuje tekst wpisany w input
const [task, setTask] = useState('')

// przechowuje wszystkie zadania
const [tasks, setTasks] = useState([])

const [rotation, setRotation] = useState(0) // obracanie guzika
const [scale, setScale] = useState(1) // powiekszanie i pomniejszanie guzika
const [color, setColor] = useState('#3498db') //zeby guzik zmienial kolor
const [font, setFont] = useState('Arial') // zeby guzik zmienial czcionke

const [position, setPosition] = useState({ //ulozenie guzika
    top: 210,
    left: 1177,
});
  // funkcja dodająca zadanie
const addTask = () => {
  setPosition({
    top: Math.random() * (window.innerHeight - 150), //zeby guzik zmienial polozenie
    left: Math.random() * (window.innerWidth - 100), //zeby guzik zmienial polozenie
  })

  setRotation(Math.random() * 960)

  setScale(0.01 + Math.random() * 10)

  setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)

  const fonts = ['Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT',
    'Comic Sans MS',
    'Impact',
    'Lucida Console',
    'Palatino',
    'Bookman',
    'Candara',
    'Segoe UI',
    'Franklin Gothic Medium',
    'Monaco',
    'Copperplate',
    'Papyrus',]
  setFont(fonts[Math.floor(Math.random() * fonts.length)])
  ;
    
    
    // jeśli input pusty -> nic nie rób
    if (task.trim() === '') {
      return
    }

// dodanie nowego zadania do listy
const newTask = {
  id: Date.now(),
  text: task,
  flash: true,
  done: false,
}
    
setTasks([...tasks, newTask])

// wyczyszczenie inputa
setTask('')
}

const toggleTask = (id) => {
  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, done: !item.done }
        : item
    )
  )
}

  return (
    <div className="app">
      <h1>Moja Checklista</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Wpisz zadanie do wykonania..."
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
          fontFamily: font,
          
        }}>
          Dodaj
        </button>
      </div>

      <ul className="task-list">
      {tasks.map((item) => (
        <li
          key={item.id}
          className={
          item.done ? 'done-task' : 'flash-task'}
          onClick={() => toggleTask(item.id)}
        >
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggleTask(item.id)}
          onClick={(e) => e.stopPropagation()}
        />
      
          {item.text}
      </li>
))}
    </ul>
  </div>
  )
}

export default App
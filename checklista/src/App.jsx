import { useState } from 'react'
import './App.css'

function App() {
  // przechowuje tekst wpisany w input
  const [task, setTask] = useState('')

  // przechowuje wszystkie zadania
  const [tasks, setTasks] = useState([])

  // funkcja dodająca zadanie
  const addTask = () => {
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

        <button onClick={addTask}>
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
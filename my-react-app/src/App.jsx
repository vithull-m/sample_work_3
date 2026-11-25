import TaskItem from './components/TaskItem.jsx'
import './App.css'

function App() {
  return (
    <div className="tasks">
      <h1>My Tasks</h1>
      <TaskItem task="Read a book" />
      <TaskItem task="Finish homework" />
      <TaskItem task="Go for a walk" />
    </div>
  )
}

export default App

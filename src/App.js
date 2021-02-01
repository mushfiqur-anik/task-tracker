import {useState, useEffect} from "react"
import Header from     "./components/Header"
import Tasks  from     "./components/Tasks"
import AddTask from    "./components/AddTask"

function App() {
  // Show Add task area 
  const [showAddTask, setShowAddTask] = useState(false)

  // Using state to set tasks
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  
  // Fetch all the tasks from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    console.log(data)
    return data
  }

  // Add new Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete a task
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle the reminder
  const toggleReminder = (id) => { 
    setTasks(
      tasks.map((task) => task.id === id? 
       {...task, reminder: !task.reminder} : task 
      )
    )
  }

  // Return ...
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask }
              title="Task Tracker"/>     
      {showAddTask &&  <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
       <Tasks
         tasks={tasks} 
         onDelete={deleteTask} 
         onToggle={toggleReminder}
       />
       : "No more tasks left"}
    </div>
  );
}

export default App;

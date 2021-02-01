import {useState, useEffect} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks  from "./components/Tasks"
import AddTask from "./components/AddTask"
import About from "./components/About"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)   // Show Add task area 

  const [tasks, setTasks] = useState([])   // Using state to set tasks

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

  // Fetch task with the specific id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  // Add new Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks",
                      {method: "POST", 
                       headers: {"Content-type": "application/json"},
                       body: JSON.stringify(task)
                      })
    
    const data = await res.json() 

    setTasks([...tasks, data])
  }

  // Delete a task
  const deleteTask = async (id) => { 
    await fetch (`http://localhost:5000/tasks/${id}`,
                  { method: "DELETE"})

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle the reminder
  const toggleReminder = async (id) => { 
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks${id}`, {
                             method: "PUT", 
                             headers: {
                               "Content-type": "application/json"
                             },
                             
                             body: JSON.stringify(updatedTask) })

    const data = await res.json()
    
    setTasks(
      tasks.map((task) => task.id === id? 
       {...task, reminder: !task.reminder} : task )
    )
  }

  // Return ...
  return (
  <Router> 
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask }
              title="Task Tracker"
      />     
  

      <Route path="/" exact render={(props) => (
        <>
         {showAddTask &&  <AddTask onAdd={addTask} />}
         {tasks.length > 0 ? 
            <Tasks
               tasks={tasks} 
               onDelete={deleteTask} 
               onToggle={toggleReminder}
             />
            : "No more tasks left"}
        </>
      )} />

       <Route path="/about" component={About}/>

      <Footer/>
      
    </div>
  </Router>
  );
}

export default App;

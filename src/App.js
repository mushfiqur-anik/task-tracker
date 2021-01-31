import {useState} from "react"
import Header from     "./components/Header"
import Tasks  from     "./components/Tasks"
import AddTask from    "./components/AddTask"

function App() {

  // Using state to set tasks
  const [tasks, setTasks] = useState([
    { 
      id:       1,
      text:     'Do Laundry',     
      day:      'Feb 2nd at 10pm',
      reminder: true
    },
    { 
      id:       2,
      text:     'Pay rent',     
      day:      'Feb 3nd at 10am',
      reminder: true
    },
    {
      id:       3,
      text:     'Do Exercise',     
      day:      'Feb 2nd at 11am',
      reminder: false
    }
  ])
  
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
      <Header title="Task Tracker"/>     
      <AddTask onAdd={addTask} />
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

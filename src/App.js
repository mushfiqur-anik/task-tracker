import {useState} from "react"
import Header from     "./components/Header"
import Tasks  from     "./components/Tasks"



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

  // deleteTask function
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Return ...
  return (
    <div className="container">
      <Header title="Task Tracker"/> 
      {tasks.length > 0 ? 
       <Tasks tasks={tasks} onDelete={deleteTask}/>
       : "No more tasks left"}
    </div>
  );
}

export default App;

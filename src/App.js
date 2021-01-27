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

  // Return ...
  return (
    <div className="container">
      <Header title="Task Tracker"/> 
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

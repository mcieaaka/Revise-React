import "./App.css";
import Todo from "./Components/Todo" 
import Modal from "./Components/Modal"
import Backdrop from "./Components/Backdrop"


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="react" />
      <Todo text="flutter"/>
      <Todo text="SVM"/>
      <Todo text="ML"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

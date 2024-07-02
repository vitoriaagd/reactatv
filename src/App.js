import './App.css';
import TodoList from "./Componentes/toDoList";
 
function App() {
  const tasksList = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir um projeto simples' },
    { id: 3, text: 'Entender Props e State' }
  ];
 
  return (
    <TodoList content={tasksList} />
  );
}
 
export default App;

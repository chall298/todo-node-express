// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Todos from './components/Todos';
import Preloader from './components/Preloader';
import Header from './components/Header';
import './App.css';
// import { addListener } from 'nodemon';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5001")
      setTodos(res.data)
    }
    getTodos();
  }, [])

  return (
    <div className="App">
      <div className="container">
      <Header />
      {todos ? <Todos todos={todos}/> : (
        <Preloader />
      )}
      </div>
    </div>
  );
}

export default App;

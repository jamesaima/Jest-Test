import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Hello from "./components/hello"
function App() {
  return (
    <div className="App">
      <Hello name="James" />
      <Login />
    </div>
  );
}

export default App;

import "./App.css";
import LoginForm from "./components/LoginForm";
import Table from "./components/Table";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}/>
      <Route path="/table" element={<Table />}/>
    </Routes>
  );
}

export default App;

import './App.css';
/* import Login_1 from './composant/logsign/index' */
import Head from "./composant/navbar/header";
import Aboard from './composant/Admin_board/Aboard';

function App() {
  return (
    <div className="App">
    {/*  <Login_1 /> */}
    <Head />
    <Aboard />
    </div>
  );
}

export default App;

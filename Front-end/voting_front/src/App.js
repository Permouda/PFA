import './App.css';
/* import Login_1 from './composant/logsign/index' */
import Head from "./composant/navbar/header";
import Aboard from './composant/Admin_board/Aboard';

import Partie_politique from './composant/Liste_PP/Partie_politique';


function App() {
  return (
    <div className="App">
    {/*  <Login_1 /> */}
    <Head />
    
    <Partie_politique/>
    </div>
  );
}

export default App;

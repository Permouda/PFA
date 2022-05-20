import './App.css';
import Login_1 from './composant/logsign/index'
import Head from "./composant/navbar/header";
import Aboard from './composant/Admin_board/Aboard';

import Partie_politique from './composant/Liste_PP/Partie_politique';
import Results from './composant/Results/Results';


function App() {
  return (
    <div className="App">
     
    <Head />
   <div className='Register_set'><Login_1 /></div>
    
     {/* <Partie_politique/>  */}
    {/* <Results /> */}


    </div>
  );
}

export default App;

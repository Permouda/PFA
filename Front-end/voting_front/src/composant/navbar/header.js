import React, {Component} from 'react';
import "./header.css"


class head extends Component {
    render() {
        return (
        <div>
            <header className="header" id="header">
                <nav className="nav">
                {/*logo*/}
                    <a href="#" className="nav__logo left_side"><div className="  nav__logo_2">Systeme voting</div></a>
                {/*menu*/}
                    <div className="nav__menu  right_side" id="nav-menu">
                       
                       <div className="rs_ul">
                       {/* <input type="checkbox" name="">

                            
        </input>*/}
                        
                       
                         {/*liste lu*/}
                        <ul className="nav__list">
                            <li className="nav__item">
                                {/*les href makikhdmouch hna kin prb*/}
                                <a href="#" className="nav__link">Connexion</a>
                            </li>
                            <li className="nav__item">
                                <a href="#"  className="nav__link">Results</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Parties Politique</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">About</a>
                            </li>

                        </ul>

                        </div>
               
                          
               
{/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="nav__close">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                            </svg>
 <div className="nav__toggle" id="nav-toggle">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"/>
                            </svg>

                        </div> 
*/}
                       
 
                    </div>  {/*fin menu*/}

                </nav> 

            </header>

       
              
                      
            
           

            
        </div>
                    

        );
    }
}

export default head;
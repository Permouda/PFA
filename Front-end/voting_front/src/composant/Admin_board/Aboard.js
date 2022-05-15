import React from 'react'
import "./Aboard.css"

export default function Aboard() {
  return (
    <div className='Aboard_1'>
        <div className='Aboard_2'>
            <div className='right_side_1'>
                <h1 className='title'>Admin</h1>
                <img src={process.env.PUBLIC_URL + '/Permouda_pic_1.jpg'} className="image_1"/>
                <div className='info'>
                <h2>Name</h2>
                <div className='ligne'><h3>Id:</h3><p>a12325ds</p></div>
                <div className='ligne'><h3>City:</h3><p>Casablanca</p></div>
                </div>
                
            </div>
            <div className='left_side_1'>
                <div className='liste'><div className='scroller'>
                
                <div className='liste_1'>
                    <h2>1</h2>
                    <h3>Partie 1</h3>
                    <img src={process.env.PUBLIC_URL + '/Permouda_pic_1.jpg'} className="partie_pic"/>
                    <div className='nav__item btnn'>
                        <a className='nav__link'>info</a></div>
                </div>
                <div className='liste_1'>
                    <h2>1</h2>
                    <h3>Partie 1</h3>
                    <img src={process.env.PUBLIC_URL + '/Permouda_pic_1.jpg'} className="partie_pic"/>
                    <div className='nav__item btnn'>
                        <a className='nav__link'>info</a></div>
                </div>
                <div className='liste_1'>
                    <h2>1</h2>
                    <h3>Partie 1</h3>
                    <img src={process.env.PUBLIC_URL + '/Permouda_pic_1.jpg'} className="partie_pic"/>
                    <div className='nav__item btnn'>
                        <a className='nav__link'>info</a></div>
                </div>
                <div className='liste_1'>
                    <h2>1</h2>
                    <h3>Partie 1</h3>
                    <img src={process.env.PUBLIC_URL + '/Permouda_pic_1.jpg'} className="partie_pic"/>
                    <div className='nav__item btnn'>
                        <a className='nav__link'>info</a></div>
                </div>

                </div>
                </div>
                
                
                </div>    
    </div>
    
    </div>
  )
}

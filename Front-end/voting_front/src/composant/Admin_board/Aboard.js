import React from 'react'
import "./Aboard.css"
import Liste_pp from '../Liste_PP/liste_pp'

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
                <div className='liste'>
                    <div className='scroller'>
                <Liste_pp />
                </div>
                </div>
                
                
                </div>    
    </div>
    
    </div>
  )
}

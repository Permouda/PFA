import React, { Component } from 'react'
import loginImg from "./login.svg"

export class Register extends React.Component {
   constructor(props){
        super (props);

   }
   
    render() {
        return (
            <div>
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header_log">Register</div>
                    <div className="content">
                        <div className="image_log">
                            <img src={loginImg}/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" />
                            </div>
                        </div>

                    </div>
                    <div className="footer_log">
                        <button type="button" className="btn">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

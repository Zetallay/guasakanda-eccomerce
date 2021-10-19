import React from 'react';

import {ReactComponent as Logo} from '../../assets/logo.svg'

import './signin.styles.scss'

class Signin extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleChange = e =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = e =>{
        e.preventDefault()
    }

    render(){
        return (
            <div className='sign-in'>
                <div className="sign-in-box">
                    <div className="sign-in-side">
                        <p className='sign-in-title'>Sign In</p>
                        <form className='sign-in-form' onSubmit={this.handleSubmit}>
                            <div className="sign-in-inputs">
                                <input className='sign-in-input' type="email" name="email" id="sign-in-email" onChange={this.handleChange}/>
                                <label className={`sign-in-label
                                                   ${this.state.email.length ? 'sign-in-label-animation' : ''}  `} htmlFor="email">Email</label>
                            </div>
                            <div className="sign-in-inputs">
                                <input className='sign-in-input' type="password" name="password" id="sign-in-password" onChange={this.handleChange}/>
                                <label className={`sign-in-label
                                                   ${this.state.password.length ? 'sign-in-label-animation' : ''}  `} htmlFor="password" required>Password</label>
                            </div>
                            <input className='sign-in-button' type="submit" value="Continue" />
                        </form>
                        <p className='not-account'>¿Do not have an account?.<span>Sign Up</span></p>
                    </div>
                    <div className="sign-in-logo">
                        <Logo className='sign-in-img'/>
                        <p>Ecommerce</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signin;
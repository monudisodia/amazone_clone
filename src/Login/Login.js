import React from 'react'
import arrow from '../Header/arrow.png'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>

            <div className='amazon_title'>
                <span className='logo_name'>amazon</span>
                <span ><img src={arrow} alt='amazon_logo' className='logo_img' /></span>
            </div>

            <div className='login'>
                <h2>Sign-in</h2>
                <div className='inpud_details'>
                    <label >E-mail</label><br />
                    <input type="email" /><br />

                    <label >Password</label><br />
                    <input type="password" /><br /><br />
                    <button className='sign_btn'>Sign in</button><br/>
                    <p>By Signing in you agree to the AMAZON FAKE CLONE Condition of use and sale. 
                        Please see our Privacy Notice,or our Cookies notices and our interest-based ads notice.</p><br/>

                        <button>Create Your Amazon Account</button><br/>
                </div>
            </div>
        </div>
    )
}

export default Login;

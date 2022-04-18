import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
   }
   if(user) {
       navigate('/home');
   }

   const handleRegister = event => {
       event.preventDefault()
    const name= event.target.name.value; 
    const email= event.target.email.value
    const password= event.target.password.value
        createUserWithEmailAndPassword(email, password)
   }
    return (
        <div className='register-form'> 
                <h1 className='text-center '>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
           
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accepts Genius Car terms and Conditions</label>
                <input className="w-50 mx-auto d-block mb-2 btn btn-primary mt-2"  type="submit" value="Register" />

            </form>
            <p>Already Have an Account ?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
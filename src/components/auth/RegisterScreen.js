import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2'


import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { registerWithEmailPassword } from '../../actions/auth';


const initialForm = {
    name: '',
    email: '',
    password:'',
    password2:'',
}
export const RegisterScreen = () => {




    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

   

    const [ formValues, handleInputChange] = useForm( initialForm );


    const {name, email, password, password2} = formValues

    const handleRegister = (e) => {
        e.preventDefault()

        if(isFormValid()) 
        {
            dispatch(registerWithEmailPassword(email, password, name))
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0)
        {
            dispatch(setError(Swal.fire('Error','Name is required')))
            return false;
        }else if(!validator.isEmail( email )) {
            dispatch(setError(Swal.fire('Error','Email is not valid')))
            return false;
        }else if( password !== password2 || password.length < 5){
            dispatch(setError(Swal.fire('Error','Passwords are not the same')))
            return false;
        }

        dispatch(removeError())
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

        

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange= {handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange= {handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange= {handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange= {handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

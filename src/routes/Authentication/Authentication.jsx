import React from 'react'
import SignInForm from '../../components/SignInForm/SignInForm.jsx'
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import './authentication.scss'

const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>

    )
}

export default Authentication
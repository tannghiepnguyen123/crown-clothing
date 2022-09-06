import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import './signUpForm.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(() => defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use")
            }
            console.log("User creation encountered an error", error)
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" name='displayName' type="text" required onChange={handleChange} value={displayName} />
                <FormInput label="Email" name='email' type="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" name='password' type="password" required onChange={handleChange} value={password} />
                <FormInput label="Confirm password" name='password' type="password" required onChange={handleChange} value={password} />
                <Button buttonType={"default"} type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm
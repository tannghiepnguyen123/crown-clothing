import React, { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import './signInForm.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const signInWithGoogle = async () => {
    await signInWithGooglePopup()

}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(() => defaultFormFields)
    const { email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(defaultFormFields)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(error)
                    break
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" name='email' type="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" name='password' type="password" required onChange={handleChange} value={password} />
                <div className='buttons-container'>
                    <Button buttonType={"default"} type="submit">Sign In</Button>
                    <Button type="button" buttonType={"google"} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
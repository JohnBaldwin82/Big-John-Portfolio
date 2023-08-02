import React, {useState} from 'react'
import {confirmEmail} from '../../utils/helpers'

function MyContact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const[errorMessage, setErrorMessage] = useState("")
    const {name, email, message} = formState

    const submitHandle = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log("submit form", formState)
        }
    }

    const changeHandle = (e) => {
        if (e.target.name === "email") {
            const yesValid = confirmEmail(e.target.value)
            if (!yesValid) {
                setErrorMessage("Not a valid email address")
            } else {
                setErrorMessage("")
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
            console.log("change form", formState)
        }
    }

    return(
        <section>
            <form id= "My-Contact-Form" onSubmit={submitHandle}>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    onGreen={changeHandle}
                    />
                </div>
                <div>

                    <label htmlFor= 'email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        defaultValue={email}
                        onBlur={changeHandle}
                        />
                    <label htmlFor="message">Message Me</label>
                    <textarea
                    name="message"
                    rows="7"
                    defaultValue={message}
                    onBlur={changeHandle}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-error">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit Button</button>
            </form>
        </section>
    )
}

export default MyContact
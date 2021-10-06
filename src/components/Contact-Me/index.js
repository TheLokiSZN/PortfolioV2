import React, {useState} from 'react'
import {validateEmail} from "../../utils/helpers"

function ContactMe() {
    const [formState, setFormState]=useState({
        name: '',
        email: '',
        message: '', 
    })
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                    name="message"
                    rows="5"/>
                </div>
            </form>
        </div>
    )
}

export default ContactMe

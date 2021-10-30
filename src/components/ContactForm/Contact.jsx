import { Container } from "@material-ui/core"
import React from "react"
import "./Contact.css"
const Contact = () => {

    const handleFormSubmit = ( e ) => {
        e.preventDefault()
    }
    return (
        <div className="contact-us-contact">
            <Container>
                <div className="form-container">
                    <h1 className="contactus-text">Comments</h1>
                    <form onSubmit={ handleFormSubmit }>
                        <div className="input-container-form">
                            <div>
                                <label htmlFor="name">Name*</label>
                            </div>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-container-form">
                            <div>
                                <label htmlFor="email">Email*</label>
                            </div>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-container-form">
                            <div>
                                <label htmlFor="subject">Subject*</label>
                            </div>
                            <input type="text" placeholder="Type the subject" />
                        </div>
                        <div className="input-container-form">
                            <div>
                                <label htmlFor="message">Message</label>
                            </div>
                            <textarea type="text" placeholder="Enter your message" />
                        </div>
                        <div className="input-container-form">
                            <button className="btn-form">Submit Comment</button>
                        </div>
                    </form>
                </div>
                
            </Container>
        </div>
    )
}

export default Contact

import React from 'react';

const Contact = () => {
    
    return (
        <div className='form-section' >
            <h2>Professional Inquires</h2>
            <form className='form-input'>
                Name:
                <input 
                type="text"
                placeholder='name'
                name='name'/>
                <br/>
                Email
                <input 
                type="text"
                name='email'
                />
                <br/>
                Subject
                <input 
                type="text"
                name='subject'
                />
                <br/>
                <textarea>

                </textarea>

            </form>

        </div>
    )
}
export default Contact;
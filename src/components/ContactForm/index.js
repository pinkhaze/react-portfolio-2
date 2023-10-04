import React, { useState} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setBody] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState("");
    
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType === 'name') {
          setName(inputValue);
      }
      if (inputType === 'email') {
          setEmail(inputValue)
      }
      if (inputType === 'message') {
          setBody(inputValue)
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  

      // First, check to see if the email is not valid or if the name/message is empty.
      // If so set an error message to be displayed on the page.
      if (!validateEmail(email)) {
          setErrorMessage('Email is invalid. Both are required for submission.');
      }  else if (!name){
          setErrorMessage('Your name required.');
      } else if (!message) {
          setErrorMessage('Message required.');
      } else {
          setSubmitted('Received')
      }
    };


    return (

        <Form className="form">
        <Form.Group widths='equal'>
            <Form.Field 
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder='Name'
                value={name}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Field
            id='form-textarea-control-message'
            control={TextArea}
            label='Message'
            placeholder='Enter your message here'
            value={message}
            onChange={handleInputChange}
        />
        <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            value={email}
            onChange={handleInputChange}
/>
<Form.Field
id='form-button-control-public'
control={Button}
content='Submit'
label='Click here'
/>
</Form>
        

        
    )
}

export default Contact;
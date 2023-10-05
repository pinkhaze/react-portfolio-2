import React, { useState} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

function Contact() {
  
    return (
        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                />
            </Form.Group>

                 <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='john@doe.com'
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                />

                <Form.Field
                    id='form=textarea-control-message'
                    control={TextArea}
                    label='Mesage'
                    type="text"
                    name="message"
                    defaultValue={message}
                    onBlur={handleChange}
                />
                
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Submit'
                />
        </Form>
    );
  }

  export default Contact;
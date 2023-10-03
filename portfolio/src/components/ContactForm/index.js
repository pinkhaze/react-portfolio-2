import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const Contact = () => {

    
    return (

        <Form >
        <Form.Group widths='equal'>
            <Form.Field 
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder='Name'
            />
        </Form.Group>
        <Form.Field
            id='form-textarea-control-message'
            control={TextArea}
            label='Message'
            placeholder='Enter your message here'
        />
        <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            error={{
            content: 'Please enter a valid email address',
            pointing: 'below',
        }}
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
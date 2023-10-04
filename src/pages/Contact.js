import React from 'react';
import { Divider } from 'semantic-ui-react'

import ContactForm from '../components/ContactForm'

const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        backgroundColor: '#a45479',
        minHeight: '600px',
    },
    divider: {
        height: '200px'
    },
}

const Contact = () => {

    return (
        <div className="ui vertical segment">
        <div style={styles.grid} className="ui middle aligned stackable grid container">
            <div className="row">
                <div className="eight wide column">
                    <h3 className="ui-header">GET IN TOUCH.</h3>
                    <p>Phasellus efficitur interdum tincidunt. Praesent semper facilisis libero ac malesuada. </p>
                </div>
                <div style={styles.form} className="six wide centered column">
                    <ContactForm />

                </div>
            </div>
            <Divider style={styles.divider} vertical></Divider>
        </div>
    </div>
    )
}

export default Contact;
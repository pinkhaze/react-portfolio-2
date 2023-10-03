import React from 'react';
import { Header } from 'semantic-ui-react'

const styles = {
    header: {
        color: 'orange',
        fontSize: '45px',
        padding: '10px'
    }
}

export default function Heading () {
    return (
        <header>
            <Header as='h1' style={styles.header} className="name-heading">Monika Racia</Header>
        </header>
        
    )
}

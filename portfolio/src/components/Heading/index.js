import React from 'react';
import { Header } from 'semantic-ui-react'
import '../../styles/Heading.css'

const styles = {
    header: {
        color: 'teal',
        padding: '1.2rem'
    }
}

export default function Heading () {
    return (
        <div>
            <Header as='h1' style={styles.header}>Monika Racia</Header>
        </div>
    )
}

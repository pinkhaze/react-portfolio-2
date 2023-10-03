import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '60px',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '0',
        marginBottom: '0',
    }
}

export default function Footer () {
    return (
    <footer style={styles.footer}>
        <div className="ui container centered grid">
        <div>
        <i className="huge github icon"></i>
        </div>

        </div>
    </footer>
    )
}

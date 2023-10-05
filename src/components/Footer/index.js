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
            <a href="https://github.com/pinkhaze">
                <i className="huge github square icon"></i>
            </a>
            <a href="https://www.linkedin.com/">
                <i className="huge linkedin icon"></i>
            </a>
            <a href="https://stackoverflow.com/">
                <i className="huge stack overflow icon"></i>
            </a>
        </div>

        </div>
    </footer>
    )
}

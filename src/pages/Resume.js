import React from 'react';
import { Divider } from 'semantic-ui-react'
import MyResume from '../assets/monika-racia-resume.pdf'

const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        backgroundColor: '#a45479',
        minHeight: '600px'
    },
    divider: {
        height: '200px',
    },
    button: {
        backgroundColor: 'orange',
        marginTop: '25px',
        padding: '25px'
    }
}

const Resume = () => {
    return (
        <div className="ui vertical segment">
            <div style={styles.grid} className="ui stackable grid container">
                <div className="row">
                    <div className="seven wide column">
                        <h3 className="ui header centered">Browser Based Technologies</h3>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript/jQuery</li>
                            <li>Responsive design</li>
                            <li>Bootstrap, Bulma and Semantic UI</li>
                            <li>Progressive Web Applications</li>
                            <li>Local Storage, Session Storage, IndexedDB</li>
                            <li>React.js</li>
                        </ul>
                        <h3 className="ui header centered">Databases</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                        <h3 className="ui header centered">Server Side Development</h3>
                        <ul>
                            <li>User Authentication</li>
                            <li>Template Engines</li>
                            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                        </ul>
                    </div>
                    
                    <div className="seven wide right floated column">
                        <h3 className="ui header centered">API Design</h3>
                        <ul>
                            <li>API</li>
                            <li>REST</li>
                            <li>JSON</li>
                            <li>AJAX (Fetch API)</li>
                            <li>HTTP Request Methods</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
                <Divider style={styles.divider} vertical></Divider>
                
            </div>
            <div className="ui center aligned container">
                <a href={MyResume} target="_blank" rel="noreferrer"><button style={styles.button} className="ui inverted button standard">Download Resume</button></a>
            </div>
        </div>     
    )
}

export default Resume;
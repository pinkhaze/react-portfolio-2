import React from 'react';
import Project from '../components/Project';
import projects from '../projects';

const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        marginBottom: '80px',
        backgroundColor: '#a45479',
        minHeight: '600px'
    },
}
const Portfolio = () => {
    return (
    <div className="ui vertical segment">
        <div style={styles.grid} className="ui middle aligned stackable grid container">
            <div className="row">
                <div className="column">
                <Project projects={projects}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;
import React from 'react';
import ProfilePhoto from '../assets/images/profile-photo.png';
import { Divider } from 'semantic-ui-react'
 
const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        backgroundColor: '#a45479',
        minHeight: '600px'
    },
    divider: {
        height: '200px'
    }
}

const About = () => {
    return (
        <div className="ui vertical segment">
            <div style={styles.grid} className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <h3 className="ui header">HELLO.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, leo ac euismod dapibus, eros purus ultrices metus, at posuere risus nulla varius nisl. Integer lacinia tristique massa, quis faucibus eros posuere eu. Phasellus efficitur interdum tincidunt. Praesent semper facilisis libero ac malesuada. </p>
                        <h3 className="ui header">'I'M MONIKA.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, leo ac euismod dapibus, eros purus ultrices metus, at posuere risus nulla varius nisl. Integer lacinia tristique massa, quis faucibus eros posuere eu. Phasellus efficitur interdum tincidunt. Praesent semper facilisis libero ac malesuada. </p>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui medium fluid image" src={ProfilePhoto} alt="black and white female avatar"></img>
                    </div>
                </div>
                <Divider style={styles.divider} vertical></Divider>
            </div>
        </div>
    )
}
 
export default About;
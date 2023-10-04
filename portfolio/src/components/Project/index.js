import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const styles = {
    image: {
        width: '160px'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: '150px',
        width: '400px'
    },
}
  
export default function Project ({projects}) {
    return (
        <div className="ui container">
            {projects.map((project) => (
                <Card.Group itemsPerRow={2}>
                    <Card style={styles.card} className="item">
                        <Image className="ui circular image" style={styles.image} src={project.preview} alt={project.alt} />
                        <Card.Content style={styles.content}>
                            <Card.Header>{project.title}
                            </Card.Header>
                            <Card.Meta>{project.technologies}</Card.Meta>
                            <Card.Description>{project.description}</Card.Description>
                            <a href={project.repository}>
                                <Icon className="big" name='github' />
                            </a>
                        </Card.Content>
                    </Card>
                </Card.Group>
            ))}
        </div>
    )
}


import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const styles = {
    image: {
        width: '220px'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: '150px',
        width: '500px'
    },
}
  
export default function Project ({projects}) {
    return (
        <Grid className="">
            <Card.Group>
                {projects.map((project) => (
                    <Card style={styles.card} className="item">
                        <Image className="ui circular image" style={styles.image} src={project.preview} alt={project.alt} />
                        <Card.Content style={styles.content}>
                            <Card.Header>{project.title}</Card.Header>
                            <Card.Meta>
                                {project.technologies}
                            </Card.Meta>
                            <Card.Description>
                                {project.description}
                            </Card.Description>
                            <Card.Description className="center aligned">
                                <a href={project.repository}>
                                    <Icon className="big" name='github' />
                                </a>
                                <a href={project.deployed}>
                                    <Icon className="big" name='rocket' />
                                </a>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Grid>
    )
}


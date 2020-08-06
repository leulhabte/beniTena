import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from '../Styling/styling';

const AboutUs = ()=>{
    const classes = useStyles();
    return(
        <div>
            <Container maxWidth='xl' className={classes.homeContainerHead2}>
                <Typography component='div' className={classes.overlay2}/>
                <Container className={classes.homeTitleHolder}>
                    <Typography variant='h2'>About Us</Typography>
                </Container>
            </Container>
        </div>
    );
}

export default AboutUs;
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from '../Styling/styling';

const ContactUs = ()=>{
    const classes = useStyles();
    return(
        <div>
            <Container maxWidth='xl' className={classes.homeContainerHead3}>
                <Typography component='div' className={classes.overlay3}/>
                <Container className={classes.homeTitleHolder}>
                    <Typography variant='h2'>Contact Us</Typography>
                </Container>
            </Container>
        </div>
    );
}

export default ContactUs;
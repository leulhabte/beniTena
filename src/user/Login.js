import React from 'react';
import useStyles from '../Styling/styling';
import {TextField, Grid, Paper, Button, Box, Avatar, Container} from '@material-ui/core';
import userImage from '../Res/user.jpg';
import {AccountCircle, Security} from '@material-ui/icons';
import axios from 'axios';

const LogIn = props =>{

    const classes = useStyles();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const userInfo = {
            userName: event.target.username.value,
            password: event.target.password.value
        }
        axios.post('authenticate', userInfo)
        .then(res=>{
            props.handleLogin(res.data.token);
            console.log(res.data.token)
        })
        
    }

    return(
        <div className={classes.formMain}>
          <Container className={classes.container}>
                <Avatar src={userImage} className={classes.avatar}/>  
          </Container>
          <Container className={classes.formContainer}>
                <form onSubmit={handleSubmit}>
                    <Paper elevation={3}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box display="flex" mx={6} my={3}>
                                    <AccountCircle className={classes.icons}/>
                                    <TextField
                                        fullWidth
                                        label='User name'
                                        name='username'
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" mx={6} my={3}>
                                    <Security className={classes.icons}/>
                                    <TextField
                                        fullWidth
                                        label='Password'
                                        name='password'
                                        type='password'
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mx={6} my={3}>
                                    <Button fullWidth className={classes.formButton} type='submit'>Log in</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
          </Container>
        </div>
    );

}

export default LogIn;
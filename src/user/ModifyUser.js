import React from 'react';
import useStyles from '../Styling/styling';
import {TextField, Grid, Paper, Button, Box, Avatar, Container} from '@material-ui/core';
import userImage from '../Res/user.jpg';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loading from '../Components/Loading';
import {withRouter} from 'react-router-dom'
import {AccountCircle, Security, VpnKey, VerifiedUser} from '@material-ui/icons';


const ManageAcc = props =>{

    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setLoading(!loading);
        if(event.target.newpass.value === event.target.repass.value){
            const userInfo = {
                username: event.target.username.value,
                oldPass: event.target.previouspass.value,
                newPass: event.target.newpass.value,
            }
            const token = Cookies.get('jwt');
            console.log(token)
            axios.post(`changePass`,null,{
                params: userInfo,
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(res=>{
                if(res.status === 200){
                    props.handleLogout();
                }else if (res.status !== 200){
                    setLoading(true);
                    alert('Error try again')
                }
            }).catch(err=>{
                setLoading(true);
                alert('Error try again')
            })
            
        }else{
            setLoading(true);
            alert('Incorrect password');
        }
        
    }

    return(
        <div className={classes.formMain}>
            {loading? 
        <div>
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
                                        label='Previous Password'
                                        name='previouspass'
                                        type='password'
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" mx={6} my={3}>
                                    <VerifiedUser className={classes.icons}/>
                                    <TextField
                                        fullWidth
                                        label='New Password'
                                        name='newpass'
                                        type='password'
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" mx={6} my={3}>
                                    <VpnKey className={classes.icons}/>
                                    <TextField
                                        fullWidth
                                        label='Retype Password'
                                        name='repass'
                                        type='password'
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mx={6} my={3}>
                                    <Button fullWidth className={classes.formButton} type='submit'>Update Profile</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
          </Container>
          </div>: <Loading/>}
        </div>
    );

}

export default withRouter(ManageAcc);
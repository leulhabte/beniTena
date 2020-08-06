import React from 'react';
import { Container, Typography, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Avatar, Box } from '@material-ui/core';
import useStyles from '../Styling/styling';
import Image from '../Res/wash.jpg';
import Image2 from '../Res/wearmask.jpg';
import Image3 from '../Res/keepdistance.jpg';
import Image4 from '../Res/cover.jpg';
import {withRouter} from 'react-router-dom'

const Home = (props)=>{
    const classes = useStyles();
    return(
        <div>
            <Container maxWidth='xl' className={classes.homeContainerHead}>
                <Typography component='div' className={classes.overlay}></Typography>
                <Container className={classes.homeTitleHolder}>
                    <Typography variant='h2'>Welcome</Typography>
                    <Typography variant='h5'>Help Prevent The Spread Of The Novel Coronavirus</Typography>
                    <Button className={classes.homeButton} onClick={()=>{props.history.push('/view')}}>Get Started</Button>
                </Container>
            </Container>
            <Container maxWidth='xl'>
                <Container className={classes.container2}>
                    <Typography variant='h5' className={classes.homeHeader}>Covid-19 Main Prevention Methods</Typography>
                    <Divider variant='middle' className={classes.divider}/>
                </Container>
                <Container className={classes.homeBody}>
                    <Grid container spacing={5}>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Clean your hands often. Use soap and water, or an alcohol-based hand rub.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image2} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                             Wear a mask when physical distancing is not possible.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image3} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Maintain a safe distance from anyone who is coughing or sneezing.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image4} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
                <Box my={15}/>
            </Container>
        </div>
    );
}

export default withRouter(Home);
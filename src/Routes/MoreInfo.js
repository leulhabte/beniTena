import React from 'react';
import {withRouter} from 'react-router-dom';
import userImage from '../Res/user.jpg';
import useStyles from '../Styling/styling';
import { Container, Grid, Box, Paper, Avatar, Typography, List, ListItem, ListItemText, ListItemIcon, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {LocalHospital} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MoreInfo = (props)=>{
    const [information, setInfo] = React.useState({});
    const {fullName, age, gender, wereda, kebele, phoneNumber, mostCommonSymptoms, lessCommonSymptoms, seriousSymptoms, additionalInfo} = information;
    const classes = useStyles();
    
    React.useEffect(()=>{
        setInfo(props.location.state.data);
    },[]);
    return(
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid container item  xs={12} className={classes.basicContainer}>
                        <Paper className={classes.infoPaper}>
                                <Container maxWidth='xl' className={classes.imageContainer}>
                                    <Avatar src={userImage} className={classes.moreInfoAvatar}/>
                                </Container>
                                <Container>
                                    <Box display='flex' flexGrow='1' justifyContent='flex-start'>
                                        <Typography className={classes.basicHeader}>Basic Information</Typography>
                                    </Box>
                                </Container>
                                <Container>
                                   <Grid item container spacing={3}>
                                        <Grid item xs={6}>
                                            <Box display='flex' flexDirection='column'>
                                                <Box my={1}/>
                                                <Typography>Full Name</Typography>
                                                <Box my={1}/>
                                                <Typography>Age</Typography>
                                                <Box my={1}/>
                                                <Typography>Gender</Typography>
                                                <Box my={1}/>
                                                <Typography>Phone Num</Typography>
                                                <Box my={1}/>
                                                <Typography>Wereda</Typography>
                                                <Box my={1}/>
                                                <Typography>Kebele</Typography>
                                                <Box my={1}/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                        <Box display='flex' flexDirection='column'>
                                                <Box my={1}/>
                                                    <Typography style={{overflow: 'hidden'}}>{fullName}</Typography>
                                                    <Box my={1}/>
                                                    <Typography>{age}</Typography>
                                                    <Box my={1}/>
                                                    <Typography>{gender}</Typography>
                                                    <Box my={1}/>
                                                    <Typography>{phoneNumber}</Typography>
                                                    <Box my={1}/>
                                                    <Typography>{wereda}</Typography>
                                                    <Box my={1}/>
                                                    <Typography>{kebele}</Typography>
                                                    <Box my={1}/>
                                                </Box>
                                        </Grid>
                                    </Grid> 
                                </Container>
                        </Paper>
                    </Grid>
                    <Grid container item  xs={12}  className={classes.basicContainer}>
                        <Container maxWidth='xl' className={classes.infoHeader}>
                                <Typography variant='h5'>Symptoms</Typography>  
                            </Container>
                            <Accordion style={{width: '100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                >
                                    <Typography variant='h6'>Most Common Symptoms</Typography> 
                                </AccordionSummary>
                                <AccordionDetails>
                                <List className={classes.listContent}>
                                {
                                    props.location.state.data.mostCommonSymptoms.map((data, index)=>(
                                        <ListItem key={index}>
                                            <ListItemIcon><LocalHospital/></ListItemIcon>
                                            <ListItemText>{data}</ListItemText>
                                        </ListItem>
                                    ))
                                }
                                </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{width: '100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                >
                                    <Typography variant='h6'>Less Common Symptoms</Typography> 
                                </AccordionSummary>
                                <AccordionDetails>
                                <List className={classes.listContent}>
                                {
                                    props.location.state.data.lessCommonSymptoms.map((data, index)=>(
                                        <ListItem key={index}>
                                            <ListItemIcon><LocalHospital/></ListItemIcon>
                                            <ListItemText>{data}</ListItemText>
                                        </ListItem>
                                    ))
                                }
                                </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{width: '100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                >
                                    <Typography variant='h6'>Seriouse Symptoms</Typography> 
                                </AccordionSummary>
                                <AccordionDetails>
                                <List className={classes.listContent}>
                                {
                                    props.location.state.data.seriousSymptoms.map((data, index)=>(
                                        <ListItem key={index}>
                                            <ListItemIcon><LocalHospital/></ListItemIcon>
                                            <ListItemText>{data}</ListItemText>
                                        </ListItem>
                                    ))
                                }
                                </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{width: '100%'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                >
                                    <Typography variant='h6'>additionalInfo</Typography> 
                                </AccordionSummary>
                                <AccordionDetails>
                                        <Typography variant='body2'>
                                            {additionalInfo}
                                        </Typography>
                                </AccordionDetails>
                            </Accordion>
                    </Grid>
                </Grid>
            </Container>
            <Box my={10}/>
            
        </div>
    )
}

export default withRouter(MoreInfo);
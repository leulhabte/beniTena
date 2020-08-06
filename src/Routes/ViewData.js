import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody, ListItem, ListItemText, ListItemIcon, Button, Box, Container, List, IconButton} from '@material-ui/core';  
import {More} from '@material-ui/icons' 
import useStyles from '../Styling/styling';
import {withRouter} from 'react-router-dom';
import Loading from '../Components/Loading';

const View = (props)=>{
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [total, setTotal] = React.useState(10);
    const [loading, setLoading] = React.useState(false);
    const [tablePage, setTablePage] = React.useState(0);
    const [rowPerPage, setRowPerPage] = React.useState(10);
    const [totalPage, setTotalPage] = React.useState(4);

    const handleNext = ()=>{
        if(page < totalPage-1){
            setPage(page+1);    
        }
    }

    const handlePrev = ()=>{
        if(page > 0){
            setPage(page-1);
        }
    }
    
    const callApi = ()=>{
        const param = {
            page: (page+1),
            perPage: rowPerPage
        }
        const token = Cookies.get('jwt');
        axios.get('posts',{
            params: param,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>{
            setData(res.data.posts);
            setTotal(res.data.results);
            setTablePage(res.data.page);
            setTotalPage(res.data.totalPages);
            setLoading(true);
            console.log(data)
            
        })
    }


    React.useEffect(()=>{
        setLoading(false);
        callApi();
    },[page])
    
    return(
        <div>
            {loading? 
            <Container className={classes.viewDataContaier}>
                <TableContainer className={classes.tableContainer}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Full Name</TableCell>
                                <TableCell align="left">Age</TableCell>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">Wereda</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data
                                .map((row, index)=>(
                                <TableRow key={index}>
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left">{row.age}</TableCell>
                                    <TableCell align="left">{row.gender}</TableCell>
                                    <TableCell align="left">{row.wereda}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell
                                        align="left"
                                    >
                                        <IconButton onClick={()=>{const info = row; props.history.push({pathname: '/more',state: {data: info}})}}>
                                            <More className={classes.actionButton}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" flexDirection="row-reverse">
                    <Button onClick={handleNext} className={classes.pageButton}>Next</Button>
                    <Button onClick={handlePrev} className={classes.pageButton}>Prev</Button>
                    <List>
                        <ListItem>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText>Page {tablePage} of {totalPage} totall Data {total}</ListItemText>
                        </ListItem>
                    </List>
                </Box>   
            </Container>: <Loading/>}
            
        </div>
    );
}

export default withRouter(View);
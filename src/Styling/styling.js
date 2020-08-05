import {makeStyles} from '@material-ui/core';
import Image2 from '../Res/user.jpg';

const drawerwidth = 220;

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex'
    },
    appBar:{
        [theme.breakpoints.up('md')]:{
            width: `calc(100% - ${drawerwidth}px)`
        },
        background: 'white'
    },
    menuToggle : {
        [theme.breakpoints.up('md')]:{
            display: 'none',
            background: 'green'
        }
    },
    drawer:{
        [theme.breakpoints.up('md')]:{
            width: drawerwidth,
            flexShrink: 0
        }
    },
    drawerPaper:{
        width: drawerwidth,
        background: 'rgb(116, 185, 90)'
    },
    itemColour:{
        color: 'white'
    },
    menuItemColour:{
        color: 'black'
    },
    itemHeder:{
        color: 'white',
        fontWeight: 'bold'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        padding: theme.spacing(0)
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
    },
    avatar:{
        width: '6rem',
        height: '6rem',
    },
    formMain:{
        position: 'relative'
    },
    formContainer:{
        position: 'absolute',
        top: theme.spacing(13),
        [theme.breakpoints.up('md')]:{
            left: theme.spacing(1),
        },
        zIndex: '-1'
    },
    icons:{
        marginTop: theme.spacing(2.5),
        marginRight: theme.spacing(2)
    },
    formButton:{
        backgroundColor: 'rgb(128, 188, 49)',
        color: 'white',
        height: '3rem',
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)'
        }
    },
    viewDataContaier:{
        paddingTop: theme.spacing(4)
    },
    tableContainer:{
        height: '35rem'
    },
    pageButton:{
        backgroundColor: 'rgb(128, 188, 49)',
        color: 'white',
        height: '2rem',
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)'
        },
        alignSelf: "center",
        marginLeft: theme.spacing(2)
    },
    listText:{
        color: 'white',
        textDecoration: 'none'
    },
    // header:{
    //     paddingTop: theme.spacing(2)
    // },
    // headTitle:{
    //     [ theme.breakpoints.up('md')]:{
    //          marginLeft: theme.spacing(1),
    //      },
    //      marginLeft: theme.spacing(0),
    //      borderLeft: '5px solid green'
    // },
}));

export default useStyles;
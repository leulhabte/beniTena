import {makeStyles} from '@material-ui/core';
import Image from '../Res/header2.jpg';
import Image2 from '../Res/about.jpg';
import Image3 from '../Res/contact.jpg';

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
    listText2:{
        color: 'black',
        textDecoration: 'none'
    },
    imageContainer:{
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(3)
    },
    moreInfoAvatar:{
        width: '5rem',
        height: '5rem'
    },
    basicHeader:{
        fontWeight: 'bold'
    },
    infoPaper:{
        width: '100% !important'
    },
    basicContainer:{
        marginTop: theme.spacing(2)
    },
    listContent:{
        marginLeft: theme.spacing(3)
    },
    infoHeader:{
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(3)
    },
    homeContainerHead:{
        width: '100% important',
        height: theme.spacing(50),
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        background: `url('${Image}') no-repeat center center`,
        backgroundSize: 'cover'
    },
    overlay:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100%',
        opacity: '0.4',
        backgroundColor: 'black'
    },
    homeContainerHead2:{
        width: '100% important',
        height: theme.spacing(50),
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        background: `url('${Image2}') no-repeat center center`,
        backgroundSize: 'cover'
    },
    overlay2:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100%',
        opacity: '0.4',
        backgroundColor: 'black'
    },
    homeContainerHead3:{
        width: '100% important',
        height: theme.spacing(50),
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        background: `url('${Image3}') no-repeat center center`,
        backgroundSize: 'cover'
    },
    overlay3:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100% !important',
        height: '100%',
        opacity: '0.4',
        backgroundColor: 'black'
    },
    homeTitleHolder:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2),
        alignItems: 'center',
        color: 'white',
        zIndex: 1
    },
    homeButton:{
        color: 'white',
        backgroundColor: 'rgb(128, 188, 49)',
        marginTop: theme.spacing(2),
        '&:hover':{
            backgroundColor: 'rgb(113, 174,33)'
        },
        height: '3rem',
        width: '15%'
    },
    homeHeader: {
        fontWeight: 'bold'
    },
    homeBodyText:{
        marginLeft: theme.spacing(3)
    },
    homeBody:{
        marginTop: theme.spacing(4)
    },
    divider:{
        height: '0.2rem !important',
        width: '40%',
        backgroundColor: 'rgb(128, 188, 49)',
        border: '0px solid',
        marginTop: '1rem'
    },
    container2:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center'
    },
    actionButton:{
        color: 'Green'
    }
}));

export default useStyles;
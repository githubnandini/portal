import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading : {
        color : '#232c77',
        paddingBottom : '1em',
        paddingTop : '0.5em'
    },
    portalContainer : {
        maxWidth : '500px',
        margin : '0 auto',
        backgroundColor : '#f4f4f4'
    },
    formConatiner : {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
    },
    block : {
        width: '100%',
        maxWidth: '500px'
    },
    inputField : {
        width: '100%',
        maxWidth: '400px',
        paddingBottom: '1em',
        margin: '0 auto'
    },
    inputConatiner : {
        width: '100%',
        maxWidth: '400px' 
    },
    link : {
        textDecoration : 'none',
        '&:hover': {
            color: '#fff',
        }
    },
    inputFile : {
       padding : '10px 0'
    },
   buttonColorDownload : {
        color: '#3f51b5',
        borderRadius: '0',
        padding : '5px 10px',
        '&:hover': {
            background: '#3f51b5',
        }
    },
    inputIcon : {
        paddingTop: '0'
    },
    buttonColorSend : {
        background: '#3f51b5',
        color: '#fff',
        border: '1px solid #3f51b5',
        borderRadius: '0',
        padding : '2px 12px',
        marginBottom : '1em',
        '&:hover': {
            background: '#3f51b5',
            color: '#fff',
        }
    }

}))
export default useStyles;
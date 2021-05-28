import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import feedback1 from '../utils/feedback1.jpg';
import { useSelector, useDispatch } from 'react-redux';
import {addComment} from '../store/commentSlice';
import { useHistory } from 'react-router';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    divstyle:{
      backgroundImage: `url(${feedback1})`,
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      width:'100%',
      height: '100vh',
      marginTop:'0px'
    },
    container:{
      paddingTop: '125px'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    cancel:{
      backgroundColor:'red',
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
  }));







export default function AddFeedBack() {
  const detail=useSelector(state=>state.comments.currentUser);

  console.log(detail);
  const history= useHistory(); 
  const dispatch= useDispatch();
    const classes = useStyles();
    let [error,setError]= useState({name:'',email:'',comment:''});
    let [name, setName]= useState('');
    let [email,setEmail]= useState('');
    let [comments,setComments]= useState('');
 
    const handleSubmit=(e)=>{
        console.log(e);
        let isError= false;
        e.preventDefault();
        if(!name.length){
          setError((prevstate)=>({
            ...prevstate,
            name:'Name cannot be empty'
          }));
          isError=true;          
        }else {
          setError((prevstate)=>({
            ...prevstate,
            name:''
          }));
        
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
          setError((prevstate)=>({
            ...prevstate,
            email:'Invalid mail id'
          }));
          isError=true;  
        }else{
          setError((prevstate)=>({
            ...prevstate,
            email:''
          }));
        }
        if(!comments){
          setError((prevstate)=>({
            ...prevstate,
            comment:'please enter the comment'
          }));
          isError=true;  
        }else{
          setError((prevstate)=>({
            ...prevstate,
            comment:''
          }));
        }

        //alert(`the values are ${name}-${email}-${comments}`);
        
        if(!isError){
          
          dispatch(addComment({name,email,comments}));
          history.push('/feedback');
        }


    }
    return (
      <div className={classes.divstyle}>
       <Container  className={classes.container} maxWidth='xs'>
          
           <div className={classes.paper}>
           <Typography component="h1" variant="h5">
                        Feedback Form
            </Typography>

            <form className={classes.form} noValidate  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus onChange={(e)=>setName(e.target.value)}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                rows={4}
                multiline
                name="comment"
                label="Comment"
                type="text"
                id="comment"
                autoComplete="current-password"
                onChange={(e)=>setComments(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button onClick={()=>history.push('/feedback')}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="cancel"
            className={classes.cancel}
          >
            Cancel
          </Button>
          </Grid>
          </Grid>
          
        </form>
       
           </div>    

           <div className={classes.root}>
          {error.name?<Alert severity="error">{error.name}</Alert>:null}
          {error.email?<Alert severity="error">{error.email}</Alert>:null}
          {error.comment?<Alert severity="error">{error.comment}</Alert>:null}
     
    </div>
       </Container>
       </div>
    )
}

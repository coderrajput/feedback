import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import signup from '../utils/signup.jpg';
import { useSelector, useDispatch } from 'react-redux';
import {addUser} from '../store/commentSlice';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    divstyle:{
      backgroundImage: `url(${signup})`,
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
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      }
  }));


export default function AddFeedBack() {
    const dispatch= useDispatch();
    let history= useHistory();
    const classes = useStyles();
    let [name, setName]= useState('');
    let [email,setEmail]= useState('');
    let [password,setPassword]= useState('');
    let [error,setError]= useState({name:'',email:'',password:''});
    const handleSubmit=(e)=>{
        e.preventDefault();
        let isError= false;
       // alert(`the values are ${name}-${email}-${password}`)
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
      if(!password){
        setError((prevstate)=>({
          ...prevstate,
          password:'please enter the password'
        }));
        isError=true;  
      }else{
        setError((prevstate)=>({
          ...prevstate,
          password:''
        }));
      }
      if(!isError){
          dispatch(addUser({name,email,password}));
       history.push('/feedback');
      }
    }
    return (
      <div className={classes.divstyle}>
       <Container  className={classes.container} maxWidth='xs'>
          
           <div className={classes.paper}>
           <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
           <Typography component="h1" variant="h5">
                        Sign Up
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
        
          </Grid>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          
        </form>
        </div>    

           <div className={classes.root}>
          {error.name?<Alert severity="error">{error.name}</Alert>:null}
          {error.email?<Alert severity="error">{error.email}</Alert>:null}
          {error.password?<Alert severity="error">{error.password}</Alert>:null}
     
    
           </div>    
       </Container>
       </div>
    )
}

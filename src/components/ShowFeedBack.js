import React, {useEffect,useState} from 'react';
import SingleFeedback from './SingleFeedback';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {fetchCommentsMemoized} from '../store/commentSlice';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    
  }));

export default function ShowFeedBack() {
    const classes = useStyles();
   const history= useHistory(); 
    let list=[];
    list=useSelector(state=>fetchCommentsMemoized(state));


const clickHandler=(e)=>{
    e.preventDefault();
    history.push('/feedback/new');
}

  return (
      <div>
          <Box textAlign="center" mt={2}>
           <Fab variant="extended" onClick={(e)=>clickHandler(e)}>
        <AddIcon className={classes.extendedIcon} />
        Add New Comment
      </Fab>
      </Box>
       
      {
         !list.length? <Box >
                <div   className={classes.root}>
    
      <Alert severity="info">No comments available</Alert>
     
    </div>

         </Box>
          : <div >
       
         {list.map((el,i)=><SingleFeedback key={i} feedback={el}/>)}
   </div>
      }
     </div>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },    
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SingleFeedback(props) {
    const detail= props.feedback;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 
  return (
      <Box boxShadow={1} width={6/10} mx="auto" mt={2}>
    <Card className={classes.root} variant="outlined" maxWidth='xs'>
    <CardHeader
        title= {detail.name}
        subheader={detail.email}
      />
      <CardContent>
        <Typography paragraph>
          {detail.comments}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

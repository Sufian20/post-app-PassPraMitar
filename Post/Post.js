import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import './Post.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        
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



export default function OutlinedCard(props) {
    const { title, body, id } = props.post;
    const classes = useStyles();
  
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className="post-card">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                       
                        <Typography variant="body2" component="p">
                           {body}
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <div className="main-button">
                        <Link to={`/post/${id}`}>
                        <Button  size="small" variant="contained" color="primary" >Learn More</Button>
                        </Link>
                    </div>
                </Card>
                </div>
            </Grid>
        </Grid>
    );
}

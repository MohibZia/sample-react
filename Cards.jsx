import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);
    return(
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography varient="h5">REAL DATA</Typography>
                    <Typography colr="textSecondary">REAL DATE</Typography>
                    <Typography varient="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>

    </div>
        )
}


export default Cards;
import React from 'react';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, Typography, CardContent, Grid} from '@material-ui/core';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, className)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
                <Typography variant="h6" component="h2">
                    <CountUp
                        start={0}
                        end={value}
                        duration={2.5}
                        separator=","
                    />
                    </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" component='p'>{cardSubtitle}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent

import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const ListCard = ({text}) => {
    return (
        <Card style={styles.cardContainers}>
            <CardContent>
                <Typography gutterBottom>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
};

const styles = {
  cardContainers: {
      marginBottom: 8
  }
};

export default ListCard;
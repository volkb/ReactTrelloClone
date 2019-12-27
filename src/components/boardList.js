import React from 'react';
import ListCard from "./cards";

const ListComponent = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            { cards.map(card => <ListCard key={card.id} text={card.text}/>) }
        </div>

    )
};

const styles = {
    container: {
        backgroundColor: "lightGreen",
        opacity: 0.5,
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
};

export default ListComponent;
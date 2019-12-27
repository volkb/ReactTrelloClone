import React from 'react';
import ListCard from './cards';
import ActionButton from './actionButton'

const ListComponent = ({title, cards, listID}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            { cards.map(card => <ListCard key={card.id} text={card.text}/>) }
            <ActionButton listID={listID} />
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "lightgrey",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: "100%"
    }
};

export default ListComponent;
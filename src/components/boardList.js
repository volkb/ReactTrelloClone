import React from 'react';
import ListCard from './cards';
import ActionButton from './actionButton'
import { Droppable } from "react-beautiful-dnd";

const ListComponent = ({title, cards, listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4>{title}</h4>
                    { cards.map((card, index) => <ListCard
                        key={card.id}
                        index={index}
                        text={card.text}
                        id={card.id}/>)
                    }
                    <ActionButton listID={listID} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
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
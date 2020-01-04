import React from 'react';
import ListCard from './cards';
import ActionButton from './actionButton'
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    margin-right: 8px;
    height: 100%;
`;

const ListComponent = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
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
                </ListContainer>
            )}
        </Draggable>
    )
};

export default ListComponent;
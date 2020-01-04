import React, { Component } from 'react';
import ListComponent from './boardList'
import ActionButton from "./actionButton";
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from '../actions'
import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

class App extends Component{
    onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;
      if (!destination){return null;}

      this.props.dispatch(sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
      ));
    };

  render() {
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <h2>Welcome to React</h2>
              <Droppable droppableId="all-lists" direction="horizontal" type="list">
                  {provided => (
                      <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                          { lists.map((list, index) => (
                              <ListComponent
                                  listID={list.id}
                                  key={list.id}
                                  title={list.title}
                                  cards={list.cards}
                                  index={index}
                              />
                          )) }
                          {provided.placeholder}
                          <ActionButton list></ActionButton>
                      </ListContainer>
                  )}
              </Droppable>
          </div>
        </DragDropContext>
      );
  };
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps) (App);

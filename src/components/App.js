import React, { Component } from 'react';
import ListComponent from './boardList'
import ActionButton from "./actionButton";
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from '../actions'
import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

class App extends Component{
    onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      if (!destination){return null;}

      this.props.dispatch(sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
      ));
    };

  render() {
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <h2>Welcome to React</h2>
              <ListContainer>
                  { lists.map(list => (
                      <ListComponent listID={list.id} key={list.id} title={list.title} cards={list.cards} />
                  )) }
                  <ActionButton list></ActionButton>
              </ListContainer>
          </div>
        </DragDropContext>
      );
  };
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps) (App);

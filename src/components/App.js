import React, { Component } from 'react';
import ListComponent from './boardList'
import ActionButton from "./actionButton";
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component{
    onDragEnd = () => {
      ///TODO: reordering logic
    };

  render() {
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <h2>Welcome to React</h2>
              <div style={styles.listsContainer}>
                  { lists.map(list => (
                      <ListComponent listID={list.id} key={list.id} title={list.title} cards={list.cards} />
                  )) }
                  <ActionButton list></ActionButton>
              </div>
          </div>
        </DragDropContext>
      );
  };
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8


  }
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps) (App);

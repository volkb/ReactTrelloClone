import React, { Component } from 'react';
import ListComponent from './boardList'
import ActionButton from "./actionButton";
import { connect } from 'react-redux';

class App extends Component{
  render() {
    const { lists } = this.props;
      return (
        <div className="App">
          <h2>Welcome to React</h2>
            <div style={styles.listsContainer}>
                { lists.map(list => (
                    <ListComponent listID={list.id} key={list.id} title={list.title} cards={list.cards} />
                )) }
                <ActionButton list></ActionButton>
            </div>
        </div>
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

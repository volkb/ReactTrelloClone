import React from 'react'
import Icon from '@material-ui/core/Icon';
import TextArea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class ActionButton extends React.Component {

    state = {
      formOpen: false
    };

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add Another List" : "Add Another Card";
        const buttonTextTransparency = list ? 1 : 0.5;
        const buttonTextColor = list ? "White" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        return (
            <div
                onClick={this.openForm}
                style={
                {
                    ...styles.buttonGroup,
                    opacity: buttonTextTransparency,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }
            }>
                <Icon>add</Icon>
                <p>{ buttonText }</p>
            </div>
        )
    };

    renderForm = () => {
        const { list } = this.props;
        const placeholderText = list
            ? "Enter a List Title..."
            : "Enter a Title for This Card...";

        const buttonTitle = list
            ? "Add a List"
            : "Add a Card";

        return (
            <div>
                <Card style={styles.cardStyle}>
                    <TextArea
                        placeholder={placeholderText}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.inputChangeHandler}
                        style={styles.textAreaStyle}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        variant="contained"
                        style={styles.buttonStyle}
                        //onMouseDown is used because it fires before onBlur
                        onMouseDown={list ? this.addListHandler : this.addCardHandler}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon style={styles.buttonExitStyle} onClick={this.closeForm}>close</Icon>
                </div>
            </div>
        );
    };

    openForm = () => {
      this.setState({
          formOpen: true
      });
    };

    closeForm = event => {
        this.setState({
            formOpen: false
        });
    };

    inputChangeHandler = event => {
        this.setState({
           text: event.target.value
        });
    };

    addListHandler = () => {
      const { dispatch } = this.props;
      const { text } = this.state;
      if(text) {
          dispatch(addList(text));
          this.setState({
              text: ""
          });
      }
      return null;
    };

    addCardHandler = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text){
            dispatch(addCard(listID, text));
            this.setState({
                text: ""
            });
        }
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
}

const styles = {
  buttonGroup: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      height: 36,
      width: 272,
      paddingLeft: 10
  },
  formButtonGroup:{
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  },
  textAreaStyle: {
      resize: "none",
      width: "100%",
      outline: "none",
      border: "none",
      overflow: "hidden"
  },
  cardStyle: {
      minHeight: 80,
      minWidth: 272,
      padding: "6px 8px 2px"
  },
  buttonStyle: {
      color: "white",
      backgroundColor: "#5aac44"
  },
  buttonExitStyle:{
      marginLeft: 8,
      cursor: "pointer",

  }
};

export default connect() (ActionButton);
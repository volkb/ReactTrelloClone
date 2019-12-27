import { CONSTANTS } from "../actions";

const initialState = [
    {
        title: "Initial Title",
        id: 0,
        cards: [
            {
                id: 1,
                text: "Sample Text for ID 0."
            },
            {
                id: 2,
                text: "Sample Text for ID 1."
            }

        ]
    },
    {
        title: "Initial Title 2",
        id: 1,
        cards: [
            {
                id: 4,
                text: "Sample Text for ID 4."
            },
            {
                id: 5,
                text: "Sample Text for ID 5."
            },
            {
                id: 6,
                text: "Sample Text for ID 6."
            }

        ]
    }
];

let listID = 3;
let cardID = 10;

const listReducer = (state = initialState, action) => {
  switch (action.type) {
      case CONSTANTS.ADD_LIST:
          const newList = {
              title: action.payload.title,
              id: listID,
              cards: []
          };
          listID++;
          return [...state, newList];
      case CONSTANTS.ADD_CARD:
          const newCard = {
              id: cardID,
              text: action.payload.text
          };
          cardID++;

          const newState = state.map(list => {
              if(list.id === action.payload.listID){
                  return {
                      ...list,
                      cards:[...list.cards, newCard]
                  };
              }else{
                  return list;
              }
          });
          return newState;
      default:
          return state;
  }
};

export default listReducer;
import { CONSTANTS } from "../actions";

const initialState = [
    {
        title: "Initial Title",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Sample Text for ID 0."
            },
            {
                id: `card-${1}`,
                text: "Sample Text for ID 1."
            }

        ]
    },
    {
        title: "Initial Title 2",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Sample Text for ID 4."
            },
            {
                id: `card-${3}`,
                text: "Sample Text for ID 5."
            },
            {
                id: `card-${4}`,
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
              id: `list-${listID}`,
              cards: []
          };
          listID++;
          return [...state, newList];
      case CONSTANTS.ADD_CARD:
          const newCard = {
              id: `list-${cardID}`,
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
      case CONSTANTS.DRAG_EVENT: {
          const {
              droppableIdStart,
              droppableIdEnd,
              droppableIndexStart,
              droppableIndexEnd
          } = action.payload;
          const newState = [...state];
          //handles same list movement in single item lists
          if (droppableIdStart === droppableIdEnd) {
              const list = state.find(list => droppableIdStart === list.id);
              const card = list.cards.splice(droppableIndexStart, 1);
              list.cards.splice(droppableIndexEnd, 0, ...card);
          }
          return newState;
      }
      default:
          return state;
  }
};

export default listReducer;
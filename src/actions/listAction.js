import { CONSTANTS } from "./index";


export const addList = (listTitle) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: {
            title: listTitle
        }
    }
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: CONSTANTS.DRAG_EVENT,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
};
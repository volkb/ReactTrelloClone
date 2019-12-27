import { CONSTANTS } from "./index";

export const addCard = (listID, cardText) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {
            text: cardText,
            listID: listID
        }
    }
};
import { CONSTANTS } from "./index";


export const addList = (listTitle) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: {
            title: listTitle
        }
    }
};
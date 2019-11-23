import { DELETE_USER } from "../actions/types";
const admins = ["Leanne Graham", "Ervin Howell"];

export function doNotRemoveAdmin({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === DELETE_USER) {
                const state = getState();
                if(admins.includes(state.users.all.find(user => user.id.toString() === action.payload ).name)){
                    console.log("can't remove admin");
                    return dispatch({ type: "CAN_NOT_REMOVE_ADMIN" });
                }
            }

            return next(action);
        };
    };
}

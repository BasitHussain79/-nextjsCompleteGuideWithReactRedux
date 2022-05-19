import { combineReducers } from "redux";
import { roomDetailsReducer } from "./roomDetailsReducer";
import { allRoomsReducer } from "./roomReducers";
import { authReducer } from "./userReducer";

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomsDetails: roomDetailsReducer,
    auth: authReducer
});

export default reducer;
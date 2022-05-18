import { combineReducers } from "redux";
import { roomDetailsReducer } from "./roomDetailsReducer";
import { allRoomsReducer } from "./roomReducers";

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomsDetails: roomDetailsReducer
});

export default reducer;
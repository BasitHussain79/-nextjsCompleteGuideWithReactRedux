import {
  CLEAR_ERRORS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS
} from "../constants/userConstants";


const initialState = {
  user: null,
  loading: false,
  success: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
          loading: true
      };

    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case REGISTER_USER_FAIL: {
        return {
            loading: false,
            error: action.payload
        }
    }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


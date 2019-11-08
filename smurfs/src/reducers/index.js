import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

export const initialState = {
  fetchStatus: {
    Error: "",
    isFetching: false
  },
  smurfs: [
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchStatus: {
            Error: "",
            isFetching: false
          },
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs:  action.payload,
        fetchStatus: {
            Error: "",
            isFetching: false
          },
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchStatus: {
          Error: action.payload,
          isFetching: false
        }
      };

    default:
      return state;
  }
};

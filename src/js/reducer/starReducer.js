import { CHANGE_COLOR } from "../const/actionTypes";

const initialState = {
  tabStar: [
    { icon: "★", isColored: false, id: Math.random() },
    { icon: "★", isColored: false, id: Math.random() },
    { icon: "★", isColored: false, id: Math.random() },
    { icon: "★", isColored: false, id: Math.random() },
    { icon: "★", isColored: false, id: Math.random() },
  ],
};

const starReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR:
      return {
        ...state,
        tabStar: state.tabStar.map((star) =>
          star.id === payload ? { ...star, isColored: !star.isColored } : star
        ),
      };

    default:
        return state
  }
};

export default starReducer;

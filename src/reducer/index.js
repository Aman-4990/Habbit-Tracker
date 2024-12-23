import index from "toastify";
import {
  ADD_HABBIT,
  REMOVE_HABBIT,
  TOGGLETAB,
  MODIFIE_HABBIT,
} from "../actions";

const initialHabbitsState = {
  habbits: [
    
  ],
  dashbordTab: true,
};

export function reducer(state = initialHabbitsState, action) {
  switch (action.type) {
    case ADD_HABBIT:
      return { ...state, habbits: [...state.habbits, action.habbit] };
    case REMOVE_HABBIT:
      //   const index = state.favlist.indexOf(action.movie);
      const newHabbitList = state.habbits.filter(
        (habbit) => habbit !== action.habbit
      );
      return { ...state, habbits: newHabbitList };
    case TOGGLETAB:
      return { ...state, dashbordTab: action.boolVal };
    case MODIFIE_HABBIT:
      const newHabbitList2 = state.habbits.map((habbit) => {
        if (habbit.title === action.habbit.title) {
          if (habbit.daylist[index] === 1) {
            habbit.daylist[index] = -1;
          } else if (habbit.daylist[index] === -1) {
            habbit.daylist[index] = 0;
          } else {
            habbit.daylist[index] = 1;
          }
        }
        return habbit;
      });
      // console.log(newHabbitList2, "--new list ");
      return { ...state, habbits: [...newHabbitList2] };
    default:
      return state;
  }
}
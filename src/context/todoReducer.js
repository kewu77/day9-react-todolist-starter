
export const todoReducer = (state, action) => {
  switch (action.type){
    case "INIT":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [...state.filter((item) => item.id !== action.payload)]
    case "UPDATE":
      return [...state.map((item) => {return item.id !== action.payload ? item : {...item, done: !item.done}})]
    default:
      return state;
  }
};

/* Constants */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

/* State */
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "Refat" }],
};

/*
Action:
Action is a Object, which contain payload and type.
Here functions are action creator
*/
// Increment
const incrementCounter = () => {
  return { type: INCREMENT };
};
// Increment
const decrementCounter = () => {
  return { type: DECREMENT };
};
// User Creator
/* 
PAyload is required when we need to pass data to state
*/
const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Arafat" },
  };
};

/* 
Steps:
1. state
2. dispatch action
3. reducer
4. update
*/

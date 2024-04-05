/* 
Steps:
1. state
2. dispatch action
3. reducer
4. update
*/

/* Constants */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

/* 1. State */
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "Refat" }],
};

/* 2. Action: Action is a Object, which contain payload and type.Ex: { type: "INCREMENT" }. Here functions are action creator.
Constants are use due to reduce spelling mistakes */
// Increment
const incrementCounter = () => {
  return { type: INCREMENT };
};
// Decrement
const decrementCounter = () => {
  return { type: DECREMENT };
};
/* User Creator. Here We have payload too. Payload is required when we need to pass data to state */
const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Arafat" },
  };
};
// If we want to pass data when passing data
// const addUser = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

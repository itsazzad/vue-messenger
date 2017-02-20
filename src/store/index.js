import { createStore } from 'redux';
import {user as profile, message} from '../modules/lorem'
import {getRandomIntInclusive} from '../modules/random'

const initialState = {
  todos: [],
  users: []
};

for (let u = 0; u < getRandomIntInclusive(1, 10); u++) {
  let messages = [];
  for (let m = 0; m < getRandomIntInclusive(0, 100); m++) {
    messages.push(message());
  }
  initialState.users.push({profile: profile(), messages: messages});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      };

    case 'SEND_MESSAGE':
      state.users[action.payload.userIndex].messages.push(action.payload.message);
      return state;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

window.store = store;

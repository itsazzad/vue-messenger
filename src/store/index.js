import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import {profile, message} from '../modules/lorem'
import {getRandomIntInclusive} from '../modules/random'

var moment = require('moment');

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
      let message = message();
      message.created_time = moment();
      message.direction = 'to';
      message.message = action.message;
      // state.users[action.userIndex].messages.push(message);
      return state.users((user, index) => {
        if (index === action.index) {
          return Object.assign(user.messages, message);
          // return user.messages.push(message);
        }
        return user;
      });

    default:
      return state;
  }
};

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
));

export default store;

import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import {profile, message} from '../modules/lorem'
import {getRandomIntInclusive} from '../modules/random'

var moment = require('moment');

const initialState = {
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
    case 'SEND_MESSAGE':
      let msg = message();
      msg.created_time = moment();
      //msg.direction = 'to';
      msg.direction = ['to', 'from'][Math.floor(Math.random()*2)];
      msg.message = action.message;
      state.users[action.index].messages.push(msg);
      return state;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

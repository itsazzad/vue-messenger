import {userIndex} from '../modules/active-profile'

export function sendMessage(message) {
  return {
    type: 'SEND_MESSAGE',
    index: userIndex,
    message: message
  }
}

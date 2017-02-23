const moment = require('moment');
let userIndex;
export function getUserById(users, activeId) {
  return users.filter((user, index) => {
    if (user.profile.id == activeId) {
      userIndex = index;
      return true;
    } else {
      return false;
    }
  });
}
export {userIndex};
export function messagesSortedByTime(messages) {
  return messages.sort(function (a, b) {
    let aC = moment(a.created_time);
    let bC = moment(b.created_time);
    return aC.diff(bC);
  });
}

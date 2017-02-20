var moment = require('moment');

export function getActiveProfile(users, activeId) {
  return users.filter((user) => {
    return (user.profile.id == activeId);
  });
}

export function messagesSortedByDate(messages) {
  return messages.sort(function (a, b) {
    let aC = moment(a.created_time);
    let bC = moment(b.created_time);
    return aC.diff(bC);
  });
}

import {connect} from 'redux-vue';
import {userIndex, getUserById, messagesSortedByTime} from '../modules/active-profile'
const moment = require('moment');
import './conversation.css';

const messageSending = {
  queued: false,
  sent: false,
};

const Conversation = {
  name: 'conversation',
  props: {
    users: {
      type: Array
    },
    sendMessage: {
      type: Function
    }
  },
  computed: {
    activeUser: function () {
      let user = getUserById(this.users, this.$route.params.id);
      if (user.length) {
        user = user[0];
        user.messages = messagesSortedByTime(user.messages);
        return user;
      } else {
        window.location.href = "/";
      }
    },
  },
  mounted: function () {
    document.getElementById("messagingBox").addEventListener('keyup', (event) => {
      if (event.code == 'Enter') {
        if (event.shiftKey) {
          if (!event.target.innerText.trim()) {
            event.target.innerText = '';
            return
          }
          this.sendMessage(event.target.innerText.trim());
          event.target.innerText = '';
        }
      }
    }, false);
  },
  render(h) {
    const activeUser = this.activeUser;
    const profileImg = activeUser.profile.picture.url;
    const profileName = activeUser.profile.name;
    return (
      <div class="messaging">
        <div class="row">
          <div class="col-xs-12 conversations">
            {activeUser.messages.map(message =>
              <div class={'row message ' + message.direction}>
                <p class="time">
                  {(message.direction == 'from') ?
                    <span class="placeholder"><img src={profileImg} width="20" height="20"
                                                   class="img-responsive pull-left"
                                                   alt={profileName}/></span> : ''}
                  <small class="pull-right">{moment(message.created_time).fromNow()}</small>
                </p>
                <p class="message-text">{message.message}</p>
              </div>
            )}
          </div>
        </div>
        <div class="row send-message">
          <div class="col col-xs-12">
            <div class="textarea" contentEditable="true"
                 placeholder="Type a message..." id="messagingBox"></div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function mapActionToProps(dispatch) {
  return {
    sendMessage(message) {
      dispatch({
        type: 'SEND_MESSAGE',
        index: userIndex,
        message: message
      })
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(Conversation);

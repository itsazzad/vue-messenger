import {connect} from 'redux-vue';
import {getUserById, messagesSortedByTime} from '../modules/active-profile'
var moment = require('moment');
import './messages.css';
import {sendMessage} from '../actions'

var keyCodeShiftKey = {
  keyCode: false,
  shiftKey: false,
};

document.addEventListener('keyup', (event) => {
  if (event.keyCode == 13) {
    keyCodeShiftKey.keyCode = true;
    if (event.shiftKey) {
      keyCodeShiftKey.shiftKey = true;
    } else {
      keyCodeShiftKey.shiftKey = false;
    }
  } else {
    keyCodeShiftKey = {
      keyCode: false,
      shiftKey: false,
    }
  }
}, false);


const Messages = {
  name: 'left-sidebar',
  props: {
    users: {
      type: Array,
    }
  },
  computed: {
    activeUser: function () {
      let user = getUserById(this.users, this.$route.params.id)[0];
      user.messages = messagesSortedByTime(user.messages);
      return user;
    },
  },
  methods: {
    handleChange(e) {
      setTimeout(function () {
        if (keyCodeShiftKey.keyCode && keyCodeShiftKey.shiftKey) {
          if (!e.target.innerText.trim()) {
            return
          }
          dispatch(sendMessage(e.target.innerText.trim()));
          e.target.innerText = ''
        } else {
          // console.log('Typing...');
        }
      }, 100);

    }
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
            <div class="textarea" contentEditable="true" onInput={this.handleChange}
                 placeholder="Type a message..."></div>
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

export default connect(mapStateToProps)(Messages);

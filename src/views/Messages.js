import {connect} from 'redux-vue';
import {getActiveProfile, messagesSortedByDate} from '../modules/active-profile'
var moment = require('moment');
// import * as moment from 'moment';
import './messages.css';

const Messages = {
  name: 'left-sidebar',
  props: {
    users: {
      type: Array,
    }
  },
  computed: {
    activeProfile: function () {
      let profile = getActiveProfile(this.users, this.$route.params.id)[0];
      profile.messages = messagesSortedByDate(profile.messages);
      console.log(profile);
      return profile;
    }
  },
  render(h) {
    return (
      <div class="conversations">
        {this.activeProfile.messages.map(message =>
          <div class={'row message '+message.direction}>
            <p class="time"><span class="placeholder"><img src={this.activeProfile.profile.picture.url} width="20" height="20" class="img-responsive pull-left" alt={this.activeProfile.profile.name} /></span><small class="pull-right">{moment(message.created_time).fromNow()}</small></p>
            <p class="message-text pull-left">{message.message}</p>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Messages);

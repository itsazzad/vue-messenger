import {connect} from 'redux-vue';

const Messages = {
  name: 'messages',
  props: {
    users: {
      type: Array
    },
  },
  render(h) {
    window.location.href = "/#/messages/"+this.users[0].profile.id;
  }
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Messages);

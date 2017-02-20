import {connect} from 'redux-vue';
import './nav.css';

const LeftSidebar = {
  name: 'left-sidebar',
  props: {
    users: {
      type: Array,
    }
  },
  render(h) {
    return (
      <div class="col-sm-3 pull-left sidebar left-sidebar">
        <ul class="nav nav-sidebar">
          {this.users.map(user => <li><router-link to={'/messages/' + user.profile.id}>{user.profile.name}</router-link></li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(LeftSidebar);

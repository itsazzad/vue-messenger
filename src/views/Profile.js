import {connect} from 'redux-vue';
import {getUserById} from '../modules/active-profile'
import './profile.css'

const Profile = {
  name: 'profile',
  props: {
    users: {
      type: Array,
    }
  },
  computed: {
    activeProfile: function () {
      let user = getUserById(this.users, this.$route.params.id)[0];
      return user.profile;
    },
  },
  render(h) {
    const activeProfile = this.activeProfile;
    console.log(activeProfile);
    return (
      <div class="profile">
        <div class="row placeholders sub-header">
          <div class="col-xs-4 placeholder profile-picture">
            <img src={activeProfile.picture.url} width="100" height="100" class="img-responsive"
                 alt={activeProfile.name}/>
          </div>
          <div class="col-xs-8 placeholder profile-name">
            <h4>{activeProfile.name}</h4>
          </div>
        </div>
        <div class="row placeholders">
          <div class="col-xs-12 placeholder profile-about">
            <span class="text-muted">{activeProfile.about}</span>
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

export default connect(mapStateToProps)(Profile);

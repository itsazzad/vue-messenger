import { connect } from 'redux-vue';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Main from './components/Main';


const App = {
  name: 'app',
  render(h) {
    return (
      <div class="container">
        <div id="app" class="row">
          <LeftSidebar />
          <Main />
          <RightSidebar />
        </div>
      </div>
    );
  }
}

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
        payload: { message }
      })
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);

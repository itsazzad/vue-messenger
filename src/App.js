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
      <div className="container">
        <div id="app" className="row">
          <LeftSidebar />
          <Main />
          <RightSidebar />
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

export default connect(mapStateToProps)(App);

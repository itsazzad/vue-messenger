import './Hello.css';
import { connect } from 'redux-vue';

const Hello = {
  props: {
    todos: {
      type: Array,
    },
    addTodo: {
      type: Function,
    },
  },

  methods: {
    handleAddTodo() {
      const todo = this.$refs.input.value;
      this.addTodo(todo);
    }
  },
  render(h) {
    return <div>
      <ul>
        {this.todos.map(todo => <li>{todo}</li>)}
      </ul>

      <div>
        <input type="text" ref="input" />
        <button on-click={this.handleAddTodo}>add todo</button>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapActionToProps(dispatch) {
  return {
    addTodo(todo) {
      dispatch({
        type: 'ADD_TODO',
        payload: { todo }
      })
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(Hello);

export default {
  name: 'right-sidebar',
  data () {
    return {
      msg: 'Right Sidebar'
    }
  },
  render(h) {
    return (
      <div class="col-sm-3 pull-right right-sidebar">
        <h3>Profile details</h3>
      </div>
    );
  }
}

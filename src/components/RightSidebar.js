export default {
  name: 'right-sidebar',
  render(h) {
    return (
      <div class="col-sm-3 pull-right right-sidebar">
        <router-view class="view profile" name="profile"></router-view>
      </div>
    );
  }
}

export default {
  name: 'main',
  render(h) {
    return (
      <div class="col-sm-6 col-sm-offset-3 main">
        <router-view class="view messages"></router-view>
      </div>
    );
  }
}

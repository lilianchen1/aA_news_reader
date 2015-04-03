NewsReader.Views.FeedIndexItem = Backbone.View.extend({
  template: JST["feed_index_item"],
  tagName: "li",

  events: {
    'click button.delete': 'removeMe'
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  removeMe: function () {
    this.model.destroy();
    this.remove();
  }
});

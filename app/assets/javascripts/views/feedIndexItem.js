NewsReader.Views.FeedIndexItem = Backbone.View.extend({
  template: JST["feed_index_item"],
  tagName: "li",

  events: {
    'click button.delete': 'removeMe',
    'click button.favorite': 'favoriteToggle'
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  removeMe: function () {
    this.model.destroy();
    this.remove();
  },

  favoriteToggle: function() {
    $.ajax({
      url: "api/feeds/" + this.model.id + "/favorite",
      data: "",
      dataType: "JSON",
      method: "POST"
    });
    this.model.set("favorited_by_user", !this.model.get('favorited_by_user'));
  }
});

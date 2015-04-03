NewsReader.Views.FeedForm = Backbone.View.extend({
  template: JST["feed_form"],
  tagName: "form",

  events: {
    "submit": "createNewFeed",
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNewFeed: function(event) {
    event.preventDefault();
    var attr = this.$el.serializeJSON();

    this.model.save(attr, {
      success: function() {
        this.collection.add(this.model);
        this.$('input.url').val('');
      }.bind(this)
    });
  }
});

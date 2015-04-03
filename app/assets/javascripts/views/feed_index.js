NewsReader.Views.FeedIndex = Backbone.View.extend ({
  // template: JST['feed_index'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render);
    this.$ul = $("<ul>");
    this.$el.append(this.form()).append(this.$ul);
  },

  render: function() {
    this.$ul.empty();
    this.collection.each(function(feed) {
      var feedIndexItemView = new NewsReader.Views.FeedIndexItem({ model: feed });
      this.$ul.append(feedIndexItemView.render().$el);
    }.bind(this));
    return this;
  },

  form: function() {
    if (!this.$form) {
      var form = new NewsReader.Views.FeedForm( {
        model: new NewsReader.Models.Feed(),
        collection: this.collection
      });
      this.$form = form.render().$el;
    }

    return this.$form;
  }
});

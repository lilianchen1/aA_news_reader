NewsReader.Routers.Router = Backbone.Router.extend ({
  routes: {
    "" : "index",
    'feeds/:id': 'feedShow'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = new NewsReader.Collections.Feeds();
  },

  index: function() {
    var feedIndex = new NewsReader.Views.FeedIndex({collection: this.feeds });
    this.feeds.fetch();
    this.$rootEl.html(feedIndex.render().$el);
  },

  feedShow: function(id) {
    var feed = this.feeds.getOrFetch(id);
    feed.fetch();
    var feedShow = new NewsReader.Views.Feed({ model: feed });
    this.$rootEl.html(feedShow.render().$el);
  }
});

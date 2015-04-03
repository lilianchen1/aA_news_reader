NewsReader.Views.Feed = Backbone.View.extend ({
  template: JST['feed_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.refresh" : "refreshPage",
  },

  refreshPage: function() {
    this.model.fetch();
  },

  render: function () {
    var $content = $(this.template());
    var $ul = $content.filter('ul.entries');
    this.model.entries().each( function(entry) {
      var entryView = new NewsReader.Views.Entry ({ model: entry });
      $ul.append(entryView.render().$el);
    });
    this.$el.html($content);
    return this;
  }
});

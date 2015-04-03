NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: function() {
    return this.feed.url() + "/entries";
  },

  comparator: function(firstEntry, secondEntry) {
    if (firstEntry.get("published_at") < secondEntry.get("published_at")) {
      return 1;
    } else {
      return -1;
    }
    // less than means first is older

  }
});

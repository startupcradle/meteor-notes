/*****************************************************************************/
/* Search: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Search.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .search-results .search-result a': function (e) {
    $('#search-modal').modal('hide');
  }
});

Template.Search.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.created = function () {
};

Template.Search.rendered = function () {
};

Template.Search.destroyed = function () {
};

window.Helpers = {
  renderCollection: function(collection, viewModel) {
    return _.reduce(collection.slice(0), function(htmlSoFar, todo) {
        var view = new viewModel({ model: todo });
        return htmlSoFar + $(view.render().el)[0].outerHTML;
      }, '');
  },

  renderModel: function(model, viewModel) {
    var view = new viewModel({ model: model });
    return view.render().el;
  }
};
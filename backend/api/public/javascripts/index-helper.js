var TodoViewModel = function(data) {
    this.name = ko.observable(data.name);
    this.complete = ko.observable(data.complete);
  };
  
  var TodoListViewModel = function() {
    this.todoItems = ko.observableArray();
  };
  
  jQuery(function() {
    var viewModel = new TodoListViewModel();
  
    //insert some fake todo items for now...
    viewModel.todoItems.push(new TodoViewModel({ name: "Pending Item", complete: false }));
    viewModel.todoItems.push(new TodoViewModel({ name: "Completed Item", complete: true }));
  
    ko.applyBindings(viewModel);
  });
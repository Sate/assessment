var ToDoModel = Backbone.Model.extend({
  
  defaults: function(){
    return {done: false}
  },

  url: 'asd',

  toggle: function(){
    this.set({"done": !this.get("done")})
  }

});
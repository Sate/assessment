var ToDoCollection = Backbone.Collection.extend ({

  todosOnScreen : [],
  
  model:ToDoModel,

  url:function(){

  },

  all : function(){
    // console.log(this);
    // return this.filter(function(item){alert(item)});
  }


});
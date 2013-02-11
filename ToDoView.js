var ToDoView = Backbone.View.extend({

  tagName : "div",

  initialize: function(){
    this.$el.append("<input type='checkbox' class='check' /><span class='text'></span><input class='hide editbox' type='text'/> <div class='label label-important'>x</div>");
    this.listenTo(this.model, "change", this.render);
    this.model.on('destroy', this.remove, this);
    this.$el.addClass("hide active todo");
    this.render().appendTo('body');
    this.$input = this.$("input[type='text']");
  },

  events: {
    "click .check" : "toggleDone",
    "dblclick span" : "edit",
    "keydown input" : "submitEnter",
    "blur .editbox" : "inputhack",
    "click .label" : "delete"

  },


  render: function(){ 
    this.$('span').text(this.model.get("text"));
    // console.log(this);
    this.$el.removeClass('hide');
    return this.$el; 
  },

  toggleDone: function(){
    console.log(this.model);
    this.model.toggle();
    this.$el.toggleClass("done alert alert-success", this.model.get("done"));
    this.$el.toggleClass("active  ", !this.model.get("done"));
  },

  edit: function(){
    this.$('span').addClass('hide');
    this.$('input[type=\'text\']').val(this.model.get("text"));
    this.$('input').removeClass('hide').focus();
  },

  inputhack: function() {
    this.submitEnter( {'which': 13} );
  },

  submitEnter : function(e){
    if (e.which === 13 ) {
      this.model.set({"text" : this.$input.val() });
      this.$input.addClass('hide');
      this.$('span').removeClass('hide');
      }
  },

  delete : function(){
    this.$el.addClass('animated bounceOutLeft');
    var model = this.model;
    setTimeout(function(){model.destroy()}, 150)
    
  }

});
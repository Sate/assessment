var ToDoListView = Backbone.View.extend({

  el : ".main",

  exits: ["bounceOutUp", "bounceOutLeft", "bounceOutDown", "bounceOutRight", "rollOut"],

  entrances: ["bounceInUp", "bounceInRight", "bounceInLeft","bounceInDown"],

  events : {
    "keydown #input": "createTask",
    "click #showActive": "showActive",
    "click #showDone" : "showDoneStuff",
    "click #showAll" : "showAllStuff"
  },

  initialize: function(){
    this.currentView = "all";
    this.$h1 = this.$('h1').text("Mo' Work");
    this.$input= this.$('input');
    this.showDone = false;
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "add", this.handler);
  },

  render: function(){
    var todo = this.collection.models[this.collection.models.length-1];
    // console.log(todo);
    var todoview = new ToDoView({ model: todo });
    todoview.$el.appendTo(this.$('ul'));
    this.animateIn(todoview.$el,1.5);
    return this.$el; 
  },

  createTask: function (e , passedInToDo) {
    if (e.which!==13 || this.$input.val()=="") return;
    var todo = new ToDoModel({text: this.$input.val()}); 
    this.$input.val('');
    this.collection.add(todo);
  },
    


  handler: function(){
    // console.log(this)
    this.collection.all();
  },

  showActive: function(e){
    if (this.currentView === "active") {return}
    this.currentView = "active";
    var doneThings = this.$('.done');
    for (var i = 0; i < doneThings.length; i++){
      this.animateOut(doneThings[i], i);     
    }

    var activeThings = this.$('.active');
    for (var i = 0; i < activeThings.length; i++){
      this.animateIn(activeThings[i], i);     
    }

  },

  showDoneStuff: function(e){
    if (this.currentView === "done") {return}
    this.currentView = "done";
    var activeThings = this.$('.active');
    for (var i = 0; i < activeThings.length; i++){
      this.animateOut(activeThings[i], i);     
    }

    var doneThings = this.$('.done');
    for (var i = 0; i < doneThings.length; i++){
      this.animateIn(doneThings[i], i);     
    }


  },

  showAllStuff: function(e){
    if (this.currentView === "all") {return}
    this.currentView = "all";
    var activeThings = this.$('.active');
    for (var i = 0; i < activeThings.length; i++){
      this.animateIn(activeThings[i], i);     
    }

    var doneThings = this.$('.done');
    for (var i = 0; i < doneThings.length; i++){
      this.animateIn(doneThings[i], i);     
    }

  },

  animateOut: function(element, time){
    $(element).removeClass('animated');
    var randomAnim= this.exits[Math.floor(Math.random()*this.exits.length)];
    $(element).addClass('animated ' + randomAnim);
    setTimeout(function(){$(element).removeClass('animated ' + randomAnim)},time*500);
    setTimeout(function(){$(element).addClass('hide')}, time*50+200);
  },

  animateIn: function(element, time){
    $(element).removeClass('animated');
    var randomAnim= this.entrances[Math.floor(Math.random()*this.entrances.length)];
    $(element).removeClass('hide').addClass('animated ' + randomAnim);
    setTimeout(function(){$(element).removeClass('animated ' + randomAnim)},time*20+800);
  }

});
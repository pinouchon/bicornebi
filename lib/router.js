Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home'
    //controller: NewPostsListController
  });
  this.route('community', {
    path: '/community',
    template: 'community'
  });

  this.route('eventCreate', {
    path: '/events/create',
    template: 'eventCreate'
  });

  this.route('events', {
    path: '/events',
    template: 'events'
  });
  this.route('event', {
    path: '/events/:_id',
    waitOn: function () {
      return [
        Meteor.subscribe('event', this.params._id)//,
        //Meteor.subscribe('comments', this.params._id)
      ];
    },
    data: function () {
      return Event.collection.findOne(this.params._id);
    }
  });

  this.route('eventEdit', {
    path: '/events/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('event', this.params._id);
    },
    data: function () {
      return Event.collection.findOne(this.params._id);
    }
  });

});

Router.onBeforeAction(function (pause) {
  Flash.clear();
  this.next();
});
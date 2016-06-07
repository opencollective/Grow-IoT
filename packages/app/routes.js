// Routes in this group are for logged in users. Unauthenticated users
// will be redirected to login / signup.

// From: https://medium.com/@satyavh/using-flow-router-for-authentication-ba7bb2644f42#.vty74pkpy
let loggedIn = FlowRouter.group({
 triggersEnter: [ function() {
   if (!Meteor.loggingIn() && !Meteor.userId()) {
     let route = FlowRouter.current();
     if (route.route.name !== 'login') {
       Session.set('redirectAfterLogin', route.path);
     }
     return FlowRouter.go('/login');
   }
 }
 ]
});

loggedIn.route('/device/:uuid', {
  name: 'Device.display',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'DeviceDisplayComponent'});
  }
});

loggedIn.route('/thing/:uuid', {
  name: 'Thing.DisplayComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'Thing.DisplayComponent'});
  }
});

loggedIn.route('/environment/:uuid', {
  name: 'Environment.DisplayComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'EnvironmentDisplayComponent'});
  }
});

loggedIn.route('/', {
  name: 'Dashboard',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'Dashboard'});
  }
});

loggedIn.route('/environment/:uuid/new-device', {
  name: 'Environment.NewDeviceComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'Environment.NewDeviceComponent'});
  }
});

loggedIn.route('/new-environment', {
  name: 'Environment.NewComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'Environment.NewComponent'});
  }
});

loggedIn.route('/new-grow-file', {
  name: 'GrowFileCreatorComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'GrowFileCreatorComponent'});
  }
});

loggedIn.route('/environment/:uuid/new-thing', {
  name: 'Thing.NewComponent',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'Thing.NewComponent'});
  }
});

loggedIn.route('/notifications', {
  name: 'NotificationsHistory',
  action(params, queryParams) {
    return BlazeLayout.render('MainLayoutComponent',
      {main: 'NotificationsHistory'});
  }
});
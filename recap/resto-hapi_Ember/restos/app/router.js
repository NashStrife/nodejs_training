import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// route created with the command "ember g route myRoute"
Router.map(function() {
  // dynamic route with argument
  this.route('details', {path: '/details/:detail_id'});
  this.route('form');
  this.route('list');
});

export default Router;

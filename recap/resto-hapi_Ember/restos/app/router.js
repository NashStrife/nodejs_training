import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// route created with the command "ember g route myRoute"
Router.map(function() {
  this.route('details');
  this.route('form');
  this.route('list');
});

export default Router;

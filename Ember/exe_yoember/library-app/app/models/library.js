import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  // link between library model and book model
  books: DS.hasMany('book'),

  isDisabled: Ember.computed.empty('name')
});

import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  // link between library model and book model
  books: DS.hasMany('book', {inverse: 'library', async: true}),

  isDisabled: Ember.computed.empty('name'),

  // integration of the module Faker to create random values
  randomize() {
    // call Faker's functions to generate dummy data
    this.set('name', Faker.company.companyName() + ' Library');
    this.set('address', this._fullAddress());
    this.set('phone', Faker.phone.phoneNumber());

    // to allow using in chain
    return this;
  },

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }
});

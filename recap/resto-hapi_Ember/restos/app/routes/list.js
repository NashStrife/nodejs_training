import Ember from 'ember';

export default Ember.Route.extend({
    // hook called when we show the list page and send the values to the view as a model
    model() {
        // return restos;
        // make a GET request to the /resto
        return this.get('store').findAll('resto');
    }
});

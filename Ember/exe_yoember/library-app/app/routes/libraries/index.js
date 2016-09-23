import Ember from 'ember';

export default Ember.Route.extend({
    // just get all library records from the server
    model(){
        return this.store.findAll('library');
    }
});
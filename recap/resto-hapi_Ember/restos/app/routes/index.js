import Ember from 'ember';

export default Ember.Route.extend({
    // redirect to the list of restaurants 
    beforeModel(){
        // override a handler defined on a parent class/mixin
        this._super(...arguments);
        // go to /list in place of /
        this.replaceWith('list');
    }
});

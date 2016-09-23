import Ember from 'ember';

export default Ember.Route.extend({
    // create a new record that will be the model whiwh is auto linked with the template
    model() {
        return this.store.createRecord('library');
    },
    actions: {
        // get the parameter which contain data to store
        saveLibrary(newLibrary) {
            console.log('Saving new Library...');
            newLibrary.save().then(() => {
                console.log('New library Saved !');
                // redirect to libraries home page
                this.transitionTo('libraries');
            });
        },
        // built-in action that is called when we leave the page
        willTransition() {
            // clean the model to delete informations when we leave the page without saving informations
            this.controller.get('model').rollbackAttributes();
        }
    }
});
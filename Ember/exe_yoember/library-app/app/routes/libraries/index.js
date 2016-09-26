import Ember from 'ember';

export default Ember.Route.extend({
    // just get all library records from the server
    model(){
        
        return this.store.findAll('library');
    },

    actions: {
        // when we click on the delete button
        deleteLibrary(library) {
            let confirmation = confirm('Are you sure ?');
            if(confirmation) {
                // send delete request to /api/libraries/{id}
                library.destroyRecord();
            }
        }
    }
});
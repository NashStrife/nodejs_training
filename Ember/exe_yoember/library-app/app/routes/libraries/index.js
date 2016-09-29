import Ember from 'ember';

export default Ember.Route.extend({
    // local var for the router
    responseMessage: null,
    errorMessage: null,
    // params: null,
    queryParams: {
        search: {refreshModel: true}
    },

    beforeModel: function(transition) {
        // get data from other views to manage response Message
        this.set('responseMessage', transition.queryParams.responseMessage);
    },
    
    model(params){
        // if the user enter a search
        if(params.search) {
            return this.store.query('library', {search: params.search});
        }
        // just get all library records from the server
        return this.store.findAll('library');
    },

    setupController(controller, model){
        this._super(controller, model);
        // set the var 'responseMessage' of the controller with data of the var 'responseMessage' from the router
        this.controller.set('responseMessage', this.responseMessage);
        // whait few seconds then hide the message
        Ember.run.later(() => this.controller.set('responseMessage', null), 3000);
    },

    actions: {
        // function to filter the libraries list insite the route 
        // => MOVED TO COMPONENT FOR GLOBAL SEARCH (keeped just for example)
        // filterByName(value){
        //     if(value){
        //         // all names in db are in lowercase so we need to transform the string sent by the user
        //         value = value.toLowerCase();
        //         console.log(value);
        //         this.transitionTo('libraries', {queryParams: {search: value}});
        //     } else {
        //         this.controller.set('value', '');
        //         // define search on undefined to delete the query and list all data
        //         this.transitionTo('libraries', {queryParams: {search: undefined}});
        //     }
                
        // },
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
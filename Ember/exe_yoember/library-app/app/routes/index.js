import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.createRecord('invitation');
    },
    // define a controller with informations used in the view
    setupController: function(controller, model) {
        // define the model to use in the controller
        controller.set('model', model);
        this.controller.set('headerMessage', 'Coming Soon');
        this.controller.set('responseMessage', '');
    },
    actions: {
        saveInvitation(newInvitation) {
            console.log('Saving new invitation...');
            newInvitation.save().then(() => {
                console.log(newInvitation);
                console.log('New Invitation Saved !');
                // set up a responseMessage property
                this.controller.set('responseMessage', `Thank you! We've just saved your email address: ${newInvitation.get('email')}`);
                // clean the email value
                newInvitation.set('email', '');
            });
        }
    }
});

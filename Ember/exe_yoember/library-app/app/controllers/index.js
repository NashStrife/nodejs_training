import Ember from 'ember';

export default Ember.Controller.extend({
    // property used in the view inside the input
    emailAddress: '',
    headerMessage: 'Coming Soon',
    responseMessage: '',

    // if the email is not a valid one, isValid is false
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    // isDisabled need to be true if isValid is false
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveInvitation() {
            // avoid dependency problems
            // let that = this;
            // set a var with the emailAddress easyer to use
            const email = this.get('emailAddress');
            
            // create a record to the db to store the email address
            const newInvitation = this.store.createRecord('invitation', {
                email: email
            });

            // console.log(newInvitation);
            newInvitation.save().then((response) => {
                console.log(response);
                // set up a responseMessage property
                this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
                // clean the emailAddress value
                this.set('emailAddress', '');
            });
        }
    }
});

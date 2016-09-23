import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('contact');
    },
    emailAddress: '',
    message: '',

    isEmailValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
    isMsgValid: Ember.computed.gte('model.message.length', 5),
    isFormValid: Ember.computed.and('isEmailValid', 'isMsgValid'),
    isDisabled: Ember.computed.not('isFormValid'),

    actions: {
        sendMessage() {
            this.set('responseMessage', `Thank you for your message, we'll get in touch soon`);
            console.log(this.get('emailAddress'));
            console.log(this.get('message'));
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
});

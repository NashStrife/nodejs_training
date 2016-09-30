import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            book: this.store.createRecord('book'),
            authors: this.store.findAll('author')
        });
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('title', 'Add a new book');
        controller.set('buttonLabel', 'Add');
    },
    // renderTemplate(){
    //     this.render('books/form');
    // },
    actions: {
        saveBook(newBook) {
            console.log(newBook);
            console.log('Saving new Book...');
            // newBook.save()
            //     .then((response) => {
            //         console.log(response);
            //         // console.log('New library Saved !');
            //         this.transitionTo('books', {queryParams: {responseMessage: 'New Book Saved !'}});
            //     }, (response) => {
            //         if(response.errors[0].status === 400){
            //             this.controller.set('errorMessage', 'There is already a Book with this name');
            //         }
            //     });
        },
        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
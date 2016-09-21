import Ember from 'ember';

export default Ember.Component.extend({
    // the image is minimized by default
    isWide: false,
    actions:{
        // when the function toggleImageSize is called
        toggleImageSize(){
            // change the value from false to true /true to false
            this.toggleProperty('isWide');
        }
    }
});

import Ember from 'ember';

export function restoRating([rating]/*, hash*/) {
  if(rating > 6){
    return 'green';
  } else if(rating >= 5){
    return 'orange';
  }
  return 'red';
}

export default Ember.Helper.helper(restoRating);

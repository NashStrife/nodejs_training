// import DS from 'ember-data'; // base import created thx to the command line

// allow the use of Model in place of DS.Model
import Model from 'ember-data/model';
// allow the use of attr() in place of DS.attr()
import attr from 'ember-data/attr'; 

export default Model.extend({
    _id : attr(),
    name: attr(),
    address: attr(),
    phone : attr(),
    cooktype: attr(),
    comments: attr(),
    pictures: attr(),
    rating : attr(),
    url: attr(),
    createdat: attr(),
    updatedat: attr()
});

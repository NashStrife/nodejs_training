import DS from 'ember-data';

let options = {
    namespace: 'api',
    host: 'http://localhost:3000'
};

// file generated with ember g adapter application to change the namespace
export default DS.JSONAPIAdapter.extend(options);

// export default DS.RESTAdapter.extend(options);
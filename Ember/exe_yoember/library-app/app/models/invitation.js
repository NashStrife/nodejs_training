import DS from 'ember-data';

// linked to the server with the route /api/invitations thx to the adapter which define the base route to /api
export default DS.Model.extend({
  email: DS.attr('string')
});

// generated with the command
// ember g model invitation email:string
import { test } from 'qunit';
import moduleForAcceptance from 'restos/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list restos');
// try to go to the / route and verify if the route is loaded
test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should redirect to restos route', function(assert){

});

test('should show details for a specific resto', function(assert){

});

test('should filter the list of restos by name', function(assert){

});
import { test } from 'qunit';
import moduleForAcceptance from 'restos/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list restos');

test('should redirect to list restos route', function(assert){
    // load the route specified
    visit('/');
    // whait for all previously called test helper before executing following functions
    andThen(function() {
        // currentURL() returns the url that test app is currently visiting
        assert.equal(currentURL(), '/list', 'should redirect automatically');
    });
});

test('should filter the list of restos by name', function(assert){
    visit('/');
    // we have a input field with the class .list-filter and we fill it in with 'jade de chine'
    fillIn('.list-filter input', 'jade de chine');
    // send a key up event on the letter 'e'
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function(){
        // assert that the number of listings is 1 and the name is "jade de chine"
        assert.equal(find('.listing').length, 1, 'should show 1 listing');
        assert.equal(find('.listing .name:contains("jade de chine")').length, 1, 'should contain 1 listing with the name jade de chine');
    });
});

test('should link to details about a specific resto', function(assert){
    visit('/');
    click('a:contains("Details")');
    andThen(function() {
        assert.equal(currentURL(), '/details', 'should navigate to details page');
    });
});

test('should link to form for adding a new resto', function(assert){
    visit('/');
    click('a:contains("Add")');
    andThen(function() {
        assert.equal(currentURL(), '/form', 'should navigate to add resto page');
    });
});

// try to go to the / route and verify if the route is loaded
// test('visiting /', function(assert) {
//     visit('/'); 
//     andThen(function() { 
//         assert.equal(currentURL(), '/'); 
//     });
// });
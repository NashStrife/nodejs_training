import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should transition to list of restaurants route', function(assert) {
  let route = this.subject({
    // replaceWith is similar to transitionTo except that it replace the url in the browser history
    replaceWith(routeName){
      assert.equal(routeName, 'list', 'replace with route name list')
    }
  });
  route.beforeModel();
});

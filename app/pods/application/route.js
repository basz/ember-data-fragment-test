import Ember from "ember";

export default Ember.Route.extend({
  store: Ember.inject.service(),

  payload: {
    data: {
      "id": "1",
      "type": 'zoo',
      "attributes": {
        "name": "Winterfell Zoo",
        "city": "Winterfell",
        "animals": [
          {
            "type": "lion",
            "name": "Simba",
            "hasManes": false
          },
          {
            "type": "lion",
            "name": "Leonard",
            "hasManes": true
          },
          {
            "type": "elephant",
            "name": "Trunky",
            "trunkLength": 10
          },
          {
            "type": "elephant",
            "name": "Snuffles",
            "trunkLength": 9
          }
        ]
      }
    },
  },
  model: function() {
    this.get('store').pushPayload(this.get('payload'));
    return this.get('store').peekRecord('zoo', 1);
  }
});

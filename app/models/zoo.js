import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { fragmentArray } from 'model-fragments/attributes';

export default Model.extend({
  name: attr('string'),
  city: attr('string'),
  animals: fragmentArray('animal', { polymorphic: true, typeKey: 'type' }),
});

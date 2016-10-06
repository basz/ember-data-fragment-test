import Animal from './animal';
import attr from 'ember-data/attr';

export default Animal.extend({
  hasManes: attr('boolean'),
});

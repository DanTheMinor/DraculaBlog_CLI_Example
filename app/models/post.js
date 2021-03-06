import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  title: attr('string'), //If you dont specificy datatype, it will default to what's returned
  body: attr('string')
});

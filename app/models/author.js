import DS from 'ember-data';

export default DS.Model.extend({
  posts: DS.hasMany('post'), //If you dont specificy datatype, it will default to what's returned
  name: DS.attr('string')
});

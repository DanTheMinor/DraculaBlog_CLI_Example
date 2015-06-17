import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  // this.resource('post', {path: '/posts/:post_id'});
  this.resource('posts', function() {
    this.resource('post', { path: ':post-id' });
  });
  this.resource('messages', function() {
    this.resource('message', { path: '/messages/:message-id'});
    this.route('new');
  });
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toys',{path:'/toys'});
  this.route('bricks', {path:'/bricks'},function() {
    this.route('red',{path:'/red'});
    this.route('blue',{path:'/blue'});
  });
});

export default Router;

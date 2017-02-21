import Ember from 'ember';

export default Ember.Controller.extend({
  //  set the var then will be used as param
  scale : true, // initial state
  fade : false,
  crossFade: false,
  explode: false,
  wait: false,
  transitionPage: true,
  showDetail: false,

  actions: {
    toggleAnimation(animation){
      this.toggleProperty(animation);
    },

  }
});

import Ember from 'ember';

export default Ember.Controller.extend({

  showDetail: false,
  panel: false,
  myVar: false,
  flip: false,
  carousel: false,

  actions: {
    toggleAnimation(animation){
       this.toggleProperty(animation);
    }
  }
});

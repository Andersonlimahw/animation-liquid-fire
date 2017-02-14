import Ember from 'ember';

export default Ember.Controller.extend({

  item : false,
  actions: {
    toggleItem(){
      this.toggleProperty('item');
    }
  }
});

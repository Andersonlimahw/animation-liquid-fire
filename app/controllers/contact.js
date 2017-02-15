import Ember from 'ember';

export default Ember.Controller.extend({

  showDetail: false,
  actions: {
    toggleDetail(){
       this.toggleProperty('showDetail');
    }
  }
});

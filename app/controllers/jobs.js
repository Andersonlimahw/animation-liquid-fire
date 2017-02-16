import Ember from 'ember';

export default Ember.Controller.extend({
  isWormholeEnabled: false,
  actions :{
      toggleModal() {
        this.toggleProperty('isWormholeEnabled');         
      }
  }
});

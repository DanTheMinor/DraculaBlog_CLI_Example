import Ember from "ember";

var PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
};

export default Ember.ObjectController.extend(PostController);

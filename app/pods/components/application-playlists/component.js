import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  tubefyStore: storageFor('tubefy-store'),

  didInsertElement: function() {
    if (!this.get('tubefyStore.playlists')) {
      this.set('tubefyStore.playlists', Ember.A());
    }
  }
});

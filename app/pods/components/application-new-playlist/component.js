import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  tubefyStore: storageFor('tubefy-store'),

  actions: {
    save: function(playlistName) {
      if (playlistName) {
        var playlists = this.get('tubefyStore.playlists');
        var newPlaylist = {
          name: playlistName,
          content: Ember.A()
        };

        playlists.pushObject(newPlaylist);
        this.set('tubefyStore.playlists', playlists);
        Ember.$('#modalNewPlylist').modal('toggle');
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'application-music-list',
  tubefyService: Ember.inject.service('tubefy-service'),

  didInsertElement: function() {
    this.ajustElementsSize();
    Ember.$(window).resize(this.ajustElementsSize);
  },

  ajustElementsSize: function() {
    var height = Ember.$(document).width();
    var componentHeight = height - 350;
    Ember.$('.container-right').css('width', componentHeight + 'px');
  },

  actions: {
    playMusic: function(music) {
      this.set('tubefyService.currentMusic', music.id.videoId);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  tubefyService: Ember.inject.service('tubefy-service'),

  myPlayerVars: {
    autoplay: 1,
    showinfo: 0
  },

  updateProgress: function() {
    var duration = this.get('emberYoutube.duration');
    var currentTime = this.get('emberYoutube.currentTime');
    if (duration && currentTime) {
      var progress = currentTime * 100;
      progress = progress / duration;
      this.set('progress', parseInt(progress));
    }
  }.observes('emberYoutube.currentTime'),
});

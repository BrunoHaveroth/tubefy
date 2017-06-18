import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'application-search',
  tubefyService: Ember.inject.service('tubefy-service'),
  ajax: Ember.inject.service(),

  didInsertElement: function() {
    Ember.$('.input-search').keypress((e) => {
      if(e.which ==13) {
        this.sendSearch();
      }
    });
  },

  sendSearch: function() {
    var searchQuery = encodeURI(this.get('searchQuery'));
    this.get('ajax').request('https://www.googleapis.com/youtube/v3/search?maxResults=25&type=video&q='+searchQuery+'&key=AIzaSyDjgq27nuNJd7ByC5VSFxFYujoZJOcq8MY&fields=items(id,snippet(channelId,title))&part=snippet')
    .then((response)=> {
      this.set('tubefyService.listToPlay', response);
    });
  }
});

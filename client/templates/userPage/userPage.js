Template.userPage.helpers({
  post: function() {
    return this.posts.map(function(post, index, cursor) {
      post._rank = index;
      return post;
  	});
  }
});
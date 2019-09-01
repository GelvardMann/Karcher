var action = false,
   clicked = false;
var Owl = {

   init: function() {
      Owl.carousel();
   },

   carousel: function() {
      var owl;
      $(document).ready(function() {

         owl = $('.slider').owlCarousel({
            items: 1,
            center: true,
            dots: true,
            loop: true,
            margin: 50,
            dotsContainer: '.bookmark_box',
         });
         $('.bookmarks').on('click', 'li', function(e) {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
         });
      });
   }
};

$(document).ready(function() {
   Owl.init();
});

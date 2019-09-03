var action = false,
   clicked = false;
var Owl_two = {

   init: function() {
      Owl_two.carousel();
   },

   carousel: function() {
      var owl;
      $(document).ready(function() {

         owl = $('.slider_two').owlCarousel({
            items: 1,
            center: true,
            dots: true,
            loop: true,
            margin: 50,
            dotsContainer: '.people_bookmarks',
         });
         $('.people_bookmarks').on('click', 'li', function(e) {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
         });
      });
   }
};


$(document).ready(function() {
   Owl_two.init();
});

// app js


(function() {

  $(document).ready(function(){

    var toDoList = {
      init: function() {
        this.cacheDom();
        this.bindEvents();
      },

      cacheDom: function() {
        this.$button = $('#add-item-submit');
      },

      bindEvents: function() {
        console.log('bind');
        this.$button.on('click', this.addNewToDo);
      },

      addNewToDo: function() {
        var newToDo = $('#add-item-input').val();


      }
    };

    toDoList.init();

  });

})();

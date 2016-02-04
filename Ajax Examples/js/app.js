// app js


(function() {

  $(document).ready(function(){

    var toDoList = {
      init: function() {
        this.cacheDom();
        this.bindEvents();
      },

      cacheDom: function() {
        this.$container = $('.to-do-list');
        this.$button = $('#add-item-submit');
        this.$list = $('.list');
        this.$input = $('#add-item-input');
        this.$completedList = $('.completed-list');
        this.$deleteButton = this.$container.find('.delete');
        console.log('cached');
      },

      bindEvents: function() {
        console.log('bind');
        this.$button.on('click', this.addNewToDo.bind(this));
        this.$list.on('change', 'input[type="checkbox"]', this.completeTask);
        this.$deleteButton.on('click', this.deleteTask);
      },

      addNewToDo: function() {
          var newToDo = this.$input.val();
          this.$list.append('<li><input id="complete-check" type="checkbox">' + newToDo + '<i class="fa fa-times delete"></i></li>');
          this.$input.val('');
      },

      completeTask: function() {
        $(this).parent().remove();
        var completedValue = $(this).parent().text();
        console.log(completedValue);

        $('.completed-list').prepend('<li>'+ completedValue +'<i class="fa fa-times delete"></i></li>');
      },

      deleteTask: function() {
        $(this).parent().remove();
        console.log('delete');

      }

    };

    toDoList.init();


    var $friendsList = $('#friendsList');

    var $name = $('#name');
    var $age = $('#age');

    // Get friends
    $.ajax({
      type: 'GET',
      url: 'http://rest.learncode.academy/api/garrett/friends',
      success: function(friends) {
        $.each(friends, function(i, friend) {
          $friendsList.append('<li>'+ 'Name:' +  ' ' + friend.name + ' ' + 'Age: ' + friend.age + '</li>');
        });
      }
    });

    // Store friends info on click
    $('.add-friend-button').on('click', function() {
      console.log('add friend');
      var friend = {
        name: $name.val(),
        age: $age.val()
      };

      // Post friend information
      $.ajax({
        type: "POST",
        url: 'http://rest.learncode.academy/api/garrett/friends',
        data: friend,
        sucess: function(newFriend) {
          if(newFriend.success === true){
            $friendsList.append('<li>' + 'Name: ' + ' ' + newFriend.name + 'Age: ' + ' ' + newFriend.age + '</li>');
          }
        }
      });

    }); // end button click

    // The start getting treehouse information

    $.ajax({
      type: 'GET',
      url: 'https://teamtreehouse.com/garrettsanderson.json',
      dataType: 'json',
      success: function(treeHouseDatas) {
        var profileName = treeHouseDatas.name;

        $('.tree-house-title').append("<h2>" + profileName + "'s badges" + '</h2>');
        var data = JSON.stringify(treeHouseDatas)
        $.each(treeHouseDatas.badges, function(i, tree) {
          $('#treehouse-info').append('<img class="badges" src="' + tree.icon_url + '">');

        });
      }
    });
    
  }); // end document ready

})();

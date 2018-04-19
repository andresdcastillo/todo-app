$(document).ready(function(){

  $('form').on('submit', function(){
      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        method: "POST",
        url: "/todo",
        data: todo
      })
        .done(function( data ) {
          location.reload();
        });
      return false;
  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");    

      $.ajax({
        method: "DELETE",
        url: "/todo/" + item,
      })
        .done(function( data ) {
          location.reload();
        });
  });
});


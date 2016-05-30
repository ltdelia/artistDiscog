$.getJSON('/albums', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#albums').append('<tr><td>'+ data[i].album + '</td><td>'+ data[i].date + '</td><td>'+ data[i].label + '</td><td>'+ data[i].format + '</td><td><button data-id="' + data[i]._id + '" data-toggle="modal" href="#viewcomments" id="see" class="btn btn-primary">View Comments</button></td><td><button data-id="' + data[i]._id + '" data-toggle="modal" href="#modal-id" id="note" class="btn btn-default">Comment</button></td></tr>');
  }
});

// Click Event to Create Comments
$(document).on('click', '#note', function(){
  // Grab the data-id associated with this "Comment" button
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "GET",
    url: "/albums/" + thisId,
  })
    .done(function( data ) {
      console.log(data);
      // Inject the data related to the data-id into the html
      $('#album').html(data.album);
      $('#date').html(data.date);
      $('#label').html(data.label);
      $('#format').html(data.format);
      $('#savenote').attr('data-id', data._id);


      if(data.note){
        $('#comment-title').val(data.note.title);
        $('#comment-body').val(data.note.body);
      }
    });
});

// Click Event to Save Comments
$(document).on('click', '#savenote', function(){
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "POST",
    url: "/albums/" + thisId,
    data: {
      title: $('#comment-title').val(),
      body: $('#comment-body').val()
    }
  })
    .done(function( data ) {
      console.log(data);
    });


  $('#comment-title').val("");
  $('#comment-body').val("");
});


// Click Event to View Comments Previously Posted
$(document).on('click', '#see', function(){
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "GET",
    url: "/albums/" + thisId,
  })
    .done(function( data ) {
      console.log(data);
      $('#title').html(data.album);
      $('#comment-header').html(data.note.title);
      $('#comment-text').html(data.note.body);

    });
});




$.getJSON('/albums', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#albums').append('<tr><td>'+ data[i].album + '</td><td>'+ data[i].date + '</td><td>'+ data[i].label + '</td><td>'+ data[i].format + '</td><td><button data-id="' + data[i]._id + '" data-toggle="modal" href="#modal-id" id="note" class="btn btn-default">Comment</button></td></tr>');
  }
});

$(document).on('click', 'button', function(){
  // $('#noteModal').empty();
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "GET",
    url: "/albums/" + thisId,
  })
    .done(function( data ) {
      console.log(data);
      $('#album').html(data.album);
      $('#date').html(data.date);
      $('#label').html(data.label);
      $('#format').html(data.format);
      
      $('#modal-footer').append('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
      $('#modal-footer').append('<button class="btn btn-primary" data-id="' + data._id + '" id="savenote">Save Note</button>');


      if(data.note){
        $('#titleinput').val(data.note.title);
        $('#bodyinput').val(data.note.body);
      }
    });
});

$(document).on('click', '#savenote', function(){
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "POST",
    url: "/albums/" + thisId,
    data: {
      title: $('#titleinput').val(),
      body: $('#bodyinput').val()
    }
  })
    .done(function( data ) {
      console.log(data);
      $('#modal-id').empty();
    });


  $('#titleinput').val("");
  $('#bodyinput').val("");
});





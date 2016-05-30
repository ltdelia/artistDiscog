$.getJSON('/albums', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#albums').append('<tr><td>'+ data[i].album + '</td><td>'+ data[i].date + '</td><td>'+ data[i].label + '</td><td>'+ data[i].format + '</td><td><button data-id="' + data[i]._id + '" id="note" class="btn btn-default">Comment</button></td></tr>');
  }
});





function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function insInfo(jobTitle){
  $('#location').val(getLocation());
  $('#job').val(jobTitle);
  console.log('hi');
}

$(function () {

console.log('hi');
  $("#submit").click(function () {
    var location = $("#location").val();
    console.log(location);
    //Location finished
    var job = $("#job").val();

    var favorite = [];
    $.each($("input[name='job']:checked"), function () {
      favorite.push($(this).val());
    });
    console.log(favorite)
    $.ajax({
      crossDomain: true,
      dataType: 'jsonp',
      xhrFields: {
        withCredentials: true
      },
      url: 'http://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=' + job + '&l=' + location + '&sort=&radius=&st=&jt=' + favorite + '&start=&limit=15&fromage=180&filter=1&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json',
      success: function (data) {
         $('.jobs').remove();

      for(var i=0;i<12;i++){
         //console.log(data.results[i])

        var jobtitle = data.results[i].jobtitle;
        var location = data.results[i].formattedLocationFull;
        var contact = data.results[i].url;
        var time = data.results[i].formattedRelativeTime;
        $("#data").append('<tr class=jobs> <td>' + jobtitle + ' </td> <td>' + location + '</td> <td> <a href=' + contact + '> Website </a> </td> <td>' + time  + '</td> </tr>')
      }
        console.log(data);
      },
    });
  })
})

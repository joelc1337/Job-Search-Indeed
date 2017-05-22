$('#btn').click(function(){
  getLocation();
})
function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
$(function () {
// Submit button gets the location and job type and stores it in a variable.
  $("#submit").click(function () {
    var location = $("#location").val();
    //Location finisheda
    var job = $("#job").val();

    var favorite = [];
// Checks if the input fields are selected.
    $.each($("input[name='job']:checked"), function () {
      favorite.push($(this).val());
    });
// Ajax call gets the information from indeed api
    $.ajax({
// These atributes allowed cross-origin browser access.
      crossDomain: true,
      dataType: 'jsonp',
      xhrFields: {
        withCredentials: true
      },
      url: 'http://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=' + job + '&l=' + location + '&sort=&radius=&st=&jt=' + favorite + '&start=&limit=15&fromage=180&filter=1&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json',
      success: function (data) {
         $('.jobs').remove();
// Loop creates table gets the information and stores it in a variable
      for(var i=0;i<12;i++){
        var jobtitle = data.results[i].jobtitle;
        var location = data.results[i].formattedLocationFull;
        var contact = data.results[i].url;
        var time = data.results[i].formattedRelativeTime;
        $("#data").append('<tr class=jobs> <td>' + jobtitle + ' </td> <td>' + location + '</td> <td> <a href=' + contact + '> Website </a> </td> <td>' + time  + '</td> </tr>')
      }
      },
    });
  })
})

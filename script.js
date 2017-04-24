

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
      url: 'https://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=' + job + '&l=' + location + '&sort=&radius=&st=&jt=' + favorite + '&start=&limit=&fromage=180&filter=1&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json',
      success: function (data) {

        console.log(data);
      },
    });
  })
})


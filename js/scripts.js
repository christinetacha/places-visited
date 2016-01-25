function Location(city, state, country, landmark) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.landmark = [];
}

Location.prototype.newDestination = function() {
  return this.city + ", " + this.state + " " + this.country + ", " + this.landmark;
}

$(document).ready(function() {
  $("#add-landmark").click(function() {
      $("#new-landmark").append('<div class="new-landmark">' +
                                   '<div class="form-group">' +
                                     '<label for="new-landmark">Landmarks</label>' +
                                     '<input type="text" class="form-control new-landmark">' +
                                   '</div>' +
                                  '</div>');
                                 });

  $("form#new-location").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var newLocation = new Location(inputtedCity, inputtedState, inputtedCountry, inputtedLandmark);
    // newLocation.landmark.push(newLandmark)

    // $(".new-location").each(function() {
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var inputtedCountry = $(this).find("input.new-country").val();
    //   var newLandmark = new Landmark(inputtedLandmark)
    //         newLocation.landmark.push(newLandmark)
    //       });

    $("ul#locations").append("<li><span class='location'>" + newLocation.newDestination() + "</span></li>");

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");
    $("input#new-landmark").val("");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.city);
      $(".city").text(newLocation.city);
      $(".state").text(newLocation.state);
      $(".country").text(newLocation.country);
      $(".landmark").text(newLocation.landmark);
    });
  });
});

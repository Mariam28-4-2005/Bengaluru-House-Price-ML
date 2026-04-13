function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i = 0; i < uiBathrooms.length; i++) {
    if (uiBathrooms[i].checked) {
      return parseInt(uiBathrooms[i].value);
    }
  }
  return -1;
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i = 0; i < uiBHK.length; i++) {
    if (uiBHK[i].checked) {
      return parseInt(uiBHK[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");

  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "/api/predict_home_price";

  $.post(url, {
    total_sqft: parseFloat(sqft.value),
    bhk: bhk,
    bath: bathrooms,
    location: location.value
  }, function(data, status) {
    console.log("success:", data);
    estPrice.innerHTML = "<h2>" + data.estimated_price + " Lakh</h2>";
  }).fail(function(xhr, status, error) {
    console.log("POST failed");
    console.log("status:", status);
    console.log("error:", error);
    console.log("responseText:", xhr.responseText);
    estPrice.innerHTML = "<h2>Error</h2>";
  });
}

function onPageLoad() {
  console.log("document loaded");
  var url = "/api/get_location_names";

  $.get(url, function(data, status) {
    console.log("got response for get_location_names request");
    console.log(data);
    if (data && data.locations) {
      var uiLocations = document.getElementById("uiLocations");
      uiLocations.innerHTML = '<option value="" disabled selected>Choose a Location</option>';
      for (var i = 0; i < data.locations.length; i++) {
        var opt = document.createElement("option");
        opt.value = data.locations[i];
        opt.text = data.locations[i];
        uiLocations.appendChild(opt);
      }
      console.log("total options:", uiLocations.options.length);
    }
  }).fail(function(xhr, status, error) {
    console.log("GET failed");
    console.log(status, error);
    console.log(xhr.responseText);
  });
}

window.onload = onPageLoad;
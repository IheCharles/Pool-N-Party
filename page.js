
function initMap() {
  const input = document.getElementById("pac-input");

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.977760, lng: -75.150950 },
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl:false,
        mapTypeControl: false,
        minZoom: 13,
        maxZoom: 13,
      });
      const myLatLng = { lat: 39.977760, lng: -75.150950 };

      const card = document.getElementById("pac-card");
      const biasInputElement = document.getElementById("use-location-bias");
      const strictBoundsInputElement = document.getElementById("use-strict-bounds");

      const options = {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["geocode"],
      };
      

    

      const autocomplete = new google.maps.places.Autocomplete(input, options);
      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo("bounds", map);
      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById("infowindow-content");
      infowindow.setContent(infowindowContent);
      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
      });
      autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
    
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        infowindow.open(map, null);
      });
    
      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      function setupClickListener(id, types) {
        const radioButton = document.getElementById(id);
        radioButton.addEventListener("click", () => {
          autocomplete.setTypes(types);
          input.value = "";
        });
      }
      setupClickListener("changetype-all", []);
      setupClickListener("changetype-address", ["address"]);
      setupClickListener("changetype-establishment", ["establishment"]);
      setupClickListener("changetype-geocode", ["geocode"]);
      biasInputElement.addEventListener("change", () => {
        if (biasInputElement.checked) {
          autocomplete.bindTo("bounds", map);
        } else {
          // User wants to turn off location bias, so three things need to happen:
          // 1. Unbind from map
          // 2. Reset the bounds to whole world
          // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
          autocomplete.unbind("bounds");
          autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
          strictBoundsInputElement.checked = biasInputElement.checked;
        }
        input.value = "";
      });

    
  }
  var monthIndex = new Date().getMonth();
  var year = new Date().getFullYear();
  function locationpad(r){

    if (r == "days"){
      var x = document.getElementById("datepicker");

    
      switch (monthIndex) {
        case 0:
          m = "January";
          break;
        case 1:
          m = "Febuary";
          break;
        case 2:
          m = "March";
          break;
        case 3:
          m = "April";
          break;
        case 4:
          m = "May";
          break;
        case 5:
          m = "June";
          break;
        case  6:
          m = "July";
        break;
        case 7:
            m = "August";
        break;
        case 8:
          m = "September";
        break;
        case 9:
          m = "October";
        break;
        case 10:
          m = "November";
        break;
        case 11:
          m = "December"
        break;
        
      }
     
      diff = new Date(year, monthIndex, 01).getDay()-1;
      for (let i =0; i < diff; i++) {
        document.getElementById(i.toString()).innerText = "";
      }
      var stop=0;
      for (let i =1; i < 41; i++) {
        d =new Date(year, monthIndex, i).getDate();
        if (stop == 0){
          document.getElementById((diff + i).toString()).innerText = i.toString();
        }else{
          if (d != 1){
            document.getElementById((diff + i).toString()).innerText = i.toString();
          }else{
            { break; }
          }
        }
        stop = 1;
      }
     document.getElementById("month-name").innerHTML = m + " "+ year;
     const   user = "dad";
  
  
    }

  }
  locationpad("days");
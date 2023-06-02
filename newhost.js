const vScrollList = document.querySelector('.js-vertical-scroll-list');
var totalcount = 0;
document.getElementById('collage').style.visibility="hidden";
let depth = 0;
let depthMax = null;
let list = null;
  
let items = null;


let item = null;

let itemHeight = null;
if (vScrollList !== null) {

    $(vScrollList)
        .on('ux.vScrollList.init', function() {
             items = this.querySelectorAll('.js-vertical-scroll-list-item');
            items[0].classList.add('is-first');
            items[1].classList.add('is-active');

            $(this).trigger('ux.vScrollList.setHeight');
            $(this).trigger('ux.vScrollList.onWheel');
        })
        .on('ux.vScrollList.setHeight', function() {
             item = this.querySelector('.js-vertical-scroll-list-item');
             itemHeight = parseFloat(getComputedStyle(item, null).height.replace("px", ""));

            $(this).css('height', itemHeight * 3);
        })
        .on('ux.vScrollList.onWheel', function() {
             depth = 0;
             depthMax = this.querySelectorAll('.js-vertical-scroll-list-item').length;
             list = this.querySelector('ul');
              
             items = list.querySelectorAll('.js-vertical-scroll-list-item');
            
 
             item = this.querySelector('.js-vertical-scroll-list-item');

             itemHeight = parseFloat(getComputedStyle(item, null).height.replace("px", ""));


            document.getElementById("pool").addEventListener("click", function() {
            


 
              function setActiveItem() {
                  for (let i = 0; i < items.length; i++) {
                      if (items[i].classList.contains('is-active')) {
                          items[i].classList.remove('is-active');
                          items[i + 1].classList.add('is-active');
                          break;
                      }
                  }
              }

              // move forwards
              if (depth < depthMax - 3) {
                  depth += 1;
             
                  let value = -itemHeight * depth;
                  
                  TweenMax.to(list, 1.0, {y: value, ease: Power1.easeOut});
                  
              }

              setActiveItem();


            });

            document.getElementById("icon").addEventListener("click", function() {
            


 
              function setActiveItem() {
                  for (let i = 0; i < items.length; i++) {
                      if (items[i].classList.contains('is-active')) {
                          items[i].classList.remove('is-active');
                          items[i + 1].classList.add('is-active');
                          break;
                      }
                  }
              }

              // move forwards
              if (depth < depthMax - 3) {
                  depth += 1;
             
                  let value = -itemHeight * depth;
                  
                  TweenMax.to(list, 1.0, {y: value, ease: Power1.easeOut});
                  
              }

              setActiveItem();


            });

            window.namedescription = function(){  
               
              function setActiveItem() {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('is-active')) {
                        items[i].classList.remove('is-active');
                        items[i + 1].classList.add('is-active');
                        break;
                    }
                }
            }

            // move forwards
            if (depth < depthMax - 3) {
                depth += 1;
           
                let value = -itemHeight * depth;
                
                TweenMax.to(list, 1.0, {y: value, ease: Power1.easeOut});
                
            }

            setActiveItem();

            }  

            
            window.finished = function(){  
               
              function setActiveItem() {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('is-active')) {
                        items[i].classList.remove('is-active');
                        items[i + 1].classList.add('is-active');
                        break;
                    }
                }
            }

            // move forwards
            if (depth < depthMax - 3) {
                depth += 1;
           
                let value = -itemHeight * depth;
                
                TweenMax.to(list, 1.0, {y: value, ease: Power1.easeOut});
                
            }

            setActiveItem();

            }  

        })
        .trigger('ux.vScrollList.init');


}

function map(){
    var pool = document.getElementById('pool');
    var Amenities = document.getElementById('Amenities');
    var map = document.getElementById('map');
    var icon = document.getElementById('icon');
 

   pool.style.backgroundImage="none";
   Amenities.style.backgroundImage="none";
  pool.style.width="45%";
   Amenities.style.width="45%";
  pool.style.height="90%";
   Amenities.style.height="90%";
   Amenities.style.opacity="60%"
   pool.style.opacity="60%"
   pool.style.top="50%";
   pool.style.left="5%";
   Amenities.style.left="50%";
   pool.style.pointerEvents = "none"; 
   pool.style.boxShadow=" 0 0px 0px 0px rgba(0, 0, 0, 0.0)";
   Amenities.style.boxShadow=" 0 0px 0px 0px rgba(0, 0, 0, 0.0)";

   pool.style.transition="0.4s";
   Amenities.style.transition="0.4s";

   pool.addEventListener("transitionend", function (e) {
    pool.style.display="none";
    Amenities.style.display="none";
    map.style.display="block";
    document.getElementById('pac-card').style.display="block";
    document.getElementById('pac-card').style.visibility="hidden";
   });

  }
  
  function icon(){

    var map = document.getElementById('map');
    var collage = document.getElementById('collage');
  

    var NDdesc = document.getElementById('NDdesc');
    
    var name = document.getElementById('name');
    
    var desc = document.getElementById('desc');
    map.style.display="none";
    collage.style.visibility="visible";

    for (var i = 0; i <6;i++){
      if(i==0){
        document.getElementById(i).style.boxShadow="0 2px 10px 0px rgba(0, 0, 0, 0.6)";
      }
      document.getElementById(i).style.width="90%";
      document.getElementById(i).style.height="90%";
      document.getElementById(i).style.left="5%";
      document.getElementById(i).style.top="5%";
      document.getElementById(i).style.transition="0.7s";
    }
    var file;
    document.getElementById("0").addEventListener("dragover", function( event ) {

      event.preventDefault();


    }, false);

    document.getElementById("0").addEventListener("drop", (ev) => {
      ev.preventDefault();
  
      file = ev.dataTransfer.files[0];
      if(!file.type.match("image.*")) {
        alert("This file isn't image or it's unsupported format");
        return;
      }else{
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
      
          reader.readAsDataURL(file);

          reader.onload = () => {
            document.getElementById("0").style.boxShadow="0 0px 0px 0px rgba(0, 0, 0, 0.6)";
            document.getElementById("0_svg-icon-image").style.display="none";
            document.getElementById("0").style.backgroundImage = `url('${reader.result}')`;
            document.getElementById("0").style.opacity="100%";
            document.getElementById("0").classList.remove("scale");
            totalcount++;
            if (totalcount > 0 ){
              namedescription();
              document.getElementById("0_svg-icon-image").style.display="none";
              document.getElementById("dd").style.display="none";
              document.getElementById("1_svg-icon-image").style.display="none";
              document.getElementById("2_svg-icon-image").style.display="none";
              document.getElementById("3_svg-icon-image").style.display="none";
              document.getElementById("4_svg-icon-image").style.display="none";
              document.getElementById("5_svg-icon-image").style.display="none";
              document.getElementById("0").style.opacity="60%";
              for (var i = 0; i <6;i++){

                document.getElementById(i).style.borderRadius="0px";

                document.getElementById(i).style.backgroundImage=null;
                document.getElementById(i).style.width="100%";
                document.getElementById(i).style.transition="0.3s";
              }

                
              document.getElementById("5").addEventListener("transitionend", function (e) {
                collage.style.display="none";

                NDdesc.style.visibility="visible";
                name.style.borderRadius="12.5px";
                desc.style.borderRadius="20px";
                name.style.width="50%"
                desc.style.width="75%"
                name.style.height="15%"
               // desc.style.height="90%"
                name.style.opacity="100%";
                desc.style.opacity="100%";
                name.style.background="rgba(255, 255, 255, 0.40)";
                desc.style.background="rgba(255, 255, 255, 0.40)";
                name.style.top="50%";
                desc.style.top="-25%";
                desc.style.left="12.5%";
                name.style.left="12.5%";
                //name.style.transform="scale(0.25)";
                name.style.transition="0.5s";
                desc.style.transition="0.5s";

                name.addEventListener("transitionend", function (e) {
                  name.style.background="rgba(255, 255, 255, 0.25)";
                  desc.style.background="rgba(255, 255, 255, 0.25)";

                })
              });

            }
          };
        }
      }

      
  });
  file =null;
  document.getElementById("1").addEventListener("dragover", function( event ) {

    event.preventDefault();



  }, false);

  document.getElementById("1").addEventListener("drop", (ev) => {
    ev.preventDefault();

    file = ev.dataTransfer.files[0];
    if(!file.type.match("image.*")) {
      alert("This file isn't image or it's unsupported format");
      return;
    }else{
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);

        reader.onload = () => {
          document.getElementById("1_svg-icon-image").style.display="none";
          document.getElementById("1").style.backgroundImage = `url('${reader.result}')`;
          document.getElementById("1").style.opacity="100%";
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  });
  file =null;
  document.getElementById("2").addEventListener("dragover", function( event ) {

    event.preventDefault();


  }, false);
  document.getElementById("2").addEventListener("drop", (ev) => {
    ev.preventDefault();

    file = ev.dataTransfer.files[0];
    if(!file.type.match("image.*")) {
      alert("This file isn't image or it's unsupported format");
      return;
    }else{
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);

        reader.onload = () => {
          document.getElementById("2_svg-icon-image").style.display="none";
          document.getElementById("2").style.backgroundImage = `url('${reader.result}')`;
          document.getElementById("2").style.opacity="100%";
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  });
  file =null;
  document.getElementById("3").addEventListener("dragover", function( event ) {

    event.preventDefault();


  }, false);
  document.getElementById("3").addEventListener("drop", (ev) => {
    ev.preventDefault();

    file = ev.dataTransfer.files[0];
    if(!file.type.match("image.*")) {
      alert("This file isn't image or it's unsupported format");
      return;
    }else{
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);

        reader.onload = () => {
          document.getElementById("3_svg-icon-image").style.display="none";
          document.getElementById("3").style.backgroundImage = `url('${reader.result}')`;
          document.getElementById("3").style.opacity="100%";
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  });
  file =null;
  document.getElementById("4").addEventListener("dragover", function( event ) {

    event.preventDefault();


  }, false);
  document.getElementById("4").addEventListener("drop", (ev) => {
    ev.preventDefault();

    file = ev.dataTransfer.files[0];
    if(!file.type.match("image.*")) {
      alert("This file isn't image or it's unsupported format");
      return;
    }else{
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);

        reader.onload = () => {
          document.getElementById("4_svg-icon-image").style.display="none";
          document.getElementById("4").style.backgroundImage = `url('${reader.result}')`;
          document.getElementById("4").style.opacity="100%";
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  });
  file =null;
  document.getElementById("5").addEventListener("dragover", function( event ) {

    event.preventDefault();


  }, false);
  document.getElementById("5").addEventListener("drop", (ev) => {
    ev.preventDefault();

    file = ev.dataTransfer.files[0];
    if(!file.type.match("image.*")) {
      alert("This file isn't image or it's unsupported format");
      return;
    }else{
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);

        reader.onload = () => {
          document.getElementById("5_svg-icon-image").style.display="none";
          document.getElementById("5").style.backgroundImage = `url('${reader.result}')`;
          document.getElementById("5").style.opacity="100%";
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  });




  }



function textfocus(){

  var publish = document.getElementById('publish');
  var list = document.getElementById('vertical-scroll-list-sectionID');
  //publish.style.display = "block";
  list.style.opacity ="0";
  list.style.transition ="0.3s";
  list.addEventListener("transitionend", function (e) {
    list.style.display = "none";
    publish.style.display="block";
    publish.style.opacity ="1";
    publish.style.transition ="0.3s";
  });
}

function published() {
  var name = document.getElementById('name');
  var desc = document.getElementById('desc');
  var publish = document.getElementById('publish');
  publish.classList.remove("scale");
  publish.style.width = "333.4%";
  publish.style.height = "100%";
  publish.innerHTML = "";
  name.style.display = "none";
  desc.style.display = "none";
  publish.style.top = "0%";
  publish.style.borderRadius = "0px";
  publish.style.left = "0%";
  publish.style.opacity = "1";
  publish.style.transition = "1.25s";
  publish.addEventListener("transitionend", function (e) {
    window.location.href = "listpage.html";
  });
}

  


function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.749933, lng: -73.98633 },
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl:false,
        mapTypeControl: false,

      });

      const card = document.getElementById("pac-card");
      const input = document.getElementById("pac-input");
      const biasInputElement = document.getElementById("use-location-bias");
      const strictBoundsInputElement = document.getElementById("use-strict-bounds");

      const options = {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["geocode"],
      };
      
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);
    

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
        infowindow.open(map, marker);
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
      strictBoundsInputElement.addEventListener("change", () => {
        autocomplete.setOptions({
          strictBounds: strictBoundsInputElement.checked,
        });
    
        if (strictBoundsInputElement.checked) {
          biasInputElement.checked = strictBoundsInputElement.checked;
          autocomplete.bindTo("bounds", map);
        }
        input.value = "";
      });
    
  }
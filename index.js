
function initMap() {
  const input = document.getElementById("pac-input");

  const options = {
    componentRestrictions: { country: "us" },
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["geocode"],
  };
  
  const autocomplete = new google.maps.places.Autocomplete(input, options);
  
  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("locationpad");
  infowindow.setContent(infowindowContent);
  
  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    const place = autocomplete.getPlace();
  
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
  
  
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
  });

  
}

var monthIndex = new Date().getMonth();
var year = new Date().getFullYear();
var flipper= -1;
var hour1=-1;
var hour2=-2;
var time = -1;
var bool = false;
var hour3=0;
var hour4 = 0;
var starter = false;
var ender = false;
var am = "am";
var pm = "am";
var pmchange = false;
var headerswitch = false;

function locationpad(r) {


  if (r == "days"){
    var x = document.getElementById("datepicker");

    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";

        document.getElementById("d").style.borderLeft="1px solid white";
        document.getElementById("days").style.boxShadow= "0 1px 3px 0 rgba(0,0,0,0.2)";
        document.getElementById("days").style.transition= "0.ss";
        //document.getElementById("days").style.backgroundColor="#ebebeb";
      
    } else {
      x.style.display = "none";

        document.getElementById("d").style.borderLeft="1px solid #ebebeb";
        document.getElementById("days").style.boxShadow= null;
        document.getElementById("days").style.transition= "0.6s";
       // document.getElementById("days").style.backgroundColor="#ffffff";
      
    }
  
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


  }else if(r == "guestid"){
    this._close();
    if (!bool) {
      bool = true;
      var x = document.getElementById("tp");

      document.getElementById("input").focus();

    }

    
  }else {
    //alert(window.getComputedStyle(document.getElementById(r)).innerText);
    
    var x = document.getElementById("datepicker");
    document.getElementById("dayscheckin").innerText=(monthIndex+1)+"/"+document.getElementById(r).textContent+'/'+year;
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";

        document.getElementById("d").style.borderLeft="1px solid white";
        document.getElementById("d2").style.borderLeft="1px solid white";
        document.getElementById("days").style.boxShadow= "0 1px 3px 0 rgba(0,0,0,0.2)";
        document.getElementById("days").style.transition= "0.ss";
        //document.getElementById("days").style.backgroundColor="#ebebeb";
      
    } else {
      x.style.display = "none";

        document.getElementById("d").style.borderLeft="1px solid #ebebeb";
        document.getElementById("days").style.boxShadow= null;
        document.getElementById("days").style.transition= "0.6s";
       // document.getElementById("days").style.backgroundColor="#ffffff";
      
    }
  
  }


}

function calbutton(a){
  for (let i =0; i < 40; i++) {
    document.getElementById(i.toString()).innerText = "";
  }
  if (a == 'left'){
    if (monthIndex == 0){
      monthIndex=11;
      year--;
  
    }else{
      monthIndex--;
    }

  }else{
    if (monthIndex == 11){
      monthIndex=0;
      year++;
  
    }else{
      monthIndex++;
    }
  }

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
 
  diff = new Date(year, monthIndex, 1).getDay()-1;
  for (let i =0; i < diff; i++) {
    document.getElementById(i.toString()).innerText = "";
  }
  var stop=0;
  for (let i =1; i < 40; i++) {
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

}

function poolunderline(a) {
  if (a=="pool"){

    headerswitch= true;
    document.getElementById("PoolUnderlineID").style.width ="25px";
    document.getElementById("PoolUnderlineID").style.marginLeft ="7.5px";
    document.getElementById("PoolUnderlineID").style.transition ="0.5s";
    document.getElementById("AmenitiesUnderlineID").style.width ="0px";
    document.getElementById("AmenitiesUnderlineID").style.marginLeft ="50px";
    document.getElementById("AmenitiesUnderlineID").style.transition ="0.4s";
  }else{
    headerswitch= false;
    document.getElementById("PoolUnderlineID").style.width ="0px";
    document.getElementById("PoolUnderlineID").style.marginLeft ="20px";
    document.getElementById("PoolUnderlineID").style.transition ="0.5s";
    document.getElementById("AmenitiesUnderlineID").style.width ="25px";
    document.getElementById("AmenitiesUnderlineID").style.marginLeft ="35px";
   // document.getElementById("AmenitiesUnderlineID").style.left ="15px";
    document.getElementById("AmenitiesUnderlineID").style.transition ="0.4s";
  }

}

function SU_popup() {
  //alert("dd");
  /*document.getElementById("login").style.width ="150px";
  document.getElementById("login").style.height ="max-content";
  document.getElementById("login").style.marginBottom ="100px";
  document.getElementById("login").style.marginLeft ="-100px";
  document.getElementById("login").style.transition ="2.0s";*/
  document.getElementById("container1").style.display="none";

  document.getElementById("body").style.backgroundImage = "url(img/BlurBackground.png)";
  document.getElementById("container1").style.filter="blur(8px)";


}

$.widget('wx.timepicker', {
  _create: function() {
    this.timepicker = $('<div id="tp" class="timepicker"><div class="clock"><div class="face"><div class="time-bubbles"></div><div class="minute hand"></div><div class="hour hand"></div></div><div class="meridiem am bubble">AM</div><div class="meridiem pm bubble">PM</div></div></div>').hide().insertAfter(this.element);
    this.hour = 0;
    this.minute = 0;
    this.meridiem = 0; // 0=am, 1=pm
    this.display = 0; // 0=none, 1=hours, 2=minutes
    this.isOpen = false;
    var self = this;
    
    this.element.prop('autocomplete',false);
    if(self._parseInput()) {
      self._refreshAll();
    }

    this.timepicker.find('.unit.hour').on('click', function() {
      self._buildHours();
    });
    this.timepicker.on('click', '.time.hour', function() {
      self.hour = $(this).data('value');
      self._refreshAll();
    });
    this.element.on('focus click', function() {
      self._open();
    });
    this.timepicker.on('mousedown', function(e) {
      return false;
    });
    this.element.on('blur', function(e) {
      self._parseInput();
      self._refreshInput();
      self._close();
      hour2=-2;
      hour1=-1;
    });
    this.element.on('input', function() {

      if(self._parseInput()) {

        self._refreshClock();
      }

    });
    this.timepicker.find('.done').on('click', function() {
      self.element.focus();
      self._close();
    });
    this.timepicker.find('.meridiem.am').on('click', function() {
      self.meridiem = 0;
      self._ampm();
    });
    this.timepicker.find('.meridiem.pm').on('click', function() {
      self.meridiem = 1;
      self._ampm();
    });
  },
  
  _open: function() {
    if(!this.isOpen) {

      var offset = this.element.offset();
      this.timepicker.css({
        'left':offset.left+'px',
        'top':(offset.top+this.element.outerHeight())+'px'
      }).show();
      this.isOpen = true;
      this._buildHours();
      
      this.meridiem = 0;
      this._ampm();

    }
  },
  
  _close: function() {
    if(this.isOpen) {

      pmchange = false;
      starter= false;
      ender = false;
      flipper=-1;
      hour2=-2;
      hour1=-1;
      hour3=0;
      hour4=0;
      this.timepicker.find('.time.selected').removeClass('selected');
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var bubbles = [];
      for(var hour = 0; hour < 12; ++hour) {
        var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
        var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
        var bubble = $('<div>', {'class': 'time hour bubble'})
        .text(hour == 0 ? 12 : hour)
        .css({
          marginLeft: (x + r - 15) + 'px',
          marginTop: (-y + r - 15) + 'px'
        })
        .data('value', hour);
      

        bubbles.push(bubble);
      }


      this.timepicker.find('.time-bubbles').html(bubbles);


      this.timepicker.hide();
      this.isOpen = false;
   
    }
  },
  
  _refreshAll: function() {

    this._refreshInput();
    this._refreshClock();
  },
  _ampm: function() {

    if(this.meridiem) {

      this.timepicker.find('.meridiem.am').removeClass('selected');
      this.timepicker.find('.meridiem.pm').addClass('selected');
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var bubbles = [];
      if (hour1!=-1 && hour2==-2){
  
        pmchange = true;
        for(var hour = 0; hour < 12; ++hour) {
          var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
          var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
          var bubble = $('<div>', {'class': 'time hour bubble'})
          .text(hour == 0 ? 12 : hour)
          .css({
            marginLeft: (x + r - 15) + 'px',
            marginTop: (-y + r - 15) + 'px'
          })
          .data('value', hour);
          if (hour>=hour1 && hour<12){
            bubble.addClass('selected2');
          }

  
          bubbles.push(bubble);
        }
  
        this.timepicker.find('.time-bubbles').html(bubbles);
        this.timepicker.find('.hour.hand').addClass('selected').appendTo(this.timepicker.find('.face'));
        this.timepicker.find('.hour.unit').addClass('selected');


        if(this.display === 1) {
          this.timepicker.find('.time.hour').filter(function() {
            return $(this).data('value') === 12;
          }).addClass('selected');
        }
        this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
    
        
      }else{
        pmchange = false;
        starter= false;
        ender = false;
        flipper=-1;
        hour2=-2;
        hour1=-1;
        hour3=0;
        hour4=0;
        
        this.timepicker.find('.time.selected').removeClass('selected');
        this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
        var r = this.timepicker.find('.face').width() / 2;
        var j = r - 22;
        var bubbles = [];
        for(var hour = 0; hour < 12; ++hour) {
          var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
          var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
          var bubble = $('<div>', {'class': 'time hour bubble'})
          .text(hour == 0 ? 12 : hour)
          .css({
            marginLeft: (x + r - 15) + 'px',
            marginTop: (-y + r - 15) + 'px'
          })
          .data('value', hour);
  
  
          bubbles.push(bubble);
        }
  
  
        this.timepicker.find('.time-bubbles').html(bubbles);
  
        
      }

    } else {

      pmchange = false;
      starter= false;
      ender = false;
      flipper=-1;
      hour2=-2;
      hour1=-1;
      hour3=0;
      hour4=0;
      this.timepicker.find('.time.selected').removeClass('selected');
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var bubbles = [];
      for(var hour = 0; hour < 12; ++hour) {
        var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
        var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
        var bubble = $('<div>', {'class': 'time hour bubble'})
        .text(hour == 0 ? 12 : hour)
        .css({
          marginLeft: (x + r - 15) + 'px',
          marginTop: (-y + r - 15) + 'px'
        })
        .data('value', hour);


        bubbles.push(bubble);
      }


      this.timepicker.find('.time-bubbles').html(bubbles);
      
      this.timepicker.find('.meridiem.pm').removeClass('selected');
      this.timepicker.find('.meridiem.am').addClass('selected');



    }
  },
  _refreshInput: function() {
    var hour = this.hour === 0 ? 12 : this.hour;


  },
  
  _refreshClock: function() {
    var self = this;

    if (flipper == -1){
      flipper--;
      hour1 =  this.hour;
      if (self.meridiem == 0){
        am = "AM";
      }else{
        am="PM"
      }

      if(this.display === 1) {
        this.timepicker.find('.time.hour').filter(function() {
          return $(this).data('value') === self.hour;
        }).addClass('selected');
      }
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (this.hour / 12 * 360) + 'deg)');
  
    }else if (flipper == -2 && !pmchange ){
      flipper--;
      //this.display = 1;
      
      hour2 = this.hour;
      if (self.meridiem == 1){
        pm = "PM";
      }else{
        pm="AM"
      }
      hour4 = hour1;
      hour3 = hour2;
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var bubbles = [];
      
  
      for(var hour = 0; hour < 12; ++hour) {
        var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
        var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
        var bubble = $('<div>', {'class': 'time hour bubble'})
        .text(hour == 0 ? 12 : hour)
        .css({
          marginLeft: (x + r - 15) + 'px',
          marginTop: (-y + r - 15) + 'px'
        })
        .data('value', hour);
        if ((hour2-hour1) > 0 && !ender){
          //alert("more");
          starter=true;
          if(hour2 != -2 && hour1 == hour && hour1!=hour2 ) {

            hour1++;
            bubble.addClass('selected');
            
            
          }
        }else if ((hour2-hour1) < 1 && !starter){
          ender = true;
          //alert("less");



          if(hour2 != -2 && hour2 == hour && (hour1+1)!=hour2 ) {
            hour2++;
         
            bubble.addClass('selected');

            
          }
        }

        bubbles.push(bubble);
      }
      hour1=hour4;
      hour2=hour3;
      if ((hour2 - hour1) < 0){

        this.element.val(hour2+':'+'00'+":"+am+" "+"-"+" "+hour1+':'+'00'+":"+pm);

      }else{

        this.element.val(hour1+':'+'00'+":"+am+" "+"-"+" "+hour2+':'+'00'+":"+pm);

      }
      this.timepicker.find('.time-bubbles').html(bubbles);
      this.timepicker.find('.hour.hand').addClass('selected').appendTo(this.timepicker.find('.face'));
      this.timepicker.find('.hour.unit').addClass('selected');
      if(this.display === 1) {
        this.timepicker.find('.time.hour').filter(function() {
          return $(this).data('value') === self.hour;
        }).addClass('selected');
      }
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (this.hour / 12 * 360) + 'deg)');
  
    }else if (flipper == -2 && pmchange) {
      flipper--;
      //this.display = 1;
      
      hour2 = this.hour;
      if (self.meridiem == 1){
        pm = "PM";
      }else{
        pm="AM"
      }
      hour4 = hour1;
      hour3 = hour2;
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var h1 = 0;
      var bubbles = [];
      
  
      for(var hour = 0; hour < 12; ++hour) {
        var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
        var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
        var bubble = $('<div>', {'class': 'time hour bubble'})
        .text(hour == 0 ? 12 : hour)
        .css({
          marginLeft: (x + r - 15) + 'px',
          marginTop: (-y + r - 15) + 'px'
        })
        .data('value', hour);
   
        if(hour2 != -2 && h1 == hour && h1<=hour2 ) {

          h1++;
          bubble.addClass('selected');
          
          
        }else if (hour>=hour1 && hour<12){
          bubble.addClass('selected2');
        }

        bubbles.push(bubble);

      }
      



      hour1=hour4;
      hour2=hour3;
      this.element.val(hour1+':'+'00'+":"+am+" "+"-"+" "+hour2+':'+'00'+":"+pm);

      this.timepicker.find('.time-bubbles').html(bubbles);
      this.timepicker.find('.hour.hand').addClass('selected').appendTo(this.timepicker.find('.face'));
      this.timepicker.find('.hour.unit').addClass('selected');

      if(this.display === 1) {
        this.timepicker.find('.time.hour').filter(function() {
          return $(this).data('value') === this.hour;
        }).addClass('selected');
      }
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (this.hour/ 12 * 360) + 'deg)');

      
    
  }else{
      
      pmchange = false;
      starter= false;
      ender = false;
      flipper=-1;
      hour2=-2;
      hour1=-1;
      hour3=0;
      hour4=0;
      this.timepicker.find('.time.selected').removeClass('selected');
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
      var r = this.timepicker.find('.face').width() / 2;
      var j = r - 22;
      var bubbles = [];
      for(var hour = 0; hour < 12; ++hour) {
        var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
        var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
        var bubble = $('<div>', {'class': 'time hour bubble'})
        .text(hour == 0 ? 12 : hour)
        .css({
          marginLeft: (x + r - 15) + 'px',
          marginTop: (-y + r - 15) + 'px'
        })
        .data('value', hour);


        bubbles.push(bubble);
      }


      this.timepicker.find('.time-bubbles').html(bubbles);
      this.timepicker.find('.time.selected').removeClass('selected');
      this.timepicker.find('.hand.hour').css('transform', 'rotate(' + (12/ 12 * 360) + 'deg)');
  
    }
    

    

  },
  
  _parseInput: function() {
    var time = $.trim(this.element.val());
    var match;
    var valid = false;
    this.hour = 0;
    this.minute = 0;
    this.meridiem = 0;
    if(time.length > 0 && (match = /^(\d{1,2})(?::?(\d{2}))?(?: ?([ap])\.?(?:m\.?)?)?$/i.exec(time))) {
      valid = true;
      this.hour = parseInt(match[1]);
      if(match[3] && match[3].toLowerCase() === 'p') {
        this.meridiem = 1;
      }
    }
    if(this.hour >= 12) {
      this.meridiem = 1;
      this.hour = this.hour % 12;
    }
    return valid;
  },


  _buildHours: function() {
    if(this.display === 1) return;
    this.display = 1;
    var r = this.timepicker.find('.face').width() / 2;
    var j = r - 22;
    var bubbles = [];
    

    for(var hour = 0; hour < 12; ++hour) {
      var x = j * Math.sin(Math.PI * 2 * (hour / 12)) * 1.2;
      var y = j * Math.cos(Math.PI * 2 * (hour / 12)) * 1.2;
      var bubble = $('<div>', {'class': 'time hour bubble'})
      .text(hour == 0 ? 12 : hour)
      .css({
        marginLeft: (x + r - 15) + 'px',
        marginTop: (-y + r - 15) + 'px'
      })
      .data('value', hour);
      
      if(hour2 != -2 && hour1 != hour2) {
      
        hour2--;
        bubble.addClass('selected');
        
        
      }
      bubbles.push(bubble);
    }


    this.timepicker.find('.time-bubbles').html(bubbles);
    this.timepicker.find('.hour.hand').addClass('selected').appendTo(this.timepicker.find('.face'));
    this.timepicker.find('.hour.unit').addClass('selected');
  },
  

});

$('#input').timepicker();


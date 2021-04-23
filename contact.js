const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// //subscribe
// const toggleModal = () => {
//     document.querySelector('.modal').classList.toggle('hidden');
//     document.querySelector('.overlay').classList.toggle('hidden');
// }

// document.querySelector('#change').addEventListener('click', toggleModal);
// document.querySelector('.overlay').addEventListener('click', toggleModal);

// document.querySelector('#suscribe-form')
//   .addEventListener('click', (e) => {
//   e.preventDefault();
//   toggleModal();
//   var email = document.getElementById('suscribe-email').value;
//   alert("Congratulation! " + email + " you have been suscribed to our channel.");
// });

// document.querySelector('.modal-close span').addEventListener('click', toggleModal);
// document.querySelector('.overlay').addEventListener('click', toggleModal);

// //End of modal form pop up


function suscribe(){
    alert('Yo have been suscribed! Thank You.');
    const x = document.getElementById('suscribe')
    x.innerHTML = "SUBSCRIBED";
    document.getElementById("suscribe").style.backgroundColor = "grey";

     document.getElementById("suscribe").addEventListener("click", myFunction);
     
    function myFunction() {
      // if (x.innerHTML=="SUBSCRIBED"){
        alert("click ok to unsubscribe");
        location.reload();
      // }
      // else{
      //   suscribe()
      // }
  
        
        // x.innerHTML = "SUBSCRIBE";
        // document.getElementById("suscribe").style.backgroundColor = "red";
        // // setTimeout(suscribe,1000);
        // // setTimeout(myFunction,1000);





        
}

}


// let map;
//         document.addEventListener("DOMContentLoaded", () => {
//             let s = document.createElement("script");
//             document.head.appendChild(s);
//             s.addEventListener("load", () => {
//                 //script has loaded
//                 console.log("script has loaded");
//                 map = new google.maps.Map(document.getElementById("map"), {
//                     center: {
//                         lat: 27.69041308480001,
//                         lng: 85.34429478345714
//                     },
//                     zoom: 16,
//                     mapTypeId: google.maps.MapTypeId.ROADMAP
//                 });
//                 // new google.maps.Marker({
//                 //     position: center,
//                 //     map,
                   
//                 // });
//             });
//             s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCdOqzHLg7cr7Aqd7-rWhjo8nmnXFbI5SY`;
//         });

        function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        }

        function getLocation(){
   
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
            }
            function showPosition(position) {
           
              
              var location = {lat:position.coords.latitude , lng:position.coords.longitude };
          var map = new google.maps.Map(document.getElementById("map"),{
              zoom: 20,
              center: location
          });
          var marker = new google.maps.Marker({
          position: location,
          map:map
      })
      }
      
      }
      //end of find me on map
      
      //integrating map into website through javascript web sdk
      function initMap(){
          var location = {lat:27.69041308480009 , lng:85.34429478335618 };
          var map = new google.maps.Map(document.getElementById("map"),{
              zoom: 20,
              center: location
          });
          var marker = new google.maps.Marker({
          position: location,
          map:map
      })
      }
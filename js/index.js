var button = document.querySelector('.search-button');
var form = document.querySelector('.search-modal');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (form.classList.contains('search-modal-show')) {
    form.classList.remove('search-modal-show');
    form.classList.add('search-modal-hide');
  } else {
    form.classList.remove('search-modal-hide');
    form.classList.add('search-modal-show');
  }
});

var arrivalDate = form.querySelector('[name=arrival-date]');
var departureDate = form.querySelector('[name=departure-date]');
var numberOfAdults = form.querySelector('[name=number-of-adults]');
var numberOfChildren = form.querySelector('[name=number-of-children]');

form.addEventListener('submit', function(evt) {
  var allFields = [arrivalDate, departureDate, numberOfAdults, numberOfChildren];
  var errorFields = [];
  allFields.forEach(function(field) {
    if (!field.value) errorFields.push(field);
  });
  if (errorFields.length > 0) {
    evt.preventDefault();
    errorFields.forEach(function(field) {
      field.classList.remove('field-error');
      field.offsetWidth = field.offsetWidth;
      field.classList.add('field-error');
    });
  }
});

function initMapCallback() {
  // The map, centered at some point near Sedona
  var map = new google.maps.Map(document.querySelector('.map-container'), {
    center: {lat: 34.76, lng: -111.74},
    disableDefaultUI: true,
    zoom: 9
  });
  // The marker, positioned at Sedona
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 34.87, lng: -111.76},
  });
}

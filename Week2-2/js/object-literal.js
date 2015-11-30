var hotel = {
name: 'Sunrise Hotel',
rooms: 100,
booked: 23,
checkAvailability: function(){
	return this.rooms - this.booked;
}};

var elName= document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms= document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
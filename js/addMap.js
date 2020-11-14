function initMap() {
	let uluru = { lat: 53.901364, lng: 27.54525 };

	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: uluru
	});

	let marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'Минск, Короля, 2'
	});
}

window.initMap = initMap;

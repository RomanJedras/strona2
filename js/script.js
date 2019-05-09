'use strict';

const obj = {
	items: []
};

const btn = document.getElementById('button');
const header = document.getElementById('header');
//const number = document.getElementById('number');
header.style.display = 'none';

// interact('.drag-drop')
// .draggable({
// 	inertia: true,
// 	modifiers: [
// 		interact.modifiers.restrict({
// 			restriction: "parent",
// 			endOnly: true,
// 			elementRect: {top: 0, left: 0, bottom: 1, right: 1}
// 		})
// 	],
// 	autoScroll: true,
// 	// dragMoveListener from the dragging demo above
// 	onmove: dragMoveListener,
// 	onend: function (event) {
// 	}
// });

let sqaure = document.querySelector(".t-our-methodology__square");
let playerPick = document.querySelectorAll('.accordianheader');
let accordionItem = document.querySelectorAll('.accordionItemContent');

for(let i =0; i < accordionItem.length; i++) {
	accordionItem[i].classList.add('close');
}

playerPick.forEach(function (item) {
	
	if (item.classList.contains("small")) {
		item.addEventListener("click", function () {
			playerMove('small-' + this.getAttribute('data-show'));
		});
		
	} else {
		
		item.addEventListener("click", function () {
			
			// for(let i =0; i < accordionItem.length; i++) {
			// 	accordionItem[i].classList.replace('open','close');
			// 	accordionItem[i].classList.remove('accordionItem');
			// }
			
			
			this.querySelector('.accordionItemContent').classList.replace('open','close');
			
			let itemClass = this.querySelector('.accordionItemContent').className;
			item.querySelector('.accordionItemContent').classList.add('close');
			if (itemClass === 'accordionItemContent close') {
				item.querySelector('.arrow').classList.replace('fa', 'fas');
				item.querySelector('.arrow').classList.replace('fa-angle-down', 'fa-chevron-up');
				this.querySelector('.accordionItemContent').classList.replace('close','open');
				this.querySelector('.accordionItemContent').classList.add('accordionItem');
				
			}else {
				item.querySelector('.arrow').classList.replace('fas', 'fa');
				item.querySelector('.arrow').classList.replace('fa-chevron-up', 'fa-angle-down');
				this.querySelector('.accordionItemContent').classList.replace('open','close');
				this.querySelector('.accordionItemContent').classList.remove('accordionItem');
			}
			
			if (this.querySelector('span').innerText !== "") {
				sqaure.innerHTML = this.querySelector('span').innerText;
			} else {
				sqaure.innerHTML = '9';
			}
			
			obj.items.push(this.getAttribute('data-show'));
			 playerMove(this.getAttribute('data-show'));
		});
	}
});


function dragMoveListener (event) {
	let target = event.target,
		// keep the dragged position in the data-x/data-y attributes
		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	
	// translate the element
	target.style.webkitTransform =
		target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';
	
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}


const playerMove = function (playerPick) {
	obj.params = playerPick;
	
	for (let i = 0; i < obj.items.length; i++) {
		sqaure.classList.remove(obj.items[i]);
	}
	showModal(playerPick);
};

function showModal(playerPick) {
	sqaure.classList.add(playerPick);
}
(function() {
	window.initMap = function () {
		const mapBox = document.getElementById('map');
		let map = {}, marker = {};
		let mapka = {
			coords: {lat: 51.108914, lng: 17.049870},
			title: "Warszawa Modern building ",
		};
		
		
		function initialize () {
			
			setMap(mapka.coords, 14);
			addMarker(mapka.coords);
		}
		
		google.maps.event.addDomListener(window, 'load', initialize);
		
		function setMap(coords, zoom) {
			map = new google.maps.Map(mapBox, {
				zoom: zoom,
				center: new google.maps.LatLng(coords),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		}
		
		
		function addMarker(location) {
			const image = './images/znacznik.png';
			
			const shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: 'poly'
			};
			
			marker = new google.maps.Marker({
				position: location,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: image,
			    label: 'Agencja interaktywna',
				shape: shape,
				title: 'Agencja interaktywna!'
			});
		};
	}
	
	window.onscroll = function() {scrollFunction()};
	btn.addEventListener('click',function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, '300');
	});
	
	function scrollFunction () {
		
		if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 || header.style.minWidth >= "1200px" ) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
		
		
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			btn.classList.add('show');
			btn.style.display = "block";
		} else {
			btn.classList.remove('show');
			btn.style.display = "none";
		}
	}
})();






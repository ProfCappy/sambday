

Let stars = document.getElementById('stars');
Let moon = document.getElementById('moon');
Let mountain_behind = document.getElementById('mountains_behind');
Let text = document.getElementById('text');
Let btn = document.getElementsByClassName('btn')
Let mountain_front = document.getElementById('mountains_front');


window.addEventListener('scroll', function(){
	Let value = window.scrollY;
	stars.style.left = value + 'px';
})

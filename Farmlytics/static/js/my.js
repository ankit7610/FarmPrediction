// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
	
	if (currentScroll > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
	
	lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ===== SMOOTH SCROLL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href !== '#' && document.querySelector(href)) {
			e.preventDefault();
			const target = document.querySelector(href);
			const offsetTop = target.offsetTop - 80;
			
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
	});
});

// ===== FORM TOGGLE (Original Functionality) =====
if (document.querySelector('.div-toggle')) {
	document.querySelectorAll('.div-toggle').forEach(toggle => {
		toggle.addEventListener('change', function() {
			const target = this.getAttribute('data-target');
			const show = this.options[this.selectedIndex].getAttribute('data-show');
			const targetElement = document.querySelector(target);
			
			if (targetElement) {
				targetElement.querySelectorAll('.collapse').forEach(el => {
					el.classList.add('hide');
				});
				
				if (show) {
					const showElement = document.querySelector(show);
					if (showElement) {
						showElement.classList.remove('hide');
					}
				}
			}
		});
		
		// Trigger change on load
		toggle.dispatchEvent(new Event('change'));
	});
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe feature and service elements for scroll animations
document.querySelectorAll('.features-desc, .single-service').forEach(el => {
	observer.observe(el);
});

// ===== FORM FOCUS EFFECTS =====
const formElements = document.querySelectorAll('input, textarea, select');
formElements.forEach(element => {
	element.addEventListener('focus', function() {
		this.parentElement.classList.add('focused');
	});
	
	element.addEventListener('blur', function() {
		if (this.value === '') {
			this.parentElement.classList.remove('focused');
		}
	});
});

// ===== PAGE LOAD ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
	// Add loaded class to trigger animations
	document.body.classList.add('loaded');
	
	// Animate counters or numbers if present
	const animateValue = (element, start, end, duration) => {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			element.textContent = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};
	
	// Optional: uncomment to use number animation
	// document.querySelectorAll('[data-count]').forEach(el => {
	// 	const count = parseInt(el.getAttribute('data-count'), 10);
	// 	animateValue(el, 0, count, 2000);
	// });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
	let current = '';
	
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= sectionTop - 200) {
			current = section.getAttribute('id');
		}
	});
	
	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href').slice(1) === current) {
			link.classList.add('active');
		}
	});
});

// ===== MOBILE MENU CLOSE ON LINK CLICK =====
const navbarCollapse = document.querySelector('.navbar-collapse');
if (navbarCollapse) {
	const navLinks2 = navbarCollapse.querySelectorAll('.nav-link');
	navLinks2.forEach(link => {
		link.addEventListener('click', () => {
			const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
				toggle: false
			});
			bsCollapse.hide();
		});
	});
}

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				img.classList.remove('lazy');
				imageObserver.unobserve(img);
			}
		});
	});
	
	document.querySelectorAll('img[data-src]').forEach(img => {
		imageObserver.observe(img);
	});
}

// ===== JQUERY LEGACY SUPPORT =====
$(document).on('change', '.div-toggle', function() {
	var target = $(this).data('target');
	var show = $("option:selected", this).data('show');
	$(target).children().addClass('hide');
	$(show).removeClass('hide');
});

$(document).ready(function(){
	$('.div-toggle').trigger('change');
	
	// Smooth animation on page load
	$('body').fadeIn(500);
});
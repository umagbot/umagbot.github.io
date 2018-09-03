// scrollreveal code
window.sr = ScrollReveal();
window.sr = ScrollReveal({ duration: 1500 });
sr.reveal('.u-max-full-width', 50);
// with options
sr.reveal('#bannercaption', {
    origin: 'bottom',
	distance: '300px',
    easing   : 'ease-in-out',
    duration: 750,
	scale: 0.8,
    reset: false
	});

sr.reveal('#chr2', {
    origin: 'top',
	distance: '100px',
    easing: 'ease-in-out',
	scale: 0.8,
    delay: 200,
	reset: true
});
sr.reveal('#chr3', {
    origin: 'right',
	distance: '100px',
    easing   : 'ease-in-out',
	scale: 0.8,
    delay: 400,
	reset: true
	});
sr.reveal('#chr4', {
    origin: 'bottom',
	distance: '100px',
	easing   : 'ease-in-out',
	scale: 0.8,
	delay: 600,
	reset: true
});
	// with options and callback
sr.reveal('#summary', {
    origin: 'top',
	distance: '100px',
    easing   : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	scale: 1.2,
	duration: 1000,
	delay: 100,
	rotate: { x: 90 },
	reset: true,
	afterReveal: afterRevealSummary
});
function afterRevealSummary(e) {
	var b = baffle('#summaryTitle').text(function(currentText) { return 'An Animated Classic'});
	b.reveal(1000);
}
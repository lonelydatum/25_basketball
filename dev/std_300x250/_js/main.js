
TweenLite.defaultEase = Power3.easeOut

function start() {
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	const TIME_SHOOT = 5

	tl.add('player', .3)
	tl.from(".draw_shoot_player", TIME_SHOOT, {x:"+=10", y:"+=230", ease:Power2.easeOut}, 'player')
	tl.from(".draw_shoot_lines", TIME_SHOOT*.9, {x:"+=10", y:"+=230", ease:Power2.easeOut}, 'player')

	tl.add('defend', .5)
	tl.from(".draw_defend_player", TIME_SHOOT, {x:"-=20", y:"+=230", ease:Power2.easeOut}, 'defend')
	tl.from(".draw_defend_lines", TIME_SHOOT*.9, {x:"-=20", y:"+=230", ease:Power2.easeOut}, 'defend')



	const tlText = new TimelineMax()
	
	tlText.from(".t1a", .01, {opacity:0}, "+=.2")
	tlText.from(".t1b", .01, {opacity:0}, "+=.3")
	tlText.from(".t1c", .01, {opacity:0}, "+=.3")
	tlText.from(".t1d", .01, {opacity:0}, "+=.3")

	// tl.add(tlText, .8)


	tl.add("f2", 4)

	// tl.set(".frame2", {opacity:1}, "f2")
	
	tl.to(".frame1", .2, {opacity:0}, "f2")
	tl.to(".frame2", .4, {opacity:1})


	tl.from(".phone", .4, {y:"+=150"})
	tl.from(".illust", .4, {scale:0})

	tl.from(".t2", .3, {opacity:0}, "+=.1")
	tl.from(".cta", .3, {opacity:0}, "+=.5")
	tl.to(".cta", .2, {opacity:0}, "+=2")
	tl.from([".cta2", ".legal"], .4, {opacity:0})
	

	// tl.gotoAndPlay("f2")


}

start()



module.exports = {};


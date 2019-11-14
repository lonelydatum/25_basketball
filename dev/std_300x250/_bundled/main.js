(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

TweenLite.defaultEase = Power3.easeOut;

function start() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var TIME_SHOOT = 1;

	tl.add('player', .3);
	tl.from(".draw_shoot_player", TIME_SHOOT, { x: "+=10", y: "+=230", ease: Power2.easeOut }, 'player');
	tl.from(".draw_shoot_lines", TIME_SHOOT * .9, { x: "+=10", y: "+=230", ease: Power2.easeOut }, 'player');

	tl.add('defend', .5);
	tl.from(".draw_defend_player", TIME_SHOOT, { x: "-=20", y: "+=230", ease: Power2.easeOut }, 'defend');
	tl.from(".draw_defend_lines", TIME_SHOOT * .9, { x: "-=20", y: "+=230", ease: Power2.easeOut }, 'defend');

	tl.add('t1', .8);
	tl.from(".t1a", .01, { opacity: 0 });
	tl.from(".t1b", .01, { opacity: 0 }, "+=.2");
	tl.from(".t1c", .01, { opacity: 0 }, "+=.15");
	tl.from(".t1d", .01, { opacity: 0 }, "+=.15");

	// tl.add("f2", "+=2")

	// tl.set(".frame2", {opacity:1}, "f2")

	tl.to(".frame1", .4, { opacity: 0 }, "+=1.6");
	tl.to(".frame2", .4, { opacity: 1 });

	tl.from(".phone", .4, { y: "+=150" });
	tl.from(".illust", .4, { scale: 0 });

	tl.from(".t2", .4, { opacity: 0 });
	tl.from(".cta", .4, { opacity: 0 });
	tl.from(".legal", .4, { opacity: 0 });

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map

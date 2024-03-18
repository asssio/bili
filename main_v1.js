// ==UserScript==
// @name         b站广告去除
// @namespace    https://github.com/asssio/bili/new/main
// @version      2024-03-04
// @description  去除b站广告
// @author       asssio
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    function exec () {
    let a1 = document.querySelectorAll('svg[class=bili-video-card__info--ad]');
    let b1 = Array.from(a1);

    b1.forEach((c1) => {
        c1.closest('div.bili-video-card').style.display = 'none'
    });

	let a2 = document.querySelectorAll('span.floor-title');
    let b2 = Array.from(a2);

    b2.forEach((c2) => {
        c2.closest('div.floor-single-card').style.display = 'none'
    });

	let a3 = document.querySelectorAll('span.floor-titlebili-live-card__info--living__text');
    let b3 = Array.from(a3);

    b3.forEach((c3) => {
        c3.closest('div.floor-single-cardbili-live-card is-rcmd').style.display = 'none'
    });

	let a4 = document.querySelectorAll('span.bili-live-card__info--living__text');
    let b4 = Array.from(a4);

    b4.forEach((c4) => {
        c4.closest('div.floor-single-cardbili-live-card is-rcmd').style.display = 'none';
	c4.closest('div.bili-live-card is-rcmd').style.visibility = 'hidden'
    });


	let a5 = document.querySelectorAll('.bili-live-card__info--living');
    let b5 = Array.from(a5);

    b5.forEach((c5) => {
        c5.closest('.floor-single-cardbili-live-card is-rcmd').style.display = 'none'
    });

	let a6 = document.querySelectorAll('span.bili-live-card__info--living__text');
    let b6 = Array.from(a6);

    b6.forEach((c6) => {
c6.closest('div.bili-live-card is-rcmd __web-inspector-hide-shortcut__').style.display = 'none'
    });
}

exec();
document.addEventListener('scroll', () => exec());
})();

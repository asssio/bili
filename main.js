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
    let allAdEl = document.querySelectorAll('svg[class=bili-video-card__info--ad]');
    let adArray = Array.from(allAdEl);

    adArray.forEach((ad) => {
        ad.closest('div.bili-video-card').style.display = 'none'
    });

	let allAdE2 = document.querySelectorAll('span.floor-title');
    let adArray2 = Array.from(allAdE2);

    adArray2.forEach((ad1) => {
        ad1.closest('div.floor-single-card').style.display = 'none'
    });
}

exec();
document.addEventListener('scroll', () => exec());
})();

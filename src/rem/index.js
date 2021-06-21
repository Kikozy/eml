(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			// 这里的750 取决于设计稿的宽度
			if (clientWidth >= 1080) {
				docEl.style.fontSize = '100px';
				} else {
					docEl.style.fontSize = (clientWidth / 100) + 'px';
				}
			};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
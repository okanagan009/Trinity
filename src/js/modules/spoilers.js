//==== Модуь работы со спойлерами =======================================================================================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spoilers
Для заголовков слойлеров пишем атрибут data-spoiler
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spoilers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spoilers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoiler
*/
export let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
export let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
export let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

const spoilers = () => {
	const spoilersArray = document.querySelectorAll('[data-spoilers]');
	if (spoilersArray.length > 0) {
		// Получение обычных слойлеров
		const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
			return !item.dataset.spoilers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spoilersRegular.length > 0) {
			initSpoilers(spoilersRegular);
		}
		// Получение слойлеров с медиа запросами
		const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
			return item.dataset.spoilers.split(",")[0];
		});
		// Инициализация слойлеров с медиа запросами
		if (spoilersMedia.length > 0) {
			const breakpointsArray = [];
			spoilersMedia.forEach(item => {
				const params = item.dataset.spoilers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});
			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const spoilersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addEventListener("change", function () {
					initSpoilers(spoilersArray, matchMedia);
				});
				initSpoilers(spoilersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpoilers(spoilersArray, matchMedia = false) {
			spoilersArray.forEach(spoilersBlock => {
				spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
				if (matchMedia.matches || !matchMedia) {
					spoilersBlock.classList.add('_spoiler-init');
					initSpoilerBody(spoilersBlock);
					spoilersBlock.addEventListener("click", setSpoilerAction);
				} else {
					spoilersBlock.classList.remove('_spoiler-init');
					initSpoilerBody(spoilersBlock, false);
					spoilersBlock.removeEventListener("click", setSpoilerAction);
				}
			});
		}
		// Работа с контентом
		function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
			const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
			if (spoilerTitles.length > 0) {
				spoilerTitles.forEach(spoilerTitle => {
					if (hideSpoilerBody) {
						spoilerTitle.removeAttribute('tabindex');
						if (!spoilerTitle.classList.contains('_spoiler-active')) {
							spoilerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spoilerTitle.setAttribute('tabindex', '-1');
						spoilerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpoilerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
				const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
				const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
				const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
				if (!spoilersBlock.querySelectorAll('._slide').length) {
					if (oneSpoiler && !spoilerTitle.classList.contains('_spoiler-active')) {
						hideSpoilersBody(spoilersBlock);
					}
					spoilerTitle.classList.toggle('_spoiler-active');
					_slideToggle(spoilerTitle.nextElementSibling, 500);
				}
				e.preventDefault();
			}
		}
		function hideSpoilersBody(spoilersBlock) {
			const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._spoiler-active');
			if (spoilerActiveTitle) {
				spoilerActiveTitle.classList.remove('_spoiler-active');
				_slideUp(spoilerActiveTitle.nextElementSibling, 500);
			}
		}
	}
}

export default spoilers;
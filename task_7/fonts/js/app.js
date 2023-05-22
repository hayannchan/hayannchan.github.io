window.addEventListener('scroll', e=> {
	/* обратные кавычки для норм вставки переменных*/
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
	/* += для того чтобы добавлять стили к уже имеющимся */
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create ({
	wrapper: '.wrapper',
	content: '.content'
})

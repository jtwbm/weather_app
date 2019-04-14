(function() {
	let app = new Vue({
		el: '#weatherApp',
		data: {
			day: 'Понедельник',
			date: '12 ноября',
			time: '11:32',
			title: 'Сильный дождь, гроза',
			weather: [
				{
					caption: 'Температура',
					value: 20,
					suffix: '°С'
				},
				{
					caption: 'Скорость ветра',
					value: 2,
					suffix: 'м/с'
				},
				{
					caption: 'Влажность воздуха',
					value: 83,
					suffix: '%'
				}
			],
			appBg: {
				start: '#5d5e78',
				finish: '#d5788a'
			}
		},
		mounted() {
			document.body.style.background = `linear-gradient(to bottom, ${ this.appBg.start }, ${ this.appBg.finish })`;
			
		}
	});
})();
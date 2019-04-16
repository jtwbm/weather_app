(function () {
  let app = new Vue({
    el: '#weatherApp',
    data: {
      day: 'Понедельник',
      date: '12 ноября',
      time: '11:32',
      activeSlide: 0,
      weatherTitle: 'Сильный дождь, гроза',
      moonTitle: 'Убывающая луна',
      weather: [
        {
          caption: 'Температура',
          value: 20,
          suffix: '°С'
        },
        {
          caption: 'Ощущается как',
          value: 21,
          suffix: '°С'
        },
        {
          caption: 'Скорость ветра',
          value: 2,
          suffix: 'м/с'
        },
        {
          caption: 'Давление',
          value: 745,
          suffix: 'мм рт. ст.'
        },
        {
          caption: 'Влажность воздуха',
          value: 83,
          suffix: '%'
        }
      ],
      moon: [
      	{
      		caption: 'Восход',
          	value: '04:38'
      	},
      	{
      		caption: 'Закат',
          	value: '20:31'
      	},
      	{
      		caption: 'Номер недели',
          	value: 15
      	}
      ],
      appBg: {
        start: '#5d5e78',
        finish: '#d5788a'
      }
    },
    mounted () {
      document.body.style.background = `linear-gradient(to bottom, ${this.appBg.start}, ${this.appBg.finish})`
    }
  })
})()

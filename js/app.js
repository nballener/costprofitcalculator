window.addEventListener('load', function () {

  Vue.component('app-title', {
    props: ['title'],
    template: '\
    <div id="app-title">\
      <h1>{{ title }}</h1>\
    </div>\
    ',
  })

  var app = new Vue({
    el: '#app',
    data: {
      app: {
        title: 'Cost Profit Calculator'
      },
      cost: 100,
      percent: 25
    },
    computed: {
      salePrice: function () {
        return this.cost * (1 + this.percent / 100)
      }
    },
    methods: {
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})

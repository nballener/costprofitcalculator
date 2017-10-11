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
      cost: 0
    },
    computed: {
      profit: 0
    },
    methods: {
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})

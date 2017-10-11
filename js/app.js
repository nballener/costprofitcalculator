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
      percent: 25,
      sellingPrice: 125
    },
    watch: {
      percent: function (newPercent) {
        this.getSellingPrice()
      },
      sellingPrice: function (newSellingPrice) {
        this.getPercent()
      }
    },
    methods: {
      getSellingPrice: _.debounce(
        function () {
          rawSellingPrice = this.cost * (1 + (this.percent / 100))
          this.sellingPrice = numeral(rawSellingPrice).format('0.00')
        },
        500
      ),
      getPercent: _.debounce(
        function () {
          rawPercent = (this.sellingPrice / this.cost - 1) * 100
          this.percent = numeral(rawPercent).format('0.00')
        },
        500
      ),
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})

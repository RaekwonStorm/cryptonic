// cryptonic.controller('ChartCtrl', function ($scope) {

//    $(function() {

//     var gaugeOptions = {

//         chart: {
//             type: 'solidgauge'
//         },

//         title: null,

//         pane: {
//             center: ['50%', '85%'],
//             size: '150%',
//             startAngle: -90,
//             endAngle: 90,
//             background: {
//                 backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
//                 innerRadius: '60%',
//                 outerRadius: '100%',
//                 shape: 'arc'
//             }
//         },

//         tooltip: {
//             enabled: false
//         },

//         // the value axis
//         yAxis: {
//             stops: [
//                 [0.05, '#DF5353'], // red
//                 [0.3, '#DDDF0D'], // yellow
//                 [0.9, '#55BF3B'] // green
//             ],
//             lineWidth: 0,
//             minorTickInterval: null,
//             tickAmount: 2,
//             title: {
//                 y: -70
//             },
//             labels: {
//                 y: 16
//             }
//         },

//         plotOptions: {
//             solidgauge: {
//                 dataLabels: {
//                     y: 5,
//                     borderWidth: 0,
//                     useHTML: true
//                 }
//             }
//         }
//     };

//     // The profit gauge
//     $('#container-profit').highcharts(Highcharts.merge(gaugeOptions, {
//         yAxis: {
//             min: 0,
//             max: 100,
//             title: {
//                 text: 'profit'
//             }
//         },

//         exporting: {
//             enabled: false
//         },

//         credits: {
//             enabled: false
//         },

//         series: [{
//             name: 'profit',
//             data: [34],
//             dataLabels: {
//                 format: '<div style="text-align:center"><span style="font-size:25px;color:' +
//                     ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
//                     '<span style="font-size:12px;color:silver">bps</span></div>'
//             }
//         }]

//     }));

//     $.getJSON('https://api.coindesk.com/v1/bpi/historical/close.json',
//         function(data) {



//             data = data.bpi;

//             var data_arr_bitcoin = [];

//             for (var key in data) {
//                 var index = key.split('-');
//                 index = new Date(index[0], index[1] - 1, index[2]);
//                 index = index.getTime();
//                 data_arr_bitcoin.push([index, data[key]])
//             }

//             // Create the price chart
//             var priceGraph = function(id, datafile) {

//                 $(id).highcharts('StockChart', {


//                     rangeSelector: {
//                         enabled: false
//                     },
//                     credits: {
//                         enabled: false
//                     },
//                     scrollbar: {
//                         enabled: false
//                     },
//                     navigator: {
//                         enabled: false
//                     },

//                     navigation: {
//                         buttonOptions: {
//                             enabled: false
//                         }
//                     },

//                     title: {
//                         enabled: false
//                     },

//                     series: [{
//                         name: 'BTC Price',
//                         data: datafile,
//                         type: 'area',
//                         threshold: null,
//                         tooltip: {
//                             valueDecimals: 2
//                         },
//                         fillColor: {
//                             linearGradient: {
//                                 x1: 0,
//                                 y1: 0,
//                                 x2: 0,
//                                 y2: 1
//                             },
//                             stops: [
//                                 [0, Highcharts.getOptions().colors[0]],
//                                 [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//                             ]
//                         }
//                     }]
//                 });
//             }
//             $.get("http://localhost:3000/scraper", function(data){
//                 priceGraph('#container-ethereum', data);
//             });

//             priceGraph('#container-bitcoin', data_arr_bitcoin);


//         })

// });

// })



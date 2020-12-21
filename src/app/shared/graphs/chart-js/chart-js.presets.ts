
export const presets = {
  line: {
    dataset:{
      pointBorderColor: '#fff',
      pointRadius: 4,
      borderColor: 'rgba(0,0,0,0.15)',
      pointBorderWidth: 1,
    },
    options:   {
      responsive: true,
      tooltips: {
        mode: 'label'
      },
      hover: {
        mode: 'dataset'
      },
      legend: {
        display: false
      },
      scales: {
        gridLines:{
          color: 'rgba(192,192,192,0.1)'
        },
        xAxes: [{
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Value'
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          }
        }]
      }
    }
  },
  
  
  radar: {
    dataset:{},
    options:   {
      legend: {
        display: false
      },
      
      scale: {
        reverse: false,
        lineWidth: 0,
        gridLines:{
          color: 'rgba(192,192,192,0.1)'
        },
        ticks: {
          display: false
        }
      }
    }
  },
  
  
  polarArea: {
    dataset:{},
    options: {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: false        
      },
      scale: {
        gridLines:{
          color: 'rgba(192,192,192,0.1)'
        },
        ticks: {
          beginAtZero: true
        },
        reverse: false
      },
      animateRotate:false
    }
  },
  
  
  bar:{
    dataset:{
      borderWifth: 2
    },
    options:{
      scales: {
        xAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          }
        }],
        yAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true
    }
  },
  
  
  doughnut: {
    dataset:{},
    options:  {
      scales: {
        xAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          }
        }],
        yAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          }
        }]
      },
      responsive: true,
      legend: {
        display: false
      }
    }
  },
    
  pie: {
    dataset:{},
    options:  {
      scales: {
        // xAxes: [{
        //   gridLines:{
        //     color: 'rgba(192,192,192,0.1)'
        //   }
        // }],
        // yAxes: [{
        //   gridLines:{
        //     color: 'rgba(192,192,192,0.1)'
        //   }
        // }]
      },
      legend: {
        display: false
      },
      responsive: true
    }
  },
  member_chart1: {
    dataset:{},
    options:  {
      scales: {
        xAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          },
          display: false,
          scaleLabel: {
            show: false
          }
        }],
        yAxes: [{
          gridLines:{
            color: 'rgba(192,192,192,0.1)'
          },
          display: false
        }]
      },
      legend: {
        display: true,
        labels : {
          boxWidth: 20
        }
      },
      responsive: true
      ,
      title: {
        display: true,
        text: "[구성원 통계]",
        position : 'bottom',
        fontSize : 13,
        fontStyle: 'normal',
        fontColor: 'black'
      }
    }
  }
};

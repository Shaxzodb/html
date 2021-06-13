new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'diag2',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2000', value: 25 ,users:600},
      { year: '2009', value: 100 ,users:300},
      { year: '2010', value: 900 ,users:200},
      { year: '2011', value: 590 ,users:1070},
      { year: '2012', value: 20,users:100 }
    ],
    
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','users'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Tashrif Buyuruvchilar'],
    lineColors:['blue','red'],
   
    lineWidth:'10px',
    // pointSize:'30px',
    
    axes:'false',
    

    
  });
new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'diag',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2000', value: 200 ,users:600},
      { year: '2009', value: 1000 ,users:300},
      { year: '2010', value: 1000 ,users:200},
      { year: '2011', value: 500 ,users:1070},
      { year: '2012', value: 200,users:100 }
    ],
    
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','users'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Tashrif Buyuruvchilar'],
    lineColors:['blue','red'],
   
    lineWidth:'10px',
    // pointSize:'30px',
    
    axes:'false',
    

    
  });
  new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'diag1',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { label: 'alo', value: 25 },
      { label: 'yaxshi', value: 100 },
      { label: 'yomon emas', value: 900 },
      { label: 'zur', value: 590 },
      { label: 'past', value: 20}
    ],
    
    // The name of the data record attribute that contains x-values.
    xkey: 'label',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','users'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Tashrif Buyuruvchilar'],
    colors:['#0f0f0f','red','#fff','black','blue'],
   
    lineWidth:'10px',
    // pointSize:'30px',
    
    axes:'false',
    formatter:function (x) { return x + "bal" }
    

    
  });
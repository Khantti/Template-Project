// Google Charts
// Chart JS

$(document).ready(function(){

    // Start Left Side Bar
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
    // End Left Side Bar

    // Start User Permission 
    $('.form-check-input').change(function(){

        if($(this).is(":checked")){
            $(this).parent().parent().find('i').addClass('fa-lock-open');
            $(this).parent().parent().find('i').removeClass('fa-lock');
        }else{
            $(this).parent().parent().find('i').removeClass('fa-lock-open');
            $(this).parent().parent().find('i').addClass('fa-lock');
        }

    });

    // End User Permission 

    // Start Quick Sales & Customer Activities
    $( "#datepicker" ).datepicker({
        numberOfMonths: 3
    });
    // End Quick Sales & Customer Activities
});
// JavaScript Area

// Start Viewer Report
google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Other', 'Male', 'Female'],
          ['Canis Major Dwarf', 8000, 23.3],
          ['Sagittarius Dwarf', 24000, 4.5],
          ['Ursa Major II Dwarf', 30000, 14.3],
          ['Lg. Magellanic Cloud', 50000, 0.9]
        ]);

        var materialOptions = {
          width: 800,
          chart: {
            title: 'Viewer Report',
            subtitle: 'based on a scale of 1 to 10'
          },
          series: {
            0: { axis: 'Male' }, 
            1: { axis: 'Female' }
          },
          axes: {
            y: {
              distance: {label: 'parsecs'}, // Left y-axis.
              brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
            }
          }
        };

        var classicOptions = {
          width: 800,
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          title: 'Nearby galaxies - distance on the left, brightness on the right',
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'parsecs'},
            1: {title: 'apparent magnitude'}
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
          button.innerText = 'Change to Male Report';
          button.onclick = drawClassicChart;
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.ColumnChart(chartDiv);
          classicChart.draw(data, classicOptions);
          button.innerText = 'Change to Female Report';
          button.onclick = drawMaterialChart;
        }

        drawMaterialChart();
    }; 
// End Viewer Report 

// Start Sale Analysis
const getchart = document.getElementById('mycharts');
new Chart(getchart,{
    type: 'doughnut',
    data:{
        labels: ['Cash','Visa','MPU'],
        datasets: [{
            data: [10, 20, 30]
        }]       
    }
    }
);
// End Sale Analysis
// Start Footer
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;
// End Footer


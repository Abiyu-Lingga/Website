// chart code
const data = {
    labels: ['Info Umum', 'Kinerja', 'Benchmark', 'Memori', 'Fitur', 'Grafis Terintegrasi'],
    datasets: [
        {
            label: 'Dataset A',
            data: [50, 60, 70, 40, 60, 30],
            backgroundColor: 'rgba(114, 75, 196, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            order: 1
        },
        {
            label: 'Dataset B',
            data: [80, 90, 100, 100, 80, 50],
            backgroundColor: 'rgba(229, 101, 55, 75%)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            order: 2
        },
        {
            label: 'Dataset C',
            data: [70, 80, 90, 50, 70, 40],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            order: 3
        }
    ]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins : {
            legend: {
                display: false
            }
        },
        Element: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.3)',
                },
                ticks: {
                    backdropColor: 'transparent',
                    display: false
                },
                grid: {
                    circular: true,
                    color: 'rgba(0,0,0,0.15)'
                },
                pointLabels: {
                    display: true,
                    padding: 10,
                    font: {
                        size: 14
                    },
                    callback: function(label) {
                        return label;
                    }
                },
                suggestedMin: 0,
                suggestedMax: 100
            }

        }
    }
};

let myChart = new Chart(
    document.getElementById('myChart'),
    config
);

//urutan graphic
document.getElementById('button1').addEventListener('click', () => {
    
        data.datasets[0].order = 0; // Mengubah order dari Dataset A
        data.datasets[1].order = 1;
        data.datasets[2].order = 2; 
    
    myChart.update(); 
});

document.getElementById('button2').addEventListener('click', () => {

        data.datasets[0].order = 1; 
        data.datasets[1].order = 0;
        data.datasets[2].order = 3;

    myChart.update(); 
});

document.getElementById('button3').addEventListener('click', () => {

        data.datasets[0].order = 1; 
        data.datasets[1].order = 2;
        data.datasets[2].order = 0;

    myChart.update(); 
});

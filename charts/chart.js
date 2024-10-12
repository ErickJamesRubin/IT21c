class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }

    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            this.chartData = await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    createCharts() {
        // This method will be overridden in subclasses
        throw new Error('createCharts() must be implemented in subclasses');
    }
}

class LineChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.areaCtx = document.getElementById('areaChart');
    }   

    createCharts() {
        this.createAreaChart();
    }

    createAreaChart() {
        new Chart(this.areaCtx, {
            type: 'line',
            data: {
                labels: this.chartData.labels,
                datasets: [{
                    label: '# of Debts',
                    data: this.chartData.data,
                    borderColor: 'rgba(rgba(255, 165, 0, 0.5)',
                    backgroundColor: 'rgba(255, 255, 0, 0.2)',
                    fill: true,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

const lineChartCreator = new LineChart('data.json');
lineChartCreator.init();

const barChartCreator = new BarChart('data.json');
barChartCreator.init();

console.log(lineChartCreator.dataUrl);
console.log(barChartCreator.dataUrl);
export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [50, 180, 70, 120, 90, 50, 200],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#1D2329",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    tickAmount: 4,
    labels: {
      show: true,
      style: {
        colors: "#1D2329",
        fontSize: "12px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: '#F2F2F2',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    colors: '#5388D899'
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "30px",
    },
  },
};
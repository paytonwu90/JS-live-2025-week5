async function renderChart(c3, data) {
  // 從 data 中根據 area 分組，並計算每個分組的數量
  const areaCount = data.reduce((acc, ticket) => {
    if (acc[ticket.area]) {
      acc[ticket.area]++;
    } else {
      acc[ticket.area] = 1;
    }
    return acc;
  }, {});

  // 將 areaCount 轉換為 c3 所需的格式
  const chartColumns = Object.entries(areaCount).map(([area, count]) => [area, count]);

  // chartColumns 排序，台北>台中>高雄
  chartColumns.sort((a, b) => {
    if (a[0] === '台北') return -1;
    if (b[0] === '台北') return 1;
    if (a[0] === '台中') return -1;
    if (b[0] === '台中') return 1;
    if (a[0] === '高雄') return -1;
    if (b[0] === '高雄') return 1;
    return 0;
  });

  const chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: chartColumns,
      type : 'donut',
    },
    size: {
      width: 162,
      height: 192
    },
    color: {
      pattern: ['#26C0C7', '#5151D3', '#E68618']
    },
    donut: {
      title: '套票地區比重',
      width: 10,
      label: {
        show: false
      }
    }
  });
}

export { renderChart };

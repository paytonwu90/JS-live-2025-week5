let data = [];

async function fetchAndStoreData(axios) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    data = response.data.data;
    return data;
  } catch (error) {
    console.log('Failed to fetch data:', error);
    throw error;
  }
}
    
// 導出一個獲取數據的函數，而不是直接導出數據
async function getData(axios) {
  if (data.length === 0) {
    await fetchAndStoreData(axios);
  }
  return [...data]; // 返回副本以避免外部修改
}


function addNewTicket(ticketData) {
  const newTicket = {
    id: data.length,
    name: ticketData.ticketName,
    imgUrl: ticketData.ticketImgUrl,
    area: ticketData.ticketRegion,
    description: ticketData.ticketDescription,
    group: Number(ticketData.ticketNum),
    price: Number(ticketData.ticketPrice),
    rate: Number(ticketData.ticketRate),
  };
  data.push(newTicket);
  return data;
}

function filterTickets(region) {
  if (region === '全部地區') return data;
  return data.filter(ticket => ticket.area === region);
}




export { getData, addNewTicket, filterTickets };

const data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

// 方便測試用
const newData = [
  {
    "id": 3,
    "name": "高雄愛河夜遊浪漫2日",
    "imgUrl": "https://images.unsplash.com/photo-1557973557-ddfa9ee8c5bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    "area": "高雄",
    "description": "夜遊愛河，欣賞兩岸燈光秀，體驗高雄港都的浪漫風情。",
    "group": 45,
    "price": 1899,
    "rate": 8
  },
  {
    "id": 4,
    "name": "台北101觀景台門票",
    "imgUrl": "https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    "area": "台北",
    "description": "登上台北101觀景台，360度俯瞰台北市全景，感受城市天際線的壯觀。",
    "group": 120,
    "price": 600,
    "rate": 9
  },
  {
    "id": 5,
    "name": "台中彩虹眷村半日遊",
    "imgUrl": "https://images.unsplash.com/photo-1705312390462-bca179021d0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUU1JUJEJUE5JUU4JTk5JUI5JUU3JTlDJUI3JUU2JTlEJTkxfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    "area": "台中",
    "description": "走訪充滿童趣的彩虹眷村，感受繽紛彩繪與懷舊建築的完美結合。",
    "group": 35,
    "price": 350,
    "rate": 8
  },
  {
    "id": 6,
    "name": "高雄西子灣夕陽遊",
    "imgUrl": "https://bobbyfun.tw/wp-content/uploads/pixnet/b39465f48bf4952e315c1d0500da8b5f.jpg",
    "area": "高雄",
    "description": "在西子灣欣賞全台最美夕陽，品嚐在地海鮮美食。",
    "group": 28,
    "price": 1200,
    "rate": 7
  },
  {
    "id": 7,
    "name": "台北故宮博物院門票",
    "imgUrl": "https://ak-d.tripcdn.com/images/fd/tg/g4/M01/72/7D/CggYHFY7F7iAF6-bAAtq3wFHDJY069.jpg",
    "area": "台北",
    "description": "探索中華文化瑰寶，欣賞故宮博物院豐富的文物收藏。",
    "group": 75,
    "price": 350,
    "rate": 9
  }
];


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




export { data, addNewTicket, filterTickets };

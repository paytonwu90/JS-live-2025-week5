import { getData, addNewTicket, filterTickets } from './data.js';
import { renderTicketCardArea, checkIsFormValid, getFormData, resetForm } from './dom.js';
import { testData } from './testData.js';


function initEventListeners() {
  // 監聽地區篩選選單
  const regionSelect = document.querySelector('.regionSearch');
  regionSelect.addEventListener('change', handleRegionChange);

  function handleRegionChange() {
    const selectedRegion = regionSelect.value;
    const filteredData = filterTickets(selectedRegion);
    renderTicketCardArea(filteredData);
  }


  // 監聽新增套票按鈕
  const addTicketBtn = document.querySelector('.addTicket-btn');
  addTicketBtn.addEventListener('click', handleAddTicketClick);

  function handleAddTicketClick() {
    // 檢查必填欄位
    if (!checkIsFormValid()) {
      return;
    }

    const formData = getFormData();
    const data = addNewTicket(formData);
    renderTicketCardArea(data);
    resetForm();
    regionSelect.value = '全部地區';

    alert('新增套票成功');
  }


  const autoFillTicketBtn = document.querySelector('.autoFillTicket-btn');
  autoFillTicketBtn.addEventListener('click', handleAutoFillForm);

  // 測試用，自動從 testData 裡的陣列隨機取出一筆物件，並將資料填入表單
  function handleAutoFillForm() {
    const randomTicket = testData[Math.floor(Math.random() * testData.length)];
    document.querySelector('#ticketName').value = randomTicket.name;
    document.querySelector('#ticketImgUrl').value = randomTicket.imgUrl;
    document.querySelector('#ticketRegion').value = randomTicket.area;
    document.querySelector('#ticketPrice').value = randomTicket.price;
    document.querySelector('#ticketNum').value = randomTicket.group;
    document.querySelector('#ticketRate').value = randomTicket.rate;
    document.querySelector('#ticketDescription').value = randomTicket.description;
  }
}


// 初始化應用程式
async function initApp() {
  const data = await getData(axios);
  renderTicketCardArea(data);
  initEventListeners();
}


// 當 DOM 載入完成後初始化應用程式
document.addEventListener('DOMContentLoaded', initApp);


import { getData, addNewTicket, filterTickets } from './data.js';
import { renderTicketCardArea, getFormData, resetForm } from './dom.js';


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
    const formData = getFormData();
    const { ticketName, ticketImgUrl, ticketRegion, ticketPrice, ticketNum, ticketRate, ticketDescription } = formData;
    
    if (ticketName === '' || ticketImgUrl === '' || ticketRegion === '' || ticketPrice === '' || ticketNum === '' || ticketRate === '' || ticketDescription === '') {
      alert('請填寫所有必填欄位');
      return;
    }

    const data = addNewTicket(formData);
    renderTicketCardArea(data);
    resetForm();
    regionSelect.value = '全部地區';

    alert('新增套票成功');
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


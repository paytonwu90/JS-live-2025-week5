import { data, addNewTicket, filterTickets } from './data.js';
import { renderTicketCardArea, getFormData, resetForm } from './dom.js';


renderTicketCardArea(data);


// 監聽地區篩選選單
const regionSelect = document.querySelector('.regionSearch');
regionSelect.addEventListener('change', function() {
  const selectedRegion = regionSelect.value;
  const filteredData = filterTickets(selectedRegion);
  renderTicketCardArea(filteredData);
});


// 監聽新增套票按鈕
const addTicketBtn = document.querySelector('.addTicket-btn');

addTicketBtn.addEventListener('click', function() {
  const formData = getFormData();
  const { ticketName, ticketImgUrl, ticketRegion, ticketPrice, ticketNum, ticketRate, ticketDescription } = formData;
  
  if (ticketName === '' || ticketImgUrl === '' || ticketRegion === '' || ticketPrice === '' || ticketNum === '' || ticketRate === '' || ticketDescription === '') {
    alert('請填寫所有必填欄位');
    return;
  }

  addNewTicket(formData);
  renderTicketCardArea(data);
  resetForm();
  regionSelect.value = '全部地區';

  alert('新增套票成功');
});



/* 
(v)  地區用 change 監聽
(v)  上方新增的地區跟下方篩選的地區都寫死選項（依照目前提供的 JSON data area 欄位）
(v)  地區的篩選下拉需要加上『全部地區』option
(v)  不需要有「清除資料」的按鈕
(v)  預設資料為 3 筆（內容需依照目前提供的 JSON data）
(v)  篩選後會顯示『搜尋資料為 ? 筆』
(v)  描述欄位使用 textarea
(v)  星級區間是 1-10 分
(v)  金額、組數、星級的 type 為 Number
*/


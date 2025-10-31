function renderTicketCardArea(data) {
  const ticketCardList = document.querySelector('.ticketCard-area');
  const searchResultText = document.querySelector('#searchResult-text');
  let htmlStr = '';

  data.forEach(function(ticket) {
    htmlStr += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${ticket.imgUrl}" alt="${ticket.name}">
          </a>
          <div class="ticketCard-region">${ticket.area}</div>
          <div class="ticketCard-rank">${ticket.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${ticket.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${ticket.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${ticket.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${ticket.price}</span>
            </p>
          </div>
        </div>
      </li>`;
  });
  ticketCardList.innerHTML = htmlStr;

  searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
}

function checkIsFormValid() {
  const pass = [];

  // 遍歷表單中的 .addTicket-input 元素，檢查每個輸入框的值是否有填寫
  const inputItems = document.querySelectorAll('.addTicket-input');
  inputItems.forEach(item => {
    if (item.lastElementChild.value === '' || item.lastElementChild.value < 0) {
      item.nextElementSibling.style.display = "flex";
    } else {
      if (
        item.lastElementChild.id === "ticketRate" &&
        item.lastElementChild.value > 10 ||
        item.lastElementChild.value < 1
      ) {
        item.nextElementSibling.style.display = "flex";
        return;
      }
      item.nextElementSibling.style.display = "none";
      pass.push(true);
    }
  });

  return pass.length === inputItems.length;
}

function getFormData() {
  const ticketName = document.querySelector('#ticketName').value;
  const ticketImgUrl = document.querySelector('#ticketImgUrl').value;
  const ticketRegion = document.querySelector('#ticketRegion').value;
  const ticketPrice = document.querySelector('#ticketPrice').value;
  const ticketNum = document.querySelector('#ticketNum').value;
  const ticketRate = document.querySelector('#ticketRate').value;
  const ticketDescription = document.querySelector('#ticketDescription').value;

  return {
    name: ticketName,
    imgUrl: ticketImgUrl,
    area: ticketRegion,
    description: ticketDescription,
    group: Number(ticketNum),
    price: Number(ticketPrice),
    rate: Number(ticketRate)
  };
}

function resetForm() {
  const form = document.querySelector('.addTicket-form');
  form.reset();
}



export { renderTicketCardArea, checkIsFormValid, getFormData, resetForm };

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


function getFormData() {
  const ticketName = document.querySelector('#ticketName').value;
  const ticketImgUrl = document.querySelector('#ticketImgUrl').value;
  const ticketRegion = document.querySelector('#ticketRegion').value;
  const ticketPrice = document.querySelector('#ticketPrice').value;
  const ticketNum = document.querySelector('#ticketNum').value;
  const ticketRate = document.querySelector('#ticketRate').value;
  const ticketDescription = document.querySelector('#ticketDescription').value;

  return {
    ticketName,
    ticketImgUrl,
    ticketRegion,
    ticketDescription,
    ticketNum,
    ticketPrice,
    ticketRate,
  };
}

function resetForm() {
  const form = document.querySelector('.addTicket-form');
  form.reset();
}



export { renderTicketCardArea, getFormData, resetForm };

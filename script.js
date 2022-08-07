const listWrapper = document.querySelector(".user-container");
const paginationBtns = document.getElementById("paginationBtns");
const dataURL =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
let currentPage = 1;
let dataPerPage = 10;

const displayData = (items, wrapper, itemsPerPage, page) => {
  listWrapper.innerHTML = "";
  page--;

  let startIndex = itemsPerPage * page;
  let endIndex = startIndex + itemsPerPage;
  let paginatedData = items.slice(startIndex, endIndex);
  paginatedData.forEach((data) => {
    let listItem = `<li class="userInfo-card">
    <h3>Name: <span>${data.name}</span></h3>
    <p>Email: <span>${data.email}</span></p>
</li>`;
    wrapper.innerHTML += listItem;
  });
};

const createPageBtns = (pageNo, items) => {
  let pageBtn = document.createElement("button");
  pageBtn.classList.add("pageBtns");
  pageBtn.innerText = pageNo;
  if (currentPage === pageNo) pageBtn.classList.add("active");

  pageBtn.addEventListener("click", () => {
    currentPage = pageNo;
    displayData(items, listWrapper, dataPerPage, currentPage);

    let currentbtn = document.querySelector(".active");

    currentbtn.classList.remove("active");

    pageBtn.classList.add("active");
  });
  return pageBtn;
};

const createPagination = (items, wrapper, itemsPerPage) => {
  wrapper.innerHTML = "";
  let noOfPages = Math.ceil(items.length / itemsPerPage);
  for (let i = 1; i < noOfPages + 1; i++) {
    let pageBtn = createPageBtns(i, items);
    wrapper.appendChild(pageBtn);
  }
};

const fetchData = () => {
  fetch(dataURL)
    .then((response) => response.json())
    .then((data) => {
      displayData(data, listWrapper, dataPerPage, currentPage);
      createPagination(data, paginationBtns, dataPerPage);
    });
};

fetchData();

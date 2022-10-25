// ---------------- menu item dynamic click action -------------
const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    menuItem.forEach((a) => {
      a.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// ------------- Credit card dynamic click action ----------------
const creditCard = document.querySelectorAll(".single-credit-card");

creditCard.forEach((card) => {
  card.addEventListener("click", function () {
    creditCard.forEach((a) => {
      a.classList.remove("active");
    });
    card.classList.add("active");
  });
});

// ------------------ Mobile navbar ----------------------
const mobileNavbar = document.getElementById("mobileNavbar");
mobileNavbar.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.add("active");
});

const closeMobileSidebar = document.getElementById("closeMobileSidebar");
closeMobileSidebar.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.remove("active");
});

// ------------------------ Setting tab ----------------------
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Profile dropdown
const profileDropBtn = document.querySelector(".profile");
profileDropBtn.addEventListener("click", () => {
  document.querySelector(".profile-wrapper").classList.toggle("active");
});

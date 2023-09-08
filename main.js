const sidebarButtonOpen = document.getElementById("sidebar-button-open");
const sidebarButtonClose = document.getElementById("sidebar-button-close");
const sidebarBackground = document.getElementById("sidebar-background");
const sidebar = document.getElementById("sidebar");

sidebarButtonOpen.onclick = function () {
  sidebar.dataset.state = "open";
  sidebarBackground.dataset.state = "open";
};

sidebarButtonClose.onclick = function () {
  sidebar.dataset.state = "close";
  sidebarBackground.dataset.state = "close";
};

function showMenu() {
  document.getElementById("menu").style.opacity = "1";
  document.getElementById("menu").style.zIndex = "2";
  document.getElementById("menu").style.top = "0";
  document.getElementById("menu").style.display = "sticky";
}

function closeMenu() {
  document.getElementById("menu").style.opacity = "0";
  document.getElementById("menu").style.zIndex = "-1";
  document.getElementById("menu").style.top = "-2000px";
  document.getElementById("menu").style.display = "absolute";
}

function closeNotification() {
  document.getElementById("notification").style.display = "none";
}

function openCloseFilterAccordionContent() {
  var x = document.getElementById("filter-accordion-hidden");
  var y = document.getElementById("filter-accordion-chevron");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}

function openCloseFilterAccordionContentMobile() {
  var x = document.getElementById("filter-accordion-hidden-mobile");
  var y = document.getElementById("filter-accordion-chevron-mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}


function openFilterMenu() {
  document.getElementById("filter-menu").style.opacity = "1";
  document.getElementById("filter-menu").style.zIndex = "2";
  document.getElementById("filter-menu").style.top = "0";
  document.getElementById("filter-menu").style.position = "sticky";
}

function closeFilterMenu() {
  document.getElementById("filter-menu").style.opacity = "0";
  document.getElementById("filter-menu").style.zIndex = "-1";
  document.getElementById("filter-menu").style.top = "-2000px";
  document.getElementById("filter-menu").style.position = "absolute";
}

function openCloseAccordionContent() {
  var x = document.getElementById("accordion-hidden");
  var y = document.getElementById("accordion-chevron");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}

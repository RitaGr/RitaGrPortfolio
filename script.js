// JavaScript code to generate items
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
  
    for (var i = 1; i <= 60; i++) {
      var item = document.createElement("div");
      item.className = "item";
      container.appendChild(item);
    }
  });
document.getElementById("form").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  localStorage.removeItem("foodArr") ;
  let foodArr = [] ;

  let all = document.querySelectorAll("input[type=checkbox]");

  for (i = 0; i < all.length; i++) {
    if (all[i].checked === true) {
      foodArr.push(all[i].value);
    }
  }

  localStorage.setItem("foodArr", JSON.stringify(foodArr));
  window.location.href = `./order.html`;
}

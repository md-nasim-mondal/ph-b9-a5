const allSeat = document.getElementsByClassName("seat");
let count = 0;

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    count++;
    if (count > 4) {
      alert(
        "You have already selected maximum number of seat for getting ticket."
      );
      return;
    }
    const seatNumber = e.target.innerText;
    const seatPrice = 550;
    const price = parseInt(seatPrice);
    const seatClass = "Economy";

    const seatInfoContainer = document.getElementById("info-container");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    p.innerText = seatNumber;
    const p2 = document.createElement("p");
    p2.innerText = seatClass;
    const p3 = document.createElement("p");
    p3.innerText = price;
    h4.appendChild(p);
    h4.appendChild(p2);
    h4.appendChild(p3);
    seatInfoContainer.appendChild(h4);
    const totalPrice = totalCost(count, price);
    setInnerText("total-price", totalPrice);
    setInnerText("grand-total", totalPrice);

    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "white";
    e.target.disabled = true;
    leftSeat = parseInt(document.getElementById("left-seat").innerText);
    availableSeat = leftSeat - 1;
    setInnerText("left-seat", availableSeat);
    if (count === 4) {
      const applyButton = document.getElementById("apply-btn");
      applyButton.removeAttribute("disabled");
    }
    setInnerText("seat-count", count);

    const seatSelected = document.getElementById("seat-count").innerText;

    if (seatSelected > 0) {
      const phoneNumber = document.getElementById("number");
      const nextButton = document.getElementById("next-button");
      phoneNumber.addEventListener("input", function () {
        if (this.value.length > 0) {
          nextButton.removeAttribute("disabled");
        } else {
          nextButton.setAttribute("disabled", true);
        }
      });
    }
  });
}

const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function () {
  const couponCode = document.getElementById("coupon");
  const coupon = couponCode.value;
  if (coupon === "NEW15") {
    const latestTotalPrice = parseInt(
      document.getElementById("total-price").innerText
    );
    const grandTotalPrice = latestTotalPrice * 0.85;
    const discountPrice = latestTotalPrice * 0.15;
    setInnerText("grand-total", grandTotalPrice);
    setInnerText("discount-price", discountPrice);

    const discountContainer = document.getElementById("discount-container");
    discountContainer.classList.remove("hidden");
    const congratsMessage = document.getElementById("congrats-message");
    congratsMessage.classList.remove("hidden");
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
  } else if (coupon === "Couple 20") {
    const latestTotalPrice = parseInt(
      document.getElementById("total-price").innerText
    );
    const grandTotalPrice = latestTotalPrice * 0.8;
    const discountPrice = latestTotalPrice * 0.2;
    setInnerText("grand-total", grandTotalPrice);
    setInnerText("discount-price", discountPrice);

    const discountContainer = document.getElementById("discount-container");
    discountContainer.classList.remove("hidden");
    const congratsMessage = document.getElementById("congrats-message");
    congratsMessage.classList.remove("hidden");
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
  } else {
    alert("Invalid Coupon Code");
  }
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value ;
}

function totalCost(totalSeat, price) {
  const result = totalSeat * price;
  return result;
}

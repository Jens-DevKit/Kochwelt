function toggleRespMenu() {
  document.getElementById("resp-menu").classList.toggle("resp-menu-closed");
}

function calculatePortion() {
  const y = parseFloat(document.getElementById("portion-menge").value);
  const fehlermeldung = document.getElementById("fehlermeldung");

  if (y >= 1 && y <= 14) {
    fehlermeldung.style.display = "none";

    const zutaten = document.querySelectorAll(".zutat");

    zutaten.forEach((zutat) => {
      const baseAmount = parseFloat(zutat.getAttribute("data-base-amount"));
      const unit = zutat.getAttribute("data-unit");

      if (!isNaN(baseAmount)) {
        const newAmount = baseAmount * y;
        zutat.textContent = `${newAmount} ${unit}`;
      }
    });
  } else {
    fehlermeldung.style.display = "block";
    fehlermeldung.innerText = "Bitte geben Sie eine Zahl von 1 bis 14 ein.";
  }
}

window.onload = function () {
  const fehlermeldung = document.getElementById("fehlermeldung");
  fehlermeldung.style.display = "none";

  const portionenInput = document.getElementById("portion-menge");
  portionenInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculatePortion();
      event.preventDefault();
    }
  });
};

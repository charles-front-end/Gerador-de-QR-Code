const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-header button");

const qrCodeInput = document.querySelector("#qr-header input");

const qrCodeImg = document.querySelector("#qrcode img");

//Eventos
function generateQRCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando QR Code...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  container.classList.add("active");

  qrCodeImg.addEventListener("load", () => {
    qrCodeBtn.innerText = "Código Criado";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQRCode();
});

qrCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQRCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  } 
});

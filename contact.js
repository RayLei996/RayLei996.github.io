const emailButton = document.querySelector("[data-email-contact]");

emailButton.addEventListener("click", () => {
  const address = ["l050428ray", "gmail.com"].join("@");
  window.location.href = `mailto:${address}`;
});

emailButton.hidden = false;

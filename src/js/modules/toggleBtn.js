const toggleButton = (triggerBtn, openBlock) => {
  const btn = document.querySelector(triggerBtn);
  const elem = document.querySelector(openBlock)

    btn.addEventListener("click", function (e) {

      btn.classList.toggle("toggle--active");

      elem.classList.toggle("switch-content")

  });
};

export default toggleButton;

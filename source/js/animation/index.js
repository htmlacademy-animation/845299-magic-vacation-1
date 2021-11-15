export default () => {
  window.onload = () => {
    document.body.classList.add(`load`);
    document.getElementById(`story`).insertAdjacentHTML(`beforeend`, `<div class="screen-bg"></div>`);
  };
};

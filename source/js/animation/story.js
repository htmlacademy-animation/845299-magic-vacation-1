export const bgStoryAnimate = (linkHref) => {
  const screenBgElement = document.getElementById(`story`).querySelector(`.screen-bg`);
  screenBgElement.classList.add(`active`);
  setTimeout(() => {
    location.href = linkHref;
    screenBgElement.classList.remove(`active`);
  }, 600);
};

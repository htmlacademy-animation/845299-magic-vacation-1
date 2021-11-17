import {bgStoryAnimate} from '../animation/story';

export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    const menulink = menuLinks[i];
    console.log(`menulink.addEventListener`);
    menulink.addEventListener(`click`, function (ev) {
      ev.preventDefault();
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      if (menulink.baseURI.split(`#`)[1] === `story`) {
        console.log(`"ЭТО СТОРИ ПРОБЛЕМА В bgStoryAnimate"`);
        bgStoryAnimate(menulink.href);
        return;
      }

      location.href = menulink.href;
    });
  }
};

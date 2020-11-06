function setStatueFrame (n) {
  let statueContainer = document.querySelector('.statue');
  let offset = -484 * n
  statueContainer.style['background-position'] = `${offset}px 0px`;
}

function setStatueFrame (n) {
  let statueContainer = document.querySelector('.sprite2');
  let offset = -558 * n
  statueContainer.style['background-position'] = `${offset}px 0px`;
}

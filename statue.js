function setStatueFrame (n) {
  let statueContainer = document.querySelector('.statue');
  let offset = -484 * n
  statueContainer.style['background-position'] = `${offset}px 0px`;
}

let counter = 0;setInterval(() => {
  setStatueFrame(counter % 13); counter += 1;}, 550);

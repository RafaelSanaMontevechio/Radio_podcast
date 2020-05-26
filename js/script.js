var globalInputRange = null;
var globalFrequency = null;
var globalDivPodcast = null;

window.addEventListener('load', () => {
  globalFrequency = document.querySelector('#frequency');
  globalInputRange = document.querySelector('#inputRange');
  globalDivPodcast = document.querySelector('#podcasts');

  globalInputRange.addEventListener('input', handleRangeChange);

  showPodcastFrom(globalInputRange.value);
});

const handleRangeChange = (event) => {
  let currentFrequency = event.target.value;
  globalFrequency.textContent = currentFrequency;

  showPodcastFrom(currentFrequency);
};

const showPodcastFrom = (frequency) => {
  let podcast = null;

  podcast = realPodcasts.find((podcast) => {
    return podcast.id === frequency;
  });

  console.log(podcast);
  renderPodcast(podcast);
};

const renderPodcast = (podcast) => {
  if (!podcast) {
    globalDivPodcast.textContent = 'Nenhum podcast encontrado!';
    return;
  }

  let { img, title, description } = podcast;

  globalDivPodcast.innerHTML = `
  <img src='./img/${img}' />
  <h2>${title}</h2>
  <p>${description}</p>  
`;
};

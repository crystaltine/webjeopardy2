function loadJSONfromURL(url, name) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(name, JSON.stringify(data));
    })
    .catch(err => {
      console.log(err);
    });
}

function colNameTextSizeScaler(nameLen) {
  if (nameLen <= 25) {
    return 2;
  }
  // Desmos: 0.5\cdot\frac{\left(x+10\right)}{\left(x-10\right)}-0.5
  return 0.5 * ((nameLen + 10) / (nameLen - 10)) - 0.5;
}

export { loadJSONfromURL, colNameTextSizeScaler };

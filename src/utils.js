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
  // Desmos: y=-1.75\frac{\left(x-25\right)}{\left(x+25\right)}+2
  return -1.75 * ((nameLen - 25) / (nameLen + 25)) + 2;
}

export { loadJSONfromURL, colNameTextSizeScaler };
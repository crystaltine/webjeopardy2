function loadJSONfromURL(url, name) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(name, JSON.stringify(data));
    })
    .catch(err => {
      console.log("[ERROR] Error while importing: " + err);
    });
}

function colNameTextSizeScaler(nameLen) {
  if (nameLen <= 15) {
    return 2;
  }
  const scaler = 0.7;
  // Desmos: 0.5\cdot\frac{\left(x+10\right)}{\left(x-10\right)}-0.5
  return scaler * ((nameLen + 10) / (nameLen - 10)) - scaler;
}

export { loadJSONfromURL, colNameTextSizeScaler };

const axios = require("axios");

const url = "https://us-central1-live-26afa.cloudfunctions.net/addMessage";
const interval = 15000;

function trigger() {
  axios.get(url).then((res) => console.log(`Success: ${new Date()}`));
}

function start() {
  setInterval(trigger, interval);
}

start();

import "../app.css"
import GetURL from "../components/GetURL.svelte"

const target = document.getElementById('app');

async function render() {
    // const {url} = await chrome.storage.sync.get({url: 0});
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const url = tab.url;
  
    new GetURL({target, props: {url}});
  }
  
  document.addEventListener('DOMContentLoaded', render);
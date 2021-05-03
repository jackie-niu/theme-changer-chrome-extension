document.getElementById("black").addEventListener("click", black);
function black() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "invert(1) hue-rotate(180deg)";'});
      });
}

document.getElementById("white").addEventListener("click", white);
function white() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "none"; document.body.style.backgroundColor = "#ffffff";'});
      });
}

document.getElementById("red").addEventListener("click", red);
function red() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "invert(0.1)"; document.body.style.backgroundColor = "#ea0000";'});
      });
}

document.getElementById("blue").addEventListener("click", blue);
function blue() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "invert(1)"; document.body.style.backgroundColor = "#f9ff7e";'});
      });
}

document.getElementById("yellow").addEventListener("click", yellow);
function yellow() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "none"; document.body.style.backgroundColor = "#f9ff7e";'});
      });
}

document.getElementById("green").addEventListener("click", green);
function green() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "none"; document.body.style.backgroundColor = "#07e005";'});
      });
}
document.getElementById("salmon").addEventListener("click", salmon);
function salmon() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "none"; document.body.style.backgroundColor = "#fa8072";'});
      });
}
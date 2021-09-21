const puppeteer =require('puppeteer');

let browserOpen=puppeteer.launch({
    headless: false,
    args :['--start-maximized'],
    defaultViewport:null
})
//opening new page i.e 2 tabs
browserOpen.then(function(browserObj){
    let BrowserOpenPromise=browserObj.newPage()
    return BrowserOpenPromise;
})

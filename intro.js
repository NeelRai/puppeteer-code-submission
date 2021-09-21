const puppeteer = require('puppeteer');

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'yiger16363@vefblogg.com'
const password = '123456'

let browserOpen=puppeteer.launch({
    headless: false,
    args :['--start-maximized'],
    defaultViewport:null
})
let page

//opening new page i.e 2 tabs
browserOpen.then(function(browserObj){
    let BrowserOpenPromise=browserObj.newPage()
    return BrowserOpenPromise;
}).then(function(newTab){
    page=newTab
    let hackerRankOpenPromise=newTab.goto(loginLink)
    return hackerRankOpenPromise
 }).then(function(){
    let emailIsEntered= page.type("input[id='input=1']", email, {delay:50})
    return emailIsEntered
}).then(function(){
    let passwordIsEntered=page.type("input[type='password']",password, {delay :50})
    return passwordIsEntered
})

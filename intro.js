const puppeteer = require('puppeteer');

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'yiger16363@vefblogg.com'
const password = '123456'

let browserOpen=puppeteer.launch({
    headless: false,
    args :['--start-maximized'],
    defaultViewport:null
})
let page;

//opening new page i.e 2 tabs
browserOpen.then(function(browserObj){
    let BrowserOpenPromise=browserObj.newPage()
    return BrowserOpenPromise;
}).then(function(newTab){
    page=newTab
    let hackerRankOpenPromise=newTab.goto(loginLink)
    return hackerRankOpenPromise
 }).then(function(){
    let emailIsEntered= page.type('input[id="input-1"]', email, {delay:50}) //input waala set kardiya
    return emailIsEntered
})
.then(function(){
    let passwordIsEntered=page.type("input[type='password']",password, {delay :50})
    return passwordIsEntered
})
.then(function(){
    let loginButtonClicked=page.click('button[data-analytics="LoginPassword"]',password, {delay :50})
    return loginButtonClicked
})
.then(function(){
    let clickOnAlgoPromise=waitAndClick('.track-card a[data-attr2="algorithms"]',page, )
    return clickOnAlgoPromise
})
.then(function(){
    let waitfor3seconds = page.waitFor(3000)
    return waitfor3seconds
})
.then(function(){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50} )
    return allChallengesPromise
})
.then(function(questionArr){
    console.log('number of questions ', questionsArr.length)
    let questionWillBeSolved = questionSolver(questionArr[0])
    return questionWillBeSolved
})


function waitAndClick(selector, cPage){
    return new Promise(function(resolve, reject){
        let waitForModelPromise = cPage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModal = cPage.click(selector)
            return clickModal
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}

function questionSolver(question ){
    return new Promise(function(resolve, reject){
        let questionWillBeClicked=question.click()
        return questionWillBeClicked.then(function(){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page)
            return EditorInFocusPromise
        })
    })
}
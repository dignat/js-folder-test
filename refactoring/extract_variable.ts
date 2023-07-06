//problem
const platform = navigator.userAgent;
const browser = navigator.userAgent
function readBanner(): void {
    if ((platform.indexOf('Mac OS X') !== -1) && (browser.indexOf('IE') !== -1)) {
        // do soemthing
    }
}

// solution refactoring with patern extract method

function readBannerrefactored(): void {
    const isMacOS = platform.indexOf('Mac OS X') !== -1;
    const isIE = browser.indexOf('IE') !== -1;

    if (isMacOS && isIE) {
        //do something
    }
}
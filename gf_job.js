// ==UserScript==
// @name         ガールフレンド(仮) [バイト]
// @namespace    https://twitter.com/stylish_munezo
// @version      0.3
// @description  バイト自動継続
// @author       Munezo
// @match        *://vcard.ameba.jp/mypage
// @match        *://vcard.ameba.jp/mypage/login-bonus*
// @match        *://vcard.ameba.jp/mypage/cupid-login-animation*
// @match        *://vcard.ameba.jp/mypage/date-bonus*
// @match        *://vcard.ameba.jp/mypage/continuation-login-reward-animation*
// @match        *://vcard.ameba.jp/job*
// @match        *://vcard.ameba.jp/limited-login*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==

'use strict';

main();

function main()
{
    if( location.pathname === '/mypage' ){
        gf_mypage();
        return;
    }

    if( location.pathname === '/job/job-payment' ){
        gf_job_payment();
        return;
    }

    if( location.pathname === '/job' ){
        gf_job();
        return;
    }

    window.location.href = 'http://vcard.ameba.jp/mypage';
}


function gf_mypage()
{
    setTimeout(function() {
        var nodes = document.evaluate('/descendant::a[@id="finishJobBtn"]',
                                      document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        if( nodes.snapshotLength > 0 )
        {
            nodes.snapshotItem(0).click();
        }
    }, 5000);

    setTimeout(function() {
        window.location.href = 'http://vcard.ameba.jp/mypage';
    }, 10*60*1000);
}


function gf_job_payment()
{
    setTimeout(function() {
        var nodes = document.evaluate('/descendant::p[@id="continueJob"]/a[contains(@class, "btnPink")]',
                                      document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        nodes.snapshotItem(0).click();

        setTimeout(function() {
            var nodes2 = document.evaluate('/descendant::a[@id="accompanySubmitBtn"]',
                                           document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            nodes2.snapshotItem(0).click();

        }, 3000);
    }, 3000);
}


function gf_job()
{
    setTimeout(function() {
        var nodes = document.evaluate('/descendant::a[contains(@class, "btnPink")]',
                                      document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        for (var i = 0, maxi = nodes.snapshotLength; i < maxi; i++)
        {
            if( nodes.snapshotItem(i).getAttribute('href') == '/mypage' ){
                nodes.snapshotItem(i).click();
                return;
            }
        }
    }, 3000);
}

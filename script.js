var request = require('request');
var cheerio = require('cheerio');
function scrapYcombinator() {
    request('https://news.ycombinator.com', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            console.log("//================News of https://news.ycombinator.com================//\n");
            $("table.itemlist tr.athing").each(function (i, val) {
                console.log($(this).find("td.title>a").text());
            });
        }
    });
}

function scrapDailyJanakontho(){
    request("https://www.dailyjanakantha.com/",function(err,response,html){
        if(!err && response.statusCode){
            var $ = cheerio.load(html);
            var i=0;
            console.log("//================News of https://www.dailyjanakantha.com================//\n");

            $("ul.latestNews li").each(function(){
                console.log(++i+". "+$(this).find("a").first().text());
            });
        }
    });
}

function scrapBBCBangle(){
    request("http://www.bbc.com/bengali/news",function(err,response,html){
        if(!err && response.statusCode){
            var $ = cheerio.load(html);
            var i=0;
         console.log("//================News of http://www.bbc.com/bengali/news================//\n");
           $(".hard-news-unit--regular").each(function(){
               console.log(++i+". "+$(this).find(".hard-news-unit__headline-link").text());
            });
        }
    });
}

scrapYcombinator();
scrapBBCBangle();
scrapDailyJanakontho();
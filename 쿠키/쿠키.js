const scriptName = "쿠키";

url = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=포춘쿠키").get();
url = String(url);
var cookieList = url.split('"s":');
var bin = cookieList.shift();

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/쿠키') != -1){    
     var cookie = cookieList[Math.floor(Math.random()*122)];
     cookie = cookie.replace(/[\{\}\,\^]/g, ' ').replace(/\"/g, '');
     replier.reply(cookie);
   }
   
   return;
}

  
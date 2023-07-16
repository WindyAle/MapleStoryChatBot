const scriptName="경험치.js";
const room_name=["메이플 동호회"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(msg.indexOf('/성장 ') == 0){
      var name = msg.split(' ')[1];
      url = org.jsoup.Jsoup.connect("https://maple.gg/u/" + name).get();
      url = String(url);
     
      if(url.indexOf('검색결과가 없습니다.') != -1){
         replier.reply('그런 캐릭터는 없담.');
         return;
      }
      
      var history = [];
      var history_url = url.split('["exp",')[1].split(']]')[0];
      for(let i = 0; i < 4; i++)
          history[i] = history_url.split(',')[i+3];
      
      var date = [];
      var date_url = url.split('[[')[1].split(']]')[0];
      for(let j = 0; j < 4; j++)
          date[j] = date_url.split(',"')[j+4].split('"')[0];
      
      var level = [];
      for(let l = 0; l < 5; l++)
          level[l] = url.split('level":"')[l+3].split('","')[0];
      
      //레벨업 지점 찾기
      var maxIndex = 0;
      var maxValue = level[0];
      
      for(let i = 1; i < 5; i++)
          if(level[i] > maxValue){
            maxIndex = i;
            maxValue = level[i];
          }
         
      var result = [];
      for(let k = 0; k < 4; k++)
          result[k] = '\n' + date[k] + ' : ' + history[k] + '%';      
 
      if(maxIndex > 0)
          result[maxIndex-1] = result[maxIndex-1] + ' << '+ maxValue + 'UP'; 
       
      result = String(result).replace(/\\uc6d4/g,'월').replace(/\\uc77c/g, '일').replace(/,/g, '').replace(/\\ub144/g, '년');     
      
      replier.reply(name + '의 경험치 히스토리\n' + result);
      return;
   }
}
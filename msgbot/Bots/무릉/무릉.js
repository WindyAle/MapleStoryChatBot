const scriptName="레벨.js";
const room_name=["메이플 동호회"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/무릉 ') != -1){
      var name = msg.split(' ')[1];
      url = org.jsoup.Jsoup.connect("https://maple.gg/u/" + name).get();
      url = String(url);
     
      if(url.indexOf('검색결과가 없습니다.') != -1){
         replier.reply('그런 캐릭터는 없담.');
         return;
      }
      
      var target = url.split('dohangHistoryTbody')[1];
      
      var floor = [];
      var date = [];
      var time = [];
      var level = [];
      
      for(let i = 0; i < 4; i++){
          floor[i] = target.split('mb-1">')[i+1].split('</h5>')[0];
          date[i] = target.split('<b>')[i+1].split('</b>')[0];    
          time[i] = target.split('.5px">')[i+1].split('</span>')[0];
          level[i] = target.split('<small>')[i+1].split('</small>')[0];
      }
    
      var result = [];
      for(let tok = 0; tok < 4; tok++)
          result[tok] = '\n' + date[tok] + ' : ' + floor[tok] + ' (' + time[tok] + ') ' + level[tok];
      
      result = String(result).replace(/,/g, '');
      
      replier.reply(name + '의 무릉 히스토리\n' + result);
      return;
   }
}
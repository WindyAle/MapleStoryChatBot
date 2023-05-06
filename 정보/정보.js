const scriptName="정보.js";
const room_name=["메이플 동호회"];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(/*room_name.indexOf(room) != -1 &&*/ msg.indexOf('/정보 ') != -1){
      var name = msg.split(' ');
      
      url = org.jsoup.Jsoup.connect("https://maple.gg/u/" + name[1]).get();
      url = String(url);
      
      if(url.indexOf('검색결과가 없습니다.') != -1){
         replier.reply('그런 캐릭터는 없담.');
         return;
      }
     
      var data1 = url.split('<ul class="user-summary-list">')[1].split('<span>')[0].replace(/(<([^>]+)>)/g,"");
      data1 = data1.replace(/ /gi, '');
      data1 = data1.split('Lv.')[1].replace('(', ' (');

      var char_lv = data1.split('\n')[0];
      var char_job = data1.split('\n')[1];  
      var char_lvs = Number(char_lv.split(' ')[0]);  
      var char_lank = url.split('직업랭킹')[1].split('<span>')[1].split('</span>')[0];
   
      var data2 = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g,"");
      data2 = data2.replace(/ /gi, '');
      data2 = data2.replace(/\n/gi, '');
      
      var floor;
      
      if (data2.indexOf('기록이없습니다.') != -1)
         floor = '무릉기록이 없담.';
      else {
         floor = data2.split('최고기록')[1].split('층')[0] + '층';
         var time = data2.split('층')[1].split('Lv')[0];
         floor = floor + ' (' + time + ')';
      }
      
      var data3 = url.split('bg-yellow">')[1].split('업적')[0].replace(/(<([^>]+)>)/g,"");
      data3 = data3.replace(/ /gi, '');
      data3 = data3.replace(/\n/gi, '');
      
      if(data3.indexOf('기록이없습니다.') != -1){
         replier.reply('[' + name[1] + ']\nLv.' + char_lv + ' / ' + char_job
         + '\n' + floor + '\n\n이 캐릭터는 유니온이 없담.\n열심히 해람.');
         if(char_lvs > 269)
            replier.reply('너는 훌륭한 메창이담.');
         return;
      }
      else {
         var grade = data3.split('유니온')[1].split('Lv')[0];
         var level = data3.split('Lv.')[1].split('전투력')[0];
         var power = data3.split('전투력')[1].split('월드랭킹')[0];
         var coin = power.replace(/,/gi, '');
         coin = Math.floor(coin * 0.000000864);
      
         replier.reply('[' + name[1] + ']\nLv.' + char_lv + ' / ' + char_job
            + '\n' + floor
            + '\n월드 ' + char_lank
            + '\n\n<유니온>\n' + grade + '(Lv.' + level + ')\n전투력: ' + power
            + '\n일일코인 수급량: '+ coin);
         if(char_lvs >= 269)
            replier.reply('너는 훌륭한 메창이담.');
         return;
      }
   }
}
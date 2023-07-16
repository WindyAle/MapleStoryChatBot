const scriptName="운세.js";
const room_name=[];  //여기에 채팅방 이름을 입력하세요

const luck = ['대흉', '흉', '길', '소길', '대길'];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(msg == '/운'){
      var result = luck[Math.floor(Math.random()*5)];
      
      if(result == '대흉'){
         replier.reply('대흉이 나왔담.\n너는 끝났담.');
         return;
      }
      else if(result == '대길'){
         replier.reply('대길이 나왔담. 축하한담.\n오늘은 '
                       + sender.slice(-3).replace(/\#/,'# ') + '의 날이담!');
      }  
      else {
         replier.reply(result + '이 나왔담.');
         return;
      }
   }
}
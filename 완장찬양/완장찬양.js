const scriptName="심볼.js";
const room_name=["메이플 동호회"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){  
   if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/완장찬양') != -1){
      repetition = Math.floor(Math.random()*11);
      if(repetition == 0)
         replier.reply('그게 누군뎀');
      else
         replier.reply('이프릿프루아! '.repeat(repetition));
      return;
   }
  
   if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/비숍찬양') != -1){
      repetition = Math.floor(Math.random()*11);
      if(repetition == 0)
         replier.reply('그게 누군뎀');
      else
         replier.reply('최강버프! '.repeat(repetition));
      return;
   } 
}
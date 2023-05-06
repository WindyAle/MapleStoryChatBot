const scriptName = "초성퀴즈";

var url = org.jsoup.Jsoup.connect("https://junlog296373230.wordpress.com/2022/10/17/메이플-초성-db/").get();
url = String(url);
url = url.split('datetime')[1].split('aria-hidden')[0];

var answerQuiz = [];
var category = [];
var hint = [];

const topicRange = [0, 0, 0, 0, 931, 698, 1533, 384, 464];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
   if(msg.indexOf('/퀴즈') != -1){            
      var printQuiz = [];
      var pick = 0;
      var topic = 5;
      
      if(msg.length > 3){
        topic = Number(msg.split(' ')[1]);
            
        if(topic != 1 && topic != 2 && topic != 3 && topic != 4 && topic != 5){
          replier.reply('나를 화나게 하지마람...');
          return;
        }
        
        pick = Math.floor(Math.random()*topicRange[topic+3]) + topicRange[topic+2] + topicRange[topic+1] + topicRange[topic] + topicRange[topic-1] + 1;
      }
      else      
        pick = Math.floor(Math.random()*3561) + 1;
          
      answerQuiz = url.split('이름: ')[pick].split(' 초성')[0];
      printQuiz = url.split('초성: ')[pick].split(' 범주')[0];     
      category  = url.split('범주: ')[pick].split(' 힌트')[0];
      hint = url.split('힌트: ')[pick].split('<br>')[0];
      
      if(category == 'NPC')
        replier.reply('[' + hint + ' ' + category + ']\n' + printQuiz);
      else
        replier.reply('[' + category + ']\n' + printQuiz);
        
      return;
   }
   //답 입력
   if(msg.indexOf('!') == 0){
      var getAnswer = msg.split('!')[1];
      
      if(answerQuiz.length < 1)
         return;
      
      if(getAnswer.indexOf(answerQuiz) != -1){
         replier.reply(sender.slice(-3) + ' 정답이담!\n답은 \'' + answerQuiz + '\'이담!');
         answerQuiz = [];
         return;
      }        
      else
         replier.reply('틀렸담... 메알못은 나가람.');   
         return;
   }
   //힌트
   if(msg == '/힌트'){
      if(answerQuiz.length < 1)
         return;
      
      if(category == 'NPC')
         replier.reply('첫글자 힌트: ' + answerQuiz[0]);
      else
         replier.reply('힌트: ' + hint);  
      return;
   }
   //정답
   if(msg == '/정답'){
      if(answerQuiz.length < 1)
         return;
       
      replier.reply('답은 ' + answerQuiz + '이담.\n'
                    + hint + '의 ' + category + '이담.\n\n'
                    + '으휴 메알못들이담!');
      answerQuiz = [];
      return;
   }
}
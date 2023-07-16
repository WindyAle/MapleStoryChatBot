const scriptName="잡담기능.js";
const room_name=["메이플"];

const answer = ['네 주인님',
                '나 여기 있담',
                '왜 부르냠',
                '싫은뎀',
                '나는 돌의 정령이담',
                'Zzz......',
                '쉿 재획 중이담',
                '귀찮게 하지마람',
                '크르릉',
                '메이플스토리 서비스 종료 소식을 전하게 되어 마음이 무겁습니다.'];
                
const quotes = ['아직도 이 겜을 하냠?',
                '허접ㅋㅋ',
                '메이플 하는 사람은 다 흑우담',
                '너가 제일 못생겼담',
                '이럴 시간에 재획이나 해람',
                '어떻게 닉네임이 웜웜윔웜윔웜',
                '버려진 야영지를 누가 버야지라고 불러'];
                
const menu = ['백반', '라면', '파스타', '치킨', '피자',
              '돈까스', '파워 엘릭서', '닭가슴살 샐러드(이런걸 누가먹음?)', '재획비',
              '스시', '라멘', '덮밥', '중국집', '부리또',
              '국밥', '맥날', '롯데리아', '떡볶이', '냉면',
              '설렁탕', '부대찌개', '백채', '연래춘', '도담',
              '학식', '그냥 굶어람.', '뻥튀기', '물', '닭갈비',
              '삼겹살', '교수님과 점심식사', '볶음밥', '오므라이스',
              '카레', '아영이네', '제육', '삼각김밥', '백종원도시락',
              '페이몬', '추천해주는대로 먹어람.', '추천해줘도 안먹잖아'];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/밥') != -1){
      random_Menu = menu[Math.floor(Math.random()*menu.length)];
      replier.reply(random_Menu);
      return;
   }   
   else if(/*room_name.indexOf(room)!= -1 &&*/ msg.indexOf('돌정아') != -1){
      random_Answer = answer[Math.floor(Math.random()*9)];
      replier.reply(random_Answer);
      return;
   }
   else if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/소신발언') != -1){
      random_Quotes = quotes[Math.floor(Math.random()*7)];
      replier.reply(random_Quotes);
      return;
   }  
}
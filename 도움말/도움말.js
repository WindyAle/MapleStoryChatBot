const scriptName = "도움말";
const helpScript = ["== 고성능 AI '돌의 정령 봇' 사용설명서 ==\n"
+ "**모든 명령어 앞에는 슬래시('/')를 붙임**\n\n"
+ "도움 : 이 말풍선을 띄움.\n"
+ "돌정아 : 돌정이를 부름.\n"
+ "정보 [캐릭터명] : 캐릭터의 기본정보.\n"
+ "레벨 [캐릭터명] : 최근 4회의 레벨업 이력을 보여줌.\n"
+ "ㄴ '성장'이라고 입력해도 동일한 명령\n"
+ "무릉 [캐릭터명] : 최근 4회의 무릉 이력을 보여줌.\n\n"
+ "완장찬양 : 위대한 파딱의 이름을 외침. 신앙심에 따라 외치는 횟수는 랜덤.\n"
+ "밥 : 최첨단 인공지능이 메뉴를 추천해줌.\n"
+ "소신발언 : 돌정이가 '일침'을 가함.\n"
+ "운 : 오늘의 운세를 뽑아줌.\n\n"

+ "퀴즈 : 돌정이가 초성퀴즈를 내줌.\n"
+ "- 출제 범위는 메이플에 존재하는 모든 몬스터, NPC, 스킬\n"
+ "- 뒤에 숫자를 입력하는 것으로 출제 범위를 조정가능\n"
+ "  (1 몬스터 / 2 NPC / 3 스킬 / 4 맵 / 5 무기)\n"
+ "- 정답을 시도할 땐 앞에 느낌표(!)를 붙임 ex) !주황버섯\n"
+ "- /힌트 입력시 정답에 대한 힌트를 알려줌\n"
+ "- /정답 입력시 정답을 공개하고 출제된 퀴즈를 종료"];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(/*room_name.indexOf(room)!=-1 &&*/ msg.indexOf('/도움') !== -1){
    replier.reply(helpScript);
    return;
  }
}
const fs=require('fs').promises;

//아래 함수는 promise 문법으로 처리|모듈로 불러오는 방식때문에 실행되지X
function promiseWriteMemoToFile(memoTitle,memo){
  return new Promise((resolve,reject)=>{
    fs.appendFile(`${memoTitle}.txt`,`${memo}`,(err)=>{
      if(err){
        reject(err); 
      }else{
        resolve(); 
      }
    });
  });
}

//아래의 함수는 async/await 문법으로 간결하게 처리
async function writeMemoToFile(memoTitle,memo){
  if(typeof memoTitle==="string"&&typeof memo==="string"){
    await fs.appendFile(`${memoTitle}.txt`,`${memo}`);
    console.log('appendFile 메서드의 특징 때문에 반복해서 실행하면 해당 파일안에 내용이 추가(덧붙이기)된다 ')
  }
}
//위 두개의 함수는 동일한 기능을 수행한다.

async function readMemosFromFile(memoTitle){
  const data=await fs.readFile(`${memoTitle}.txt`,'utf-8');
  console.log("메모 내용 조회하기");
  console.log(data);
}
//메모 추가
writeMemoToFile("test","이게 메모장 앱이다!");
//메모 데이터 콘솔로 확인
readMemosFromFile("test");
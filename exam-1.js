/* 1.매개변수가 문자열일 경우, 다음과 같음 문자열이 나타남.
"문자열 데이터를 입력하셨습니다." 
+덧셈*/
function examOne(first, second){
  if(typeof first==="string"&&typeof second==="string"){
    console.log("문자열 데이터를 입력하셨습니다.")
  }else{
    console.log("문자열 데이터가 아닙니다. 덧셈을 실행합니다.")
    console.log(first+second)
  }
};

/* 2. 숫자여야만 실행되도록 타입을 확인하는 로직 작성
+곱셈만들기 */
function examTwo(first,second,third){
  if(typeof first==="number"&&typeof second==="number"&&typeof third==="number"){
    console.log("숫자이므로 실행이 됩니다.")
    console.log(first*second*third)
  }else{
    console.log("숫자가 아니므로 실행이 X.")
  }

};

/* 3. 문자열만 실행되도록 타입을 확인하는 로직 작성
+length 프로퍼티를 사용하지 않고 길이값 구하기 (이건 도움받음)*/
function examThree(str){
  if(typeof str==="string"){
   let count = 0;
  for (const element of str) {
    count++;
  }
  console.log("문자열길이는:"+count)
  }
};
/* 4. 배열(array)만을 인자로 받아서 실행할 수 있도록 작성 */
function examFour(array){
  if(Array.isArray(array)){
    // console.log("배열임")
/*     for(let i=0; i<length;i++){
      if(array[i]<min){
        min=array[i];
      }
    } */
    console.log("배열입니다 최솟값:"+Math.min.apply(null,array))
  }
};
function examFive(array){
  if(Array.isArray(array)){
    // console.log("배열임 계산시작")
    let sum=0; //const 사용하면 재할당불가라서 쓰면 안됨.
    for(let i=0; i<array.length;i++){
      sum+=array[i];
    }
    console.log("배열임 계산시작:"+sum)
  }
};

console.log(examOne(2,3))//1. 덧셈 로직 만들기
console.log(examTwo(2,3,4));//2. 곱셈 로직 만들기
console.log(examThree("hello")); //3.문자열 길이 구하기
console.log(examFour([3,1,4,2])); //4. 최솟값 판별하기
console.log(examFive([1,2,3])) //5. 배열값 누산(총합)하기
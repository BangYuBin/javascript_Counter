const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const Remove = document.getElementById("Remove");

increase.onclick = () =>{
    const cur = parseInt(number.innerText, 10) //number의 내용(현재의 상태)을 10진수의 숫자로 변경하여 cur에 저장
    number.innerText = cur + 1; //number의 내용을 현재상태에서 1을 증가시킨 상태로 변경
    console.log("1증가");
};

decrease.onclick = () =>{
    const cur = parseInt(number.innerText, 10) //number의 내용(현재의 상태)을 10진수의 숫자로 변경하여 cur에 저장
    number.innerText = cur - 1; //number의 내용을 현재상태에서 1을 감소시킨 상태로 변경
    console.log("1감소");
};


Remove.onclick = () =>{
    const result = confirm("숫자를 초기화 하시겠습니까?");
    if(result){
        number.innerText = 0;
        alert("초기화되었습니다.");
        console.log("초기화");
    }
    else{
        alert("초기화 취소");
    }
}
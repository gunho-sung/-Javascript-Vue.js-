const inputText = document.querySelector(".input-text");//변수에 클래스로 연결
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like"); //빈하트 클릭시 채워지게 할려고 선택


function addItem () {
    if(inputText.value.trim() === ""){   // return 한 줄이기 때문에 중괄호 생략가능
        return; // return 실행시 아래 함수 실행 없이 함수 종료됨
                // trim()은 공백 제거 기능, 공백은 입력이 되는 문제 방지
    }    
     // like
     const like = document.createElement("span"); // like 변수에 span 태그생성 기능추가
     const likeIcon = document.createElement("i");// likeIcon변수에 i태그 생성기능추가
     like.classList.add("like"); //span 태그에 like 클래스 추가
     likeIcon.classList.add("material-icons");//클래스 추가
     likeIcon.innerText = "favorite_border"; //i태그에 아이콘 텍스트명 추가innerText 텍스트 추가함수
     like.appendChild(likeIcon);//span 태그 자식으로 i태그 추가 생성명령
 
     // item
     const item = document.createElement("span");//item 변수에 span 태그 생성명령 추가
     item.classList.add("item")
     item.innerText = inputText.value; //item 변수에 텍스트로 인풋값 출력명령
 
     // manage
     const manage = document.createElement("span");
     const checkIcon = document.createElement("i");
     const clearIcon = document.createElement("i");
     manage.classList.add("manage");
     checkIcon.classList.add("material-icons","check");
     clearIcon.classList.add("material-icons","clear");
     checkIcon.innerText = "check"
     clearIcon.innerText = "clear"
     manage.appendChild(checkIcon)
     manage.appendChild(clearIcon)
 
     const li = document.createElement("li");
     
     // event
     like.addEventListener("click", (e) => {
        const target = e.target;
        // if(target.innerText === "favorite"){
        //     target.innerText = "favorite_border"
        // } else {
        //     target.innerText = "favorite"
        // }
        //조건 ? 했을 때 : 안했을 때 3항 연산자

        const text = target.innerText === "favorite" ? "favorite_border" : "favorite"
        target.innerText = text; // text 변수를 사용하지 않아도 되지만 가독성을 위해
     })
     checkIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode; //부모의 부모 노드
        target.classList.add("done") // 체크 표시 숨기고 목록 줄긋기
        
     })

     clearIcon.addEventListener("click", (e) => {
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
     })
 
     li.appendChild(like)
     li.appendChild(item)
     li.appendChild(manage)
     list.appendChild(li)

    inputText.value= ""; //입력후 초기화
    inputText.focus(); //입력 후 인풋창에 포커스 주기
}


inputText.addEventListener("keypress", (e)=> { //인자가 1개일 때는 괄호 생략가능 e = (e) = event
    // enter는 keycode 13 스페이스바는 32
    if (e.keyCode === 13) {
        addItem()
    }

})

addButton.addEventListener("click", addItem)

const inputText = document.querySelector(".input-text");//변수에 클래스로 연결
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like"); //빈하트 클릭시 채워지게 할려고 선택



addButton.addEventListener("click", function () {
    
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
    like.addEventListener("click", () => {
        console.log("hello");
    })


    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)
    list.appendChild(li)
})

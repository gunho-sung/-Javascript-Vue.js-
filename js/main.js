const inputText = document.querySelector(".input-text");
// console.log({inputText});
// input의 DOM 중 하나인 value 값을 확인 할 수 있음
const addButton = document.querySelector(".add-button");
const list = documnet.querySelector(".list")

const ;oleButtons = document.querySelectorAll(".like");
//console.log(likeButtons);

likeButtons.forEach(like=> {
    like.addEventListener("click", () => {
        console.log('clicked')
    })
})

// function(){}
// ()=>{}
addButton.addEventListener("click", function() {

    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);

    //item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;

    //manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("marterial-icons", "check");
    clearIcon.classList.add("marterial-icons", "clear");
    checkIcon.innerText = "check";
    clearIcon.innerText = "clear";
    manage.classList.add("manage");
    manage.appendChild(checkIcon);
    manage.appendChild(clearIcon);

    const li = document.createElement("li");

    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    li.appendChild(li);



    //console.log(inputText.value) //input에 입력을 하고 추가 버튼을 누르면 value 값이 출력되게 된다.
    //const li = document.creatrElement("li");
    //li.innerText = inputText.value;
    //list.appendChild(li)
})
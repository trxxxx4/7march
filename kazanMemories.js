console.log("Что ты тут ищешь?");

const time = new Date();
console.log(`Время сейчас: ${time.getTime()}`);

const countTimeFromPost = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч. назад`;

    }
    else if ((time - loadTime) / 1000/60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000/60)} м. назад`;
    }
    else if (((time - loadTime)/1000/60/60/24 >= 1) && ((time - loadTime)/1000/60/60/24 < 7)){
        return `${Math.floor((time - loadTime)/1000/60/60/24)} д. назад`
    }


}


const countTimeFromComment = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч.`;

    }
    else if ((time - loadTime) / 1000/60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000/60)} мин.`;
    }
    else if (((time - loadTime)/1000/60/60/24 >= 1) && ((time - loadTime)/1000/60/60/24 < 7)){
        return `${Math.floor((time - loadTime)/1000/60/60/24)} нед.`
    }


}


console.log(new Date());
console.log(new Date(1709723043802));



const storiesUsers = [{
    id: 0,
    nickname: 'Ваша история',
    image: 'https://sun9-58.userapi.com/impf/c625717/v625717091/14041/97T9y1mReGc.jpg?size=304x326&quality=96&sign=f5d71ea60118a2a2150bf0e348748c75&type=album'
},
{
    id: 1,
    nickname: 'kisliyyy_',
    image: 'https://sun9-54.userapi.com/impg/F1U4TMD8yxRV5zKT_M_OA8D1aMglu2NgqJPzog/8tupQ69g-EA.jpg?size=522x522&quality=95&sign=0256a3aaf3993fc58dfcc1c57aa7cbe7&type=album'
},
{
    id: 2,
    nickname: 'GitHub',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/GH.png'
},
{
    id: 3,
    nickname: 'zxcVladdd',
    image: 'https://sun9-46.userapi.com/impg/Xl3Ihp5MsuTXO3cXyUNy3S4BBQ0ZrDVb6MGbPQ/hh3hpf87XY0.jpg?size=869x869&quality=95&sign=ff7c092d2bdabd7fdbfc02208de1c3d1&type=album'
},];





const posts = [{
    nickname: 'syndYYk007',
    avatar: 'https://sun9-70.userapi.com/impg/oI2Q2cjjUCZfVs3dvMdGUSRu2zoDVu_qV-nj8A/31weBK63law.jpg?size=960x1280&quality=95&sign=b5e400719c90691913bb94bdd71a1d3d&type=album',
    media: 'https://sun9-46.userapi.com/impg/C2QkI6zqCNtKNHuyIS6A-qXEdw2lWrxBX_UTiQ/_D32lz3Xkwg.jpg?size=2560x1922&quality=95&sign=02c316eaef932bd333e76346f90ed2fe&type=album',
    description: 'ну с 8 марта',
    likes: 104,
    loadTime: 1709723043802,
    
}, {
    nickname: 'bat9_bober',
    avatar: 'https://sun9-67.userapi.com/impg/vSlcLBJIqUNHmlj5CttxoiZxRyLllLlnJr42og/dtFvkCjGhs8.jpg?size=1196x1600&quality=95&sign=c944233de9b8cbe846aaa307f6d7df50&type=album',
    media: 'https://sun9-60.userapi.com/impg/0KeO-LpreEmc8vOrzNQsfAVAdF6r2gJYBQixxw/c0n1vZ53mX0.jpg?size=1190x901&quality=95&sign=d6cda6487777aa71ffd2e052128d8fc7&type=album',
    description: 'тимур ну тут надо придумать что написать',
    likes: 88,
    loadTime: 1709725017622,
}, {
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-34.userapi.com/impg/PQ03Wvbc0zPrllzmL8yEHZ4DKXJNtU6psLnE9w/DYA1NxCW7vw.jpg?size=2560x1704&quality=95&sign=1e806eeb3acc66ef4ff253e7304d4c1c&type=album',
    description: 'дотка как дотка',
    likes: 83,
    loadTime: 1709725628572,

}, {
    nickname: 'semenGolovin',
    avatar: 'https://sun9-40.userapi.com/impg/bEqunIc_yveicRF2XzJhLYhqTphWXvVxTsKRgw/U6cCE4lj1eQ.jpg?size=70x65&quality=95&sign=d652eb4fbe42a8fded438805e2a7d6cc&type=album',
    media: 'https://sun9-63.userapi.com/impg/pwi51yRSJcbsNzd8czdb1bqjBZ4ejCuNtcYn2g/pwYAFqsdrUc.jpg?size=1280x960&quality=95&sign=05c99c172c83e53747c049e63392bd13&type=album',
    description: 'я капитан белбурга',
    likes: 119,
    loadTime: 1709726032912,
}, {
    nickname: 'ba4uhhha',
    avatar: 'https://sun9-75.userapi.com/impg/Wt5tj7zBmHpz7jjC1hS4tvKLawNfbXActAFGSg/FUKgdfi1lFw.jpg?size=319x343&quality=95&sign=e79d9b42bfbfb166597d8f94e7394b4b&type=album',
    media: 'https://sun9-37.userapi.com/impg/xkXFJqkdTrI9uAhG3YcsB9lYuCX18IPopN-aOQ/v30xFo73348.jpg?size=2560x1704&quality=96&sign=6b29e05e95265628a1518341880990c5&type=album',
    description: 'а мне вообще нравится рыжикова',
    likes: 94,
    loadTime: 1709727020004,
    
}
]

const inputsDiv = document.querySelectorAll('.button__and__input__pole');
const inputs = document.querySelectorAll('.comment__input');
//inputButtons = document.querySelectorAll('.add__comment__button');
console.log(inputs);

const likeDefault = 0;

const setComment = (inputValue,  index) =>{
    console.log('zxc');
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');
    let avatarContainer =  document.createElement('div');
    avatarContainer.classList.add('add__comment__avatar__comment');
    let likeComment = document.createElement('div');
    likeComment.classList.add();
    let avatarImg = document.createElement('img');
    avatarImg.classList.add('add__comment__avatar__comment');
    let commentPoleContainer = document.createElement('div');
    commentPoleContainer.classList.add('comment__pole__container');
    let nickname = document.createElement('h2');
    nickname.classList.add('comment__user');
    let nicknameAndDateContainer = document.createElement('div');
    nicknameAndDateContainer.classList.add('nickname__and__data__container');
    let commentText = document.createElement('h2');
    commentText.classList.add('nickname');
    let  respondButton = document.createElement('h2');
    respondButton.classList.add('load__time');
    let commentLoadTime = document.createElement('h2');
    commentLoadTime.classList.add('load__time');
    avatarImg.src = storiesUsers[0].image;
    nickname.innerHTML = 'beKsayyy_';
    commentLoadTime.innerHTML = 'Только что'
    commentText.innerHTML = inputValue;
    respondButton.innerHTML = "Ответить";
    document.querySelectorAll('.post')[index].appendChild(commentContainer);
    commentContainer.appendChild(avatarContainer);
    avatarContainer.appendChild(avatarImg);
    commentContainer.appendChild(commentPoleContainer);
    commentContainer.appendChild(likeComment);
    commentPoleContainer.appendChild(nicknameAndDateContainer);
    nicknameAndDateContainer.appendChild(nickname);
    nicknameAndDateContainer.appendChild(commentLoadTime);
    commentPoleContainer.appendChild(commentText);
    commentPoleContainer.appendChild(respondButton);
}



const inputValueFunk = (text) =>{
    document.querySelectorAll('.add__comment__button').forEach((item, index)=>{
        item.addEventListener('click', setComment(text));
    });
};



//document.querySelectorAll('.add__comment__button').forEach((item, index)=>{
  //  item.addEventListener('click', setComment(item.value,  index));
//})


const flButton = () =>{
    
    inputs.forEach((item, index) => {
        
        if (item.value != ''){
            //console.log(item.value);
            document.querySelectorAll('.add__comment__button')[index].classList.remove('hidden');
            document.querySelectorAll('.add__comment__button')[index].classList.add('view__animation');
            
            document.querySelectorAll('.add__comment__button')[index].disabled = false;
            
            //document.querySelectorAll('.add__comment__button')[index].addEventListener('click', setComment(item.value,  index));
            
            //inputValueFunk(item.value);
            
            
                
        }
        else{
            document.querySelectorAll('.add__comment__button')[index].classList.remove('view__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.add('hidden__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.remove('hidden__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.add('hidden');
            document.querySelectorAll('.add__comment__button')[index].disabled = true;

        }
        
    });
}






//let button = document.createElement('button');
            //button.classList.add('add__comment__button');
            //button.innerHTML = '<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
            //inputsDiv[index].appendChild(button);

window.addEventListener('click', flButton);

window.addEventListener('keyup', flButton);



for (let i = 0; i < document.querySelectorAll('.post').length; i++) {
    if (posts[i].media) {
        document.querySelectorAll('.avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.nickname')[i].innerHTML = posts[i].nickname;

        document.querySelectorAll('.post__media')[i].src = posts[i].media;
        document.querySelectorAll('.likes')[i].innerHTML = `Нравится: ${posts[i].likes}`;
        document.querySelectorAll('#description__text')[i].innerHTML = posts[i].description;
        document.querySelectorAll('#nickname__weight')[i].innerHTML = posts[i].nickname;
        document.querySelectorAll('.add__comment__avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.load__time')[i].innerHTML = countTimeFromPost(posts[i].loadTime);
        

    }
    else {
        document.querySelectorAll('.avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.nickname')[i].innerHTML = posts[i].nickname;


        document.querySelectorAll('.likes')[i].innerHTML = `Понравилось: ${posts[i].likes}`;
        document.querySelectorAll('#description__text')[i].innerHTML = posts[i].description;
        document.querySelectorAll('#nickname__weight')[i].innerHTML = posts[i].nickname;
        document.querySelectorAll('.add__comment__avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.load__time')[i].innerHTML = countTimeFromPost(posts[i].loadTime)

    }

}



for (let i = 0; i < storiesUsers.length; i++) {
    document.querySelectorAll('.user__image')[i].src = storiesUsers[i].image;
    document.querySelectorAll('.user__name')[i].innerHTML = storiesUsers[i].nickname;
}



console.log('<3')
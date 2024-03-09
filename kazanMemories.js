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
    avatar: 'https://sun9-22.userapi.com/impg/g9ZyWaW3aQsvEEt9rPei2Bl6YI-wts0AEc8f2A/o4oe00raq7s.jpg?size=298x298&quality=95&sign=4a5be514cf3b4c560c98422c1e7e501d&type=album',
    media: 'https://sun9-38.userapi.com/impg/Qacg3t_p1uM0NI9NJ1_O6NVO1tCWLn4kPql5sg/5Nia9m0rj8g.jpg?size=1287x929&quality=96&sign=4f6e0360266884e8e1b453bb4bfbefc4&type=album',
    description: 'Кира, поздравляю с 8 марта) ',
    likes: 104,
    loadTime: 1709869833000,
    
},
{
    nickname: 'sMaxx1mov',
    avatar: 'https://sun9-17.userapi.com/impf/zp4b6ybUuj0v3ANlrSre1wnOXV7G1Pyfqbv9jg/x0fXuiNyvoo.jpg?size=65x62&quality=96&sign=054795abee1567d1882002574e022381&type=album',
    media: 'https://sun9-60.userapi.com/impg/0KeO-LpreEmc8vOrzNQsfAVAdF6r2gJYBQixxw/c0n1vZ53mX0.jpg?size=1190x901&quality=95&sign=d6cda6487777aa71ffd2e052128d8fc7&type=album',
    description: 'С лучшим другом в культурном заведении',
    likes: 173,
    loadTime: 1709725628572,

}, {
    nickname: 'bat9_bober',
    avatar: 'https://sun9-67.userapi.com/impg/vSlcLBJIqUNHmlj5CttxoiZxRyLllLlnJr42og/dtFvkCjGhs8.jpg?size=1196x1600&quality=95&sign=c944233de9b8cbe846aaa307f6d7df50&type=album',
    media: 'https://sun9-19.userapi.com/impg/xCzROq_EQkFM-BCgSfsqmtZsA3sDxGFzD-xkVg/h7FpaTDNeLw.jpg?size=564x384&quality=96&sign=d9962e55b094d63b75d62a13274b3ad3&type=album',
    description: 'Поздравляю тебя, Ксюша, с 8 марта. Желаю тебе счастья и чтобы все космонавты знали, что есть такая прекрасная звёздочка.',
    likes: 88,
    loadTime: 1709880213000,
}, {
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-44.userapi.com/impg/Zt1lWAANjtnnbrYRylzmTmK7NxPYinxQ-Th8QQ/cgFM9vA824A.jpg?size=223x204&quality=96&sign=3de84f8a7bb5d2b02dc3c7d9ad3e612f&type=album',
    description: 'Вика, поздравляю с 8 марта)',
    likes: 83,
    loadTime: 1709871633000,

}, {
    nickname: 's_zimkfff',
    avatar: 'https://sun9-54.userapi.com/impg/tXF5mdH2A0lbiqaH3DM-O6HJatMpkYf5Tso2UQ/N5Zx5ZqD29Y.jpg?size=85x83&quality=96&sign=a34b2a8d80a6d73cc33807e9100e8f34&type=album',
    media: 'https://sun9-24.userapi.com/impg/scXIdGaaiGSa53n1n5z7MbUUQ-t7ijjMNJoJPA/hdlWzZqScWQ.jpg?size=140x183&quality=96&sign=3d04d6fed6fede573bc7a3a813943287&type=album',
    description: `Полина, поздравляю с 8 марта от себя и от dollar'а (если конечно ещё помнишь такого)`,
    likes: 119,
    loadTime: 1709877513000,
},{
    nickname: 'Egoffman',
    avatar: 'https://sun9-23.userapi.com/impg/pwdNiAx-Owk-PS6drRGPXMRLKTRAfWWKmscM-w/R9xGEAZnzBY.jpg?size=130x145&quality=96&sign=780388a8f09c8acdc4d9684bbb4d93d9&type=album',
    media: 'https://sun9-77.userapi.com/impg/qqPrwvi3VGYkBOd4Hq4Kdv3a9sYjhCnRvWerHw/KxEc6usI81Y.jpg?size=2560x1920&quality=95&sign=d20fda9dc9ac5b6ddca018f401ebcbc1&type=album',
    description: 'zxc after fortnite and new drop',
    likes: 156,
    loadTime: 1709811393000,

},
 {
    nickname: 'ba4uhhha',
    avatar: 'https://sun9-75.userapi.com/impg/Wt5tj7zBmHpz7jjC1hS4tvKLawNfbXActAFGSg/FUKgdfi1lFw.jpg?size=319x343&quality=95&sign=e79d9b42bfbfb166597d8f94e7394b4b&type=album',
    media: 'https://sun9-37.userapi.com/impg/xkXFJqkdTrI9uAhG3YcsB9lYuCX18IPopN-aOQ/v30xFo73348.jpg?size=2560x1704&quality=96&sign=6b29e05e95265628a1518341880990c5&type=album',
    description: 'Даша, с 8 марта. Хотел бы пожелать оставаться такой же позитивной и яркой',
    likes: 94,
    
    loadTime: 1709850993000,
    
}, 
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-80.userapi.com/impg/6KS153Go8PtGOtB5FRyGRsyqI7WwX2sUr_QX-Q/o_i_EE-ZBAM.jpg?size=736x736&quality=95&sign=1c3437a23bc77d31dd81f3fefa6ebc0f&type=album',
    description: 'ну это на случай если это увидит кто-то кроме меня и тимура... ну привет (^_^) , только в личку не пишите что я тварь, я же просто тихий и странный <3',
    likes: 6,
    loadTime: 1709897603000,

    
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
            //setComment(item.value, index)
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
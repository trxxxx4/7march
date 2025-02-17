console.log("Что ты тут ищешь?");

const time = new Date();
console.log(`Время сейчас: ${time.getTime()}`);

const countTimeFromPost = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч. назад`;

    }
    else if ((time - loadTime) / 1000 / 60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000 / 60)} м. назад`;
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 < 7)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24)} д. назад`
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 / 7 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 / 7 < 4)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7)} н. назад`
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 30) && ((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 < 12)) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 10.04.24')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} мec. назад`
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 > 365) && ((time - loadTime) /  1000 / 60 / 60 / 24  <= 365*4)) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 11.02.25')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} г. назад`
    }
    else if (((time - loadTime) /1000 / 60 / 60 / 24  > 4*365) ) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 11.02.25')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} л. назад`
    }
}









const countTimeFromComment = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч.`;

    }
    else if ((time - loadTime) / 1000 / 60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000 / 60)} мин.`;
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 < 7)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24)} нед.`
    }


}


console.log('Время сейчас:', new Date());
console.log('Время когда я вытался разобраться с Date:', new Date(1709723043802));



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
    image: 'https://sun9-79.userapi.com/impg/CFLarQBrfJcAdwofisA8Fx2Wj8YCj7CxcALo1g/gtPJJqX1Hj4.jpg?size=320x320&quality=95&sign=69389ca75019c9a68141b63e7bdee3f7&type=album'},
{
    id: 3,
    nickname: 'zxcVladdd',
    image: 'https://sun9-46.userapi.com/impg/Xl3Ihp5MsuTXO3cXyUNy3S4BBQ0ZrDVb6MGbPQ/hh3hpf87XY0.jpg?size=869x869&quality=95&sign=ff7c092d2bdabd7fdbfc02208de1c3d1&type=album'
},];





const posts = [{
    nickname: 'syndYYk007',
    avatar: 'https://sun9-22.userapi.com/impg/g9ZyWaW3aQsvEEt9rPei2Bl6YI-wts0AEc8f2A/o4oe00raq7s.jpg?size=298x298&quality=95&sign=4a5be514cf3b4c560c98422c1e7e501d&type=album',
    media: 'https://sun9-80.userapi.com/impg/RUuk7Szntw4FoF5UFshI1ifWvOECzyTYkmi6Yw/_hQALL50ND0.jpg?size=283x359&quality=96&sign=bf2f6808281ef2f7a8b706fe6cb4fe6d&type=album',
    description: 'Кира, поздравляю с 8 марта ',
    likes: 104,
    loadTime: 1709869833000,
    id: 'timur__media'

},
{
    nickname: 'sMaxx1mov',
    avatar: 'https://sun9-17.userapi.com/impf/zp4b6ybUuj0v3ANlrSre1wnOXV7G1Pyfqbv9jg/x0fXuiNyvoo.jpg?size=65x62&quality=96&sign=054795abee1567d1882002574e022381&type=album',
    media: 'https://sun9-60.userapi.com/impg/0KeO-LpreEmc8vOrzNQsfAVAdF6r2gJYBQixxw/c0n1vZ53mX0.jpg?size=1190x901&quality=95&sign=d6cda6487777aa71ffd2e052128d8fc7&type=album',
    description: 'С лучшим другом в культурном заведении',
    likes: 173,
    loadTime: 1709725628572,
    id: 'sergey__media'

}, {
    nickname: 'bat9_bober',
    avatar: 'https://sun9-67.userapi.com/impg/vSlcLBJIqUNHmlj5CttxoiZxRyLllLlnJr42og/dtFvkCjGhs8.jpg?size=1196x1600&quality=95&sign=c944233de9b8cbe846aaa307f6d7df50&type=album',
    media: 'https://sun9-19.userapi.com/impg/xCzROq_EQkFM-BCgSfsqmtZsA3sDxGFzD-xkVg/h7FpaTDNeLw.jpg?size=564x384&quality=96&sign=d9962e55b094d63b75d62a13274b3ad3&type=album',
    description: 'Поздравляю тебя, Ксюша, с 8 марта. Желаю тебе счастья и чтобы все космонавты знали, что есть такая прекрасная звёздочка.',
    likes: 88,
    loadTime: 1709880213000,
    id: 'artem__media'
}, {
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-44.userapi.com/impg/Zt1lWAANjtnnbrYRylzmTmK7NxPYinxQ-Th8QQ/cgFM9vA824A.jpg?size=223x204&quality=96&sign=3de84f8a7bb5d2b02dc3c7d9ad3e612f&type=album',
    media2: 'https://sun9-15.userapi.com/impg/qdvl2som6jBBdVu_gzfMs4yZtTb14J41fWBFMQ/oGzU4EXGznU.jpg?size=878x878&quality=95&sign=9f7b99ef1139517fe7b3e9cf0188a1b6&type=album',
    description: 'Вика, ну как бы с 8 марта)',
    likes: 83,
    loadTime: 1709871633000,
    id: 'bagdish__media'

}, {
    nickname: 's_zimkfff',
    avatar: 'https://sun9-54.userapi.com/impg/tXF5mdH2A0lbiqaH3DM-O6HJatMpkYf5Tso2UQ/N5Zx5ZqD29Y.jpg?size=85x83&quality=96&sign=a34b2a8d80a6d73cc33807e9100e8f34&type=album',
    media: 'https://sun9-24.userapi.com/impg/scXIdGaaiGSa53n1n5z7MbUUQ-t7ijjMNJoJPA/hdlWzZqScWQ.jpg?size=140x183&quality=96&sign=3d04d6fed6fede573bc7a3a813943287&type=album',
    description: `Полина, поздравляю с 8 марта от себя и от dollar'а (если конечно ещё помнишь такого)`,
    likes: 119,
    loadTime: 1709877513000,
    id: 'semen__media'
}, {
    nickname: 'Egoffman',
    avatar: 'https://sun9-23.userapi.com/impg/pwdNiAx-Owk-PS6drRGPXMRLKTRAfWWKmscM-w/R9xGEAZnzBY.jpg?size=130x145&quality=96&sign=780388a8f09c8acdc4d9684bbb4d93d9&type=album',
    media: 'https://sun9-77.userapi.com/impg/qqPrwvi3VGYkBOd4Hq4Kdv3a9sYjhCnRvWerHw/KxEc6usI81Y.jpg?size=2560x1920&quality=95&sign=d20fda9dc9ac5b6ddca018f401ebcbc1&type=album',
    //media2: 'https://sun9-33.userapi.com/impg/rXPkAN7iq0cQkFu221L4r-nVeaqDRDKCeNl3kA/exOEkJS-VcI.jpg?size=604x402&quality=96&sign=47b781752a1623f76e888dae31bbb5f0&type=album',
    media2: 'ity_bw.jpg',
    description: 'zxc after fortnite and new drop',
    likes: 156,
    loadTime: 1709811393000,
    id: 'sergey__media'

},
{
    nickname: 'ba4uhhha',
    avatar: 'https://sun9-75.userapi.com/impg/Wt5tj7zBmHpz7jjC1hS4tvKLawNfbXActAFGSg/FUKgdfi1lFw.jpg?size=319x343&quality=95&sign=e79d9b42bfbfb166597d8f94e7394b4b&type=album',
    media: 'https://sun9-51.userapi.com/impg/XOQOm6_RPrVkpODiHU3WSGYBa-6GEJ3Brj8I6A/h0B8kzEuinE.jpg?size=1035x836&quality=96&sign=1f013d1d3bd458b1335e00fced57d7fe&type=album',
    media2: 'https://sun9-75.userapi.com/impg/6IV3i1d7-xeTOz6sMG_1wlPuLai2STmjvNcQ-A/uy37oiQ6J28.jpg?size=435x343&quality=96&sign=bc79d7345661fde66b9433a0d787d11f&type=album',
    description: 'Даша, с 8 марта. Хотел бы пожелать оставаться такой же позитивной и яркой',
    likes: 94,

    loadTime: 1709850993000,
    id: 'matvey__media'

},
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-80.userapi.com/impg/6KS153Go8PtGOtB5FRyGRsyqI7WwX2sUr_QX-Q/o_i_EE-ZBAM.jpg?size=736x736&quality=95&sign=1c3437a23bc77d31dd81f3fefa6ebc0f&type=album',
    description: 'ну это на случай если это увидит кто-то кроме меня и тимура... ну привет (^_^). upload 8.03.24',
    likes: 24,
    loadTime: 1709897603000,
    id: 'bagdish__media__ended'


},
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun51-1.userapi.com/impg/PO2GzG5OCeIWS9wzS1Tpr_GqhqCiaCY3Jtuo9w/_C29kYtb6Ag.jpg?size=1080x771&quality=96&sign=e793293f8034966aa663f5769513a502&type=album',
    media2: 'https://sun9-59.userapi.com/impg/ARUAEBzak1v-QIKjs3IGah00BWkywT9DGDnlMw/ccotZ5c0UXI.jpg?size=735x728&quality=96&sign=7de79f69a5f7bd77465065d76bcd0ccf&type=album',
    media3: 'https://sun9-54.userapi.com/impg/KpH5N8c3epYx2XpY_OGG3XaiqjqCKd3NSyYwNA/6LhDGi3Vc6U.jpg?size=1280x512&quality=96&sign=de20110ebdb3e1ce269d34350b858e7e&type=album',
    description: 'deadinside ✓ emo ✓ drain ✓ epileptic ✓ paranoid ✓ toxic ✓ bipolar ✓ depressed ✓ tilted ✓ antisocial ✓ sad ✓ broken... 24.03.24 переделал структуру, а 27.03.24 сделал нормально свайпер',
    likes: 11,
    loadTime: 1711547168199,
    id: 'update__site__bagdish__media'


}
]

const likeDefault = 0;





const createPost = (index) => {
    const main = document.querySelector('.main');


    const post = document.createElement('div');
    post.classList.add('post');
    main.appendChild(post);
    const postHeadLineContainer = document.createElement('div');
    postHeadLineContainer.classList.add("post__head__line__container");
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add("media__container");
    const postFooterContainer = document.createElement('div');
    postFooterContainer.classList.add('post__footer__container');
    const postHeadLine = document.createElement('div');
    postHeadLine.classList.add('post__head__line');
    post.appendChild(postHeadLineContainer);
    post.appendChild(mediaContainer);
    post.appendChild(postFooterContainer);

    postHeadLineContainer.appendChild(postHeadLine);


    const avatarAndNickname = document.createElement('div');
    avatarAndNickname.classList.add('avatar__and__nickname');
    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add('settings__div');
    settingsThreePoints = document.createElement('img');
    settingsThreePoints.src = 'settingThreePoints.svg';
    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = posts[index].avatar;
    const nickname = document.createElement('h2');
    nickname.classList.add('nickname');
    nickname.innerHTML = posts[index].nickname;
    postHeadLine.appendChild(avatarAndNickname);
    postHeadLine.appendChild(settingsDiv);
    avatarAndNickname.appendChild(avatar);
    avatarAndNickname.appendChild(nickname);
    settingsDiv.appendChild(settingsThreePoints);


    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    postFooterContainer.appendChild(postFooter);
    const likeCommentRepostBooksmarksLine = document.createElement('div');
    likeCommentRepostBooksmarksLine.classList.add('like__comment__repost__booksmarks__line');
    postFooter.appendChild(likeCommentRepostBooksmarksLine);
    const likeCommentRepost = document.createElement('div');
    likeCommentRepost.classList.add('like__comment__repost');
    const bookmarks = document.createElement('div');
    bookmarks.classList.add('bookmarks');
    const bookmark = document.createElement('img');
    bookmark.src = 'Bookmark.svg';
    bookmarks.appendChild(bookmark);
    likeCommentRepostBooksmarksLine.appendChild(likeCommentRepost);
    likeCommentRepostBooksmarksLine.appendChild(bookmarks);
    const like = document.createElement('img');
    like.id = 'heart';
    like.src = 'Heart.svg';
    const comment = document.createElement('img');
    comment.src = "Comment.svg";
    const plane = document.createElement('img');
    plane.src = 'https://sun9-61.userapi.com/impg/BkKnjZ8krpvg-9tRml6xnu5i41JuVMVy9Rd2HQ/S3aAGHTPoOU.jpg?size=167x157&quality=96&sign=ac11f12a912a5816565f345d2b8e6195&type=album';
    plane.id = 'plane';
    likeCommentRepost.appendChild(like);
    likeCommentRepost.appendChild(comment);
    likeCommentRepost.appendChild(plane);
    const likes = document.createElement('h2');
    likes.classList.add('likes');
    likes.innerHTML = `Нравится: ${posts[index].likes}`;
    postFooter.appendChild(likes);
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description__container');
    postFooter.appendChild(descriptionContainer);
    const description = document.createElement('p');
    description.classList.add('description');



    descriptionContainer.appendChild(description);
    const nicknameWeight = document.createElement('span');
    const descriptionText = document.createElement('span');
    nicknameWeight.id = 'nickname__weight';
    descriptionText.id = 'description__text';
    nicknameWeight.innerHTML = posts[index].nickname;
    descriptionText.innerHTML = posts[index].description;
    description.appendChild(nicknameWeight);
    description.appendChild(descriptionText);
    const addComment = document.createElement('div');
    addComment.classList.add('add__comment');
    postFooter.appendChild(addComment);
    const addCommentAvatar = document.createElement('img');
    addCommentAvatar.classList.add('add__comment__avatar');
    addCommentAvatar.src = posts[index].avatar;

    addComment.appendChild(addCommentAvatar);
    const buttonAndInputPole = document.createElement('div');
    buttonAndInputPole.classList.add('button__and__input__pole');
    addComment.appendChild(buttonAndInputPole);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Добавьте комменарий...';
    input.classList.add('comment__input');
    buttonAndInputPole.appendChild(input);
    const button = document.createElement('button');
    button.classList.add('add__comment__button');
    button.classList.add('hidden');
    button.disabled = true;
    const pointer = document.createElement('img');
    pointer.src = 'Pointer.svg';
    button.appendChild(pointer);
    buttonAndInputPole.appendChild(button);

    const postData = document.createElement('div');
    postData.classList.add('post__data');

    const loadTime = document.createElement('h2');
    loadTime.innerHTML = countTimeFromPost(posts[index].loadTime);
    loadTime.classList.add('load__time');

    postData.appendChild(loadTime);
    postFooter.appendChild(postData);




    if (!posts[index].media2) {
        const media = document.createElement('img');
        media.classList.add('media__container');
        media.src = posts[index].media;
        media.setAttribute('id', posts[index].id);
        mediaContainer.appendChild(media);

    }
    else {



        mediaContainer.id = 'media__container';
        const swiperContainer = document.createElement('div');
        swiperContainer.setAttribute('class', 'swiper', 'mySwiper');
        swiperContainer.classList.add('mySwiper');
        //swiperContainer.setAttribute('class', 'mySwiper');

        mediaContainer.appendChild(swiperContainer);
        {/*media1 = document.createElement('div');
        media1.innerHTML = "Slide1";
        media2 = document.createElement('div');
        media2.innerHTML = "Slide2";*/}
        //swiperContainer.setAttribute('id', posts[index].id);

        media1 = document.createElement('img');

        media1.src = posts[index].media;
        media2 = document.createElement('img');

        media2.src = posts[index].media2;
        //swiperContainer.appendChild(media1);
        media1.classList.add('swiper-slide');
        media2.classList.add('swiper-slide');
        const swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
        swiperContainer.appendChild(swiperWrapper);

        
        swiperWrapper.appendChild(media1);
        swiperWrapper.appendChild(media2);
        //swiperContainer.appendChild(media2);
        const swiperPadignation = document.createElement('div');
        swiperPadignation.classList.add('swiper-pagination');
        swiperContainer.appendChild(swiperPadignation);

        if (posts[index].media3) {
            media3 = document.createElement('img');
            media3.src = posts[index].media3;
            media3.classList.add('swiper-slide');
            swiperWrapper.appendChild(media3);
        }


    }
    



}




posts.forEach((item, index) => {
    createPost(index);
})





const setComment = (inputValue, index) => {

    inputs[index].value = '';
    console.log('zxc');
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');
    let avatarContainer = document.createElement('div');
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
    let respondButton = document.createElement('h2');
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


//inputs.forEach((item, index)=>{
//document.querySelectorAll('.add__comment__button').forEach((el, i)=>{
//   el.addEventListener('click', setComment(item.value, index))
// })
//})




//document.querySelectorAll('.add__comment__button').forEach((item, index)=>{
//  item.addEventListener('click', setComment(item.value,  index));
//})
const inputs = document.querySelectorAll('.comment__input');
const inputButtons = document.querySelectorAll('.add__comment__button');



inputButtons.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (item.disabled == false) {
            setComment(inputs[index].value, index)
        }

    })
})

const flButton = () => {

    inputs.forEach((item, index) => {

        if (item.value != '') {
            //console.log(item.value);
            document.querySelectorAll('.add__comment__button')[index].classList.remove('hidden');
            document.querySelectorAll('.add__comment__button')[index].classList.add('view__animation');

            document.querySelectorAll('.add__comment__button')[index].disabled = false;

            //document.querySelectorAll('.add__comment__button')[index].addEventListener('click', setComment(item.value,  index));
            //setComment(item.value, index)
            //inputValueFunk(item.value);



        }
        else {
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

document.querySelectorAll('.comment__input').forEach((item) => {
    item.addEventListener('input', flButton)
});




{/*
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
*/}


for (let i = 0; i < storiesUsers.length; i++) {
    document.querySelectorAll('.user__image')[i].src = storiesUsers[i].image;
    document.querySelectorAll('.user__name')[i].innerHTML = storiesUsers[i].nickname;
}



console.log('<3');


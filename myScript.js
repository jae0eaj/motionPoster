
/* 슬라이드 이미지 부분 */

let nowIndex = 1;

const oneSlide = document.querySelector('#oneSlide');


const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');




const leftA = document.querySelector('#leftA');
const rightA = document.querySelector('#rightA');


bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);



leftA.addEventListener('click', moveLeft);
rightA.addEventListener('click', moveRight);


//move first image.
function moveA()
{
    oneSlide.style.transform = 'translate(0px)'
    nowIndex =1;
}

//move second image.
function moveB()
{
    oneSlide.style.transform = 'translate(-520px)'
    nowIndex =2;
}

//move third image.
function moveC()
{
    oneSlide.style.transform = 'translate(-1040px)'
    nowIndex =3;
}








function moveLeft()
{
    if(nowIndex ==1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}


function moveRight()
{
    if(nowIndex ==4)
    {
        nowIndex =4;
    }

    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);

}




function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}













/*마우스 오버 메뉴 부분*/











let imgData = [
    'img/img01.png',
    'img/img02.png',
    'img/img03.png',
    'img/img04.png',
];

/*
let imgName = [
    '아프가니스탄 정보',
    '탈레반',
    '분쟁원인',
    '냉전 미국',
];
*/


let myPhotos = document.querySelectorAll('.thumbnail');
/*console.log(myPhotos);*/
let imgTag = document.querySelectorAll('.imgTag');
/*let myTitle= document.querySelectorAll('.textField');*/


for(let i = 0; i < myPhotos.length; i++)
{
    imgTag[i].src = imgData[i];
    /*myTitle[i].textContent = imgName[i];*/

    myPhotos[i].addEventListener('mouseover', overFn);
    myPhotos[i].addEventListener('mouseout', outFn);
}


function overFn(e)
{
    e.path[1].querySelector('.imgTag').classList.add('on');
    e.path[0].classList.add('on');
}

function outFn(e)
{
    e.path[1].querySelector('.imgTag').classList.remove('on');
    e.path[0].classList.remove('on');
}







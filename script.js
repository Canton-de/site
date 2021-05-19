const readMore = (text,btn,textPos,arrowsPos,hideText,readMoreText) =>{
    let switcher = false;
    return () =>{
        if(!switcher){
            textHeight = text.offsetHeight;
            text.style.height="auto";
            btn.children[textPos].innerHTML = hideText
            btn.children[arrowsPos].classList.add('arrows-to-top');
        }else{
            if(window.innerHeight<768){
                text.style.height='90px'
            }else {
                text.style.height='160px'
            }
            text.style.height=textHeight+'px';
            btn.children[textPos].innerHTML = readMoreText
            btn.children[arrowsPos].classList.remove('arrows-to-top')
        }
        switcher = !switcher
    }
}

const makeMenuItemsActive = ()=>{
    const menuItems = document.querySelectorAll('.menu__list-item:not(.active)');
    menuItems.forEach((el)=>{
        console.log(1)
        el.addEventListener('mouseover',()=>{
            console.log(1)
            el.classList.add('active-item')
        })
        el.addEventListener('mouseleave',()=>{
            el.classList.remove('active-item')
        })
    })
}
makeMenuItemsActive()
const makeTable = () =>{
    const tableDatas = document.querySelectorAll('.price-slider__service-desc')
    tableHeads = document.querySelectorAll('.price-slider__service-title')
    const table = document.createElement('table')
    
    const priceSlider = document.querySelector('.price-among-slider')
    const rowCounts = Math.ceil(tableDatas.length/3);
    const makeOrder = document.querySelector('.make-order')
    for(let i = 0 ;i< rowCounts;i++){
        const tr = document.createElement('tr')
        
        
        for(let j = 0;j < 3;j++){
            
            const td = document.createElement('td')
            
            td.innerHTML = tableDatas[i*3+j].innerHTML
            tr.appendChild(td)
            
            if(j==2){
                const td = document.createElement('td')
                const copyOrder = makeOrder.cloneNode(true)
                td.appendChild(copyOrder)
                tr.appendChild(td)
            }
        }
        table.appendChild(tr)
        }
    priceSlider.classList.add('table-among')
    priceSlider.appendChild(table)
}
makeTable()
const makeShowMore = () =>{
    serviceText = document.querySelector('.service__text-wrapper');
    readMoreBtn = document.querySelector('.read-more')
    const readMoreFunc = readMore(serviceText,readMoreBtn,0,1,'Скрыть','Читать далее')
    readMoreBtn.addEventListener('click',()=>{
        readMoreFunc();
    })
    imageText = document.querySelector('.image-slider__wrapper');
    showMoreBtn = document.querySelector('.show-more')
    const showMoreFunc = readMore(imageText,showMoreBtn,0,1,'Скрыть','Показать все')
    showMoreBtn.addEventListener('click',()=>{
        showMoreFunc();
    })  
    imageText2 = document.querySelector('.technics-slider__wrapper');
    showMoreBtn2 = document.querySelector('.show-more-2')
    const showMoreFunc2 = readMore(imageText2,showMoreBtn2,0,1,'Скрыть','Показать все')
    showMoreBtn2.addEventListener('click',()=>{
        showMoreFunc2();
    }) 
}
makeShowMore()

const opacityWrapper = document.querySelector('.opacity-wrapper')
const cursorWrapper = document.querySelector('.cursor-wrapper') 

funcShowHideObj = (elemsToHide,objectsToShow,obj,shouldAddScroll = false,translateX,opacityObjs) =>{
    let isHidden = true
    burgerBtn.style.pointerEvents="auto"
    const showObj = (event)=>{
            if(isHidden){
                obj.style.transform = 'translate(0,0)'
                opacityObjs.forEach(el=>{
                    el.style.opacity = '0.3'
                })
                isHidden = false
                opacityWrapper.style.pointerEvents="none"
                if(window.innerHeight<window.innerWidth){
                    obj.style.position="absolute";
                }
                cursorWrapper.classList.add('invisible')
            }
            event.stopPropagation()
        }
    
    const hideObj = ()=>{
        if(!isHidden){
            obj.style.transform=`translate(${translateX}%,0)`
            isHidden = true
            opacityWrapper.style.pointerEvents="auto"
            cursorWrapper.style.overflow= 'hidden';
            cursorWrapper.classList.remove('invisible')
            obj.style.position="fixed";
            opacityObjs.forEach(el=>{
                el.style.opacity = '1'
            })
        }
        
    }
    elemsToHide.forEach((el)=>{
        el.addEventListener('click',(e)=>{
        hideObj()
    })
    })
    
    objectsToShow.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            showObj(e,obj)
        })
    }) 
}   
const menu = document.querySelector('.menu')
const burgerBtn = document.querySelector('.header__burger')
const crossButton = document.querySelector('.cross-button')
funcShowHideObj([cursorWrapper,crossButton],[burgerBtn],menu,false,-120,[opacityWrapper],true)

const feedBackPopUp1 = document.querySelector('.feed-back-1')
const feedBackPopUp2 = document.querySelector('.feed-back-2')
const chatMenuBtn = document.querySelector('.chat-btn')
const feedBackCrossBtn1 = document.querySelector('.feed-back__cross-button--1')
const feedBackCrossBtn2 = document.querySelector('.feed-back__cross-button--2')
funcShowHideObj([cursorWrapper,feedBackCrossBtn1],[chatMenuBtn],feedBackPopUp1,true,120,[opacityWrapper,menu])

const topChatBtn = document.querySelector('.top-chat-btn')
funcShowHideObj([cursorWrapper,feedBackCrossBtn1],[topChatBtn],feedBackPopUp1,false,120,[opacityWrapper,menu])

const menuCallBtn = document.querySelector('.menu-call-btn')
const topCallBtn = document.querySelector('.top-call-btn')
funcShowHideObj([cursorWrapper,feedBackCrossBtn2],[topCallBtn],feedBackPopUp2,false,120,[opacityWrapper,menu])
funcShowHideObj([cursorWrapper,feedBackCrossBtn2],[menuCallBtn],feedBackPopUp2,true,120,[opacityWrapper,menu])

 
const resize = () =>{
    const serviceTitle = document.querySelector('.service__title');
    const decoration = document.querySelector('.service__title-decoration')
    
    const serviceTitleX = serviceTitle.getBoundingClientRect().x
    decoration.style.left = (`-${serviceTitleX+2}px`)       
    const makeLeftMargin= (obj,columnCount)=>{
        for(let i = 0; i < obj.length;i++){
            obj[i].style.marginLeft=0;
        }
        const objWidth =obj[0].offsetWidth 
        const containerWidth = document.querySelector('.container').offsetWidth
        const margin = (containerWidth - objWidth * columnCount)/(columnCount-1)*(0.96);
        for(let i = 0;i < columnCount; i++){
            obj[i].classList.add('remove-top-margin');
        }
        for(let i = 0; i < obj.length;i++){
            if(i%columnCount!=0){
                obj[i].style.marginLeft=margin+'px';
            }
        }
    }
    if(window.innerWidth>=768&&window.innerWidth<1440){
        const technicsSliders = document.querySelectorAll('.technics-slider__slide');
        makeLeftMargin(technicsSliders,3)
        const imageSliders = document.querySelectorAll('.image-slider__swiper');
        makeLeftMargin(imageSliders,3)
    }
    if(window.innerWidth>=1440){
        document.querySelector('.menu').style.position="static"
        document.querySelector('.menu').style.transform="none"
        const technicsSliders = document.querySelectorAll('.technics-slider__slide');
        makeLeftMargin(technicsSliders,4)
        const imageSliders = document.querySelectorAll('.image-slider__swiper');
        makeLeftMargin(imageSliders,4)
    }
}



let mobileSwipers;
let topSwiper;
const slider = document.querySelector('.slider')
let isMobile = false
let isMediumWidth = false
const addMobileSwiper= ()=>{
    if(window.innerWidth<768&&!isMobile){
        mobileSwipers = new Swiper (".image-slider,.technics-slider,.price-slider", {
            slidesPerView:"auto",
            spaceBetween: 16,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          isMobile=true
    }
    if(window.innerWidth>=768&&isMobile){
        mobileSwipers.forEach(el=>el.destroy())
        isMobile=false
    }
    if(window.innerWidth<1440 && !isMediumWidth){
        topSwiper = new Swiper('.service__slider',{
            slidesPerView:"auto",
            spaceBetween: 16,
          });
          isMediumWidth = true
    }
    if(window.innerWidth>=1440 && isMediumWidth){
        topSwiper.destroy()
        isMediumWidth=false
    }
}

addMobileSwiper()
resize()
window.addEventListener('resize',()=>{
    resize();
    addMobileSwiper()
})

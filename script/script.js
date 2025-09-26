const header = document.getElementById('header');

// 2. 화면스크롤시 .header_bg 적용하기 / 제거하기
// 변수선언
let docElem = document.documentElement, offset, scrollPos, docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight!=0){
  offset=docHeight/12;
}

// 화면 스크롤시 세로 스크롤값을 출력해보기
window.addEventListener('scroll', function(){
  scrollPos = docElem.scrollTop;
  console.log(scrollPos);

  if(scrollPos>=900){
    header.classList.add('header_bg');
    header.addEventListener('mouseleave', function(){
      header.classList.add('header_bg');
    });
  }else{ // 스크롤 높이가 그 밖에 높이가 되면 아래 서식을 적용(높이가 10이하)
    header.addEventListener('mouseleave', function(){
      header.classList.remove('header_bg');
    });
    header.classList.remove('header_bg'); // 스크롤 높이가 10이상인 경우에서 헤더 배경색을 제거
  }
});



// 메인메뉴 클릭시 해당 아이디 박스요소가 스크롤 되면서 상단으로 올라오게 하기
const menuLinks=document.querySelectorAll('#gnb > ul > li > a');

for(let i=0; i<menuLinks.length; i++){
  menuLinks[i].addEventListener('click', function(e){
    e.preventDefault();
    const targetId=this.getAttribute('href').substring(1);
    const targetSection=document.getElementById(targetId);
    window.scrollTo({
      top:targetSection.offsetTop,
      behavior:'smooth'
    });
  });
}

// TOP버튼 위로 부드럽게 올라오게 하기
const topBtn=document.querySelector('footer #top_btn');
topBtn.addEventListener('click', function(e){
  e.preventDefault();
  const targetIdd=this.getAttribute('href').substring(1); 
  const targetSectionn=document.getElementById(targetIdd); 
  window.scrollTo({ 
    top:targetSectionn.offsetTop,
    behavior:'smooth'
  });
});

window.addEventListener('scroll',function(){
  if(scrollPos>=900){
    topBtn.style.display="block";
  }else{
    topBtn.style.display="none";
  }
});
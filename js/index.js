function showHide(elements) {
    for (e of elements){
        if (document.getElementById(e)) { 
            var obj = document.getElementById(e); 
            obj.classList.toggle("active")
        }else alert(e)
    }
}

function buttontogle(elements, otherbuttonid, modalowner, modalother){
    for (e of elements){
        if (document.getElementById(e)) { 
            var obj = document.getElementById(e); 
            obj.classList.toggle("active")
        }
    }
    var obj = document.getElementById(modalowner); 
    obj.classList.toggle('active')
    if (document.getElementById(otherbuttonid)) { 
        var obj = document.getElementById(otherbuttonid); 
        if (obj.classList.contains('active')){
            obj.classList.remove('active')
            document.getElementById(modalother).classList.remove('active')
        }
    }
}

function showHideFlex(elements) {
    for (e of elements){
        if (document.getElementById(e)) { 
            var obj = document.getElementById(e); 
            if (obj.style.display != "flex") { 
                obj.style.display = "flex"; 
                obj.style.justifyContent = "center"
                obj.style.alignItems= "center"
            }
            else obj.style.display = "none";
        }
    }
}   

function onMouseover() {

    if (this.id == "about"){
        var modal = document.getElementById("test1")
        modal.classList.add("active")
    }else{
        var modal2 = document.getElementById("test2")
        modal2.classList.add("active")

    }
  }

  function onMouseout() {
    if (this.id == "about"){
        var modal = document.getElementById("test1")
        modal.classList.remove("active")
    }else{
        var modal2 = document.getElementById("test2")
        modal2.classList.remove("active")
  }
}
let items = document.getElementsByClassName('aboutmission')
for (let i = 0; i < items.length; ++i) {
  const item = items[i]
  item.addEventListener('mouseover', onMouseover)
  item.addEventListener('mouseout', onMouseout)
}


var flkty = new Flickity( '.gallery', {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false
  });

  var flkty = new Flickity( '.gallery2', {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false
  });

  

  var flkty = new Flickity( '.gallery3', {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false
  });

  var flkty = new Flickity( '.gallery4', {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false
  });

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById("menu1").classList.remove('active')
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('amin');
    }
  });
});

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('colored');
    }
  });
});


var arr = document.querySelectorAll('.anim_scroll')
arr.forEach(i => {
  observer.observe(i)
})

var arr = document.querySelectorAll('.graytocolor')
arr.forEach(i => {
  observer1.observe(i)
})


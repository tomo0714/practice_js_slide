// DOM
const sections = document.getElementsByClassName('sections')[0];
const slideWidth = document.getElementsByClassName('slide')[0].offsetWidth - 6;
const button = document.getElementsByClassName('buttons')[0].getElementsByTagName('a');

// Function
function current(el) {
    document.getElementsByClassName('current')[0].className = '';
    el.classList.add('current');
}

function animation(dis, dru) {
    sections.style.transitionProperty = 'left';
    sections.style.transitionDuration = dru + 'ms';
    sections.style.left = dis * -slideWidth + 'px';
}

function slide(e){
    e.preventDefault();
    const el = e.target;
    const dis = el.innerHTML - 1;
    animation(dis, 300);
    current(el);
}

// Event
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', slide);
}


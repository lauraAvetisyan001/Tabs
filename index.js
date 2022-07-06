const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');


tabs.addEventListener('click', e => {
const currTab = e.target.dataset.btn;
changeClass(e.target);
for(i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
    if(contents[i].dataset.content == currTab) {
        contents[i].classList.add('active');
    }
}
});

const changeClass = el => {
    for(i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    } 
     el.classList.add('active');
}
let form = document.querySelector('.form');
let input1 = document.querySelector('.int1');
let input2 = document.querySelector('.int2');
let center = document.querySelector('.center');
let all_center = document.querySelector('.all-center');
let button = document.querySelector('.btn');

form.addEventListener('submit', function(evt){
    evt.preventDefault();

    let inpvalue1 = parseInt(input1.value);
    input1.value = '';

    let inpvalue2 = Number(input2.value);
    input2.value = '';

    let a = inpvalue1 + inpvalue2;
    let b = inpvalue1 - inpvalue2;
    let c = inpvalue1 * inpvalue2;
    let d = inpvalue1 / inpvalue2;

    center.innerHTML = "<div>Plus: " + a + "<div>";
    center.innerHTML += "<div>Minus: " + b + "<div>";
    center.innerHTML += "<div>Times: " + c + "<div>";
    center.innerHTML += "<div>Division: " + d + "<div>";
});

button.addEventListener('click', function(){
    if(all_center.classList.contains('all-center-new')){
        all_center.classList.remove('all-center-new');
    } else {
        all_center.classList.add('all-center-new');
    }
});
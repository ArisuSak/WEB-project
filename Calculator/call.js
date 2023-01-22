(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //click number function
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    //eual function
    equal.addEventListener('click', function(e) {
        if (screen.value == '') {
            screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });
    //clear the input function
    clear.addEventListener('click', function(e) {
        screen.value = "";
    });
})();
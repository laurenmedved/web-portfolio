
var num = 1;
var done = 0;
const changedText = document.querySelector('.changeMe');
const changeButton = document.querySelector('.changeMe2');
changedText.textContent = 'Begin Counting!';
changeButton.textContent = 'Start!';

$(function(){
	$('#start-button').click(function(){
        changeButton.textContent = 'Start!';
		e1 = $('.object'+num.toString());
        e1.addClass('animateObject');

        if (Boolean(done)){

            while(num>0){
                e1 = $('.object'+num.toString());
                e1.removeClass('animateObject');
                num = num - 1;
            }
            
            changedText.textContent = 'Begin Counting!';

            e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function (e) {
                e1.addClass('animateObject');
            });

            done = 0;
        }
        else if (num>10){
            changedText.style.fontSize = "calc(40% + .9vw + .9vh)";
            changedText.textContent = 'Congrats! You finished!';
            changeButton.textContent = 'Restart?';
            done = 1;
        }
        else{ 
            changedText.style.fontSize = "100px";
            changeButton.textContent = 'Count!';
            changedText.textContent = num.toString();
            num = num + 1 ;
        }

	});
});



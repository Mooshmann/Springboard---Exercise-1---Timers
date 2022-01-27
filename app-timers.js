

function countdown(count){
    let down = setInterval(function(){
        count--;
        if(count <= 0){
            clearInterval(down);
            console.log("DONE!");
        }
        else{
            console.log(count);
        }
    }, 1000)
    }

    function randomGame(){
        let number;
        let tries = 0;
        let random = setInterval(function(){
            number = Math.random();
            tries++;
            if(number > .75){
                clearInterval(random);
                console.log(`It took ${tries} try/tries.`);
            }
        }, 1000);
    }
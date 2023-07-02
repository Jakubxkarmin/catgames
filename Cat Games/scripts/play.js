var option = document.getElementById("opcje");
var play = document.getElementById("play");
var auth = document.getElementById("auth")

play.addEventListener('click', function(){
    if (option.value === 'Pet sim c') {
        window.open('https://chat.openai.com/');
    }
    if (option.value === 'Big paintbal'){
        window.open('')
    }
    if(option.value === "Pet sim 1")
    {
        window.open('')
    }
    if(option.value === '')
    {
        window.alert('You must select game','Error')
    }
})
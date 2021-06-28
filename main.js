let input = document.getElementById("userInput");
let status = document.getElementById("status");
let enter = document.getElementById("enter");
let original_num = Math.floor(Math.random()*100);

input.addEventListener("change",function(){
    let input_num = input.value;
    if((input_num<0) || (input_num>100) || (isNaN(input_num)==true)){
        status.innerHTML = `Please enter any number between range from 1 to 100.🙁`;
    }
    else if(input_num == original_num){
        status.innerHTML = `Congratulations!!! You Guessed the number correct.<br>${input_num} was the number.🥳🥳🥳`;
    }
    else if((input_num > original_num) && (input_num > original_num+30)){
        status.innerHTML = `OOPS! ${input_num} was too high guess.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-30)){
        status.innerHTML = `OOPS! ${input_num} was too low guess.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+20)){
        status.innerHTML = `OOPS! ${input_num} was little high guess.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-20)){
        status.innerHTML = `OOPS! ${input_num} was little low guess.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+10)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-10)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are close.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+5)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are very close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-5)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are very close.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+3)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are so very close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-3)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are so very close.🥴`;
    }
    else{
        status.innerHTML = `${input_num}, You are very much closer to the original number.😍`;
    }
})
enter.addEventListener("click",function(){
    let input_num = input.value;
    if((input_num<0) || (input_num>100) || (isNaN(input_num)==true)){
        status.innerHTML = `Please enter any number between range from 1 to 100.🙁`;
    }
    else if(input_num == original_num){
        status.innerHTML = `Congratulations!!! You Guessed the number correct.<br>${input_num} was the number.🥳🥳🥳`;
    }
    else if((input_num > original_num) && (input_num > original_num+30)){
        status.innerHTML = `OOPS! ${input_num} was too high guess.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-30)){
        status.innerHTML = `OOPS! ${input_num} was too low guess.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+20)){
        status.innerHTML = `OOPS! ${input_num} was little high guess.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-20)){
        status.innerHTML = `OOPS! ${input_num} was little low guess.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+10)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-10)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are close.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+5)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are very close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-5)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are very close.🥴`;
    }
    else if((input_num > original_num) && (input_num > original_num+3)){
        status.innerHTML = `OOPS! ${input_num} was little high guess, but you are so very close.😲`;
    }
    else if((input_num < original_num) && (input_num < original_num-3)){
        status.innerHTML = `OOPS! ${input_num} was little low guess, but you are so very close.🥴`;
    }
    else{
        status.innerHTML = `${input_num}, You are very much closer to the original number.😍`;
    }
})
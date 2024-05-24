var questions=[
    {
        question:'What does html stand for?',
        option1:'hyper link',
        option2:'hypertext',
        option3:'hyper tool',
    },
    {
        question:'What does html  for?',
        option1:'hyper link',
        option2:'hypertext',
        option3:'hyper tool',
    },
    {
        question:'What  html stand for?',
        option1:'hyper link',
        option2:'hypertext',
        option3:'hyper tool',
    },
    {
        question:'What does html stand?',
        option1:'hyper link',
        option2:'hypertext',
        option3:'hyper tool',
    },
]



var index=0


 function nextques(){
if(index>questions.length-1){
    alert('Questions are finished.')
}
else{
    var getques=document.getElementById('ques')
    getques.innerText=questions[index].question
    var opt1 = document.getElementById('opt1')
    opt1.innerText=questions[index].option1
    var opt2 = document.getElementById('opt2')
    opt2.innerText=questions[index].option2
    var opt3 = document.getElementById('opt3')
    opt3.innerText=questions[index].option3
    
    index++
}
 }


 nextques()



 var options = document.getElementsByName('opt')
 for(var i=0; i<options.length;i++){
    options[i].addEventListener('change',function(){
        document.getElementById('next').disabled=false;
    })
 }




 var disbtn= document.getElementById('next')
disbtn.disabled=true;




 var timer = document.getElementById('timer')
function start(){
    var time = 30;
var timerId = setInterval(() => {
//   console.log(`Time remaining: ${time} seconds`)
timer.innerText=`Time remaining: ${time} seconds`
  time--;
  if (time <= 0) {
    clearInterval(timerId);
    // alert("Time's up!");

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You're time's up...",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  }
  if(time<11){
    timer.style.color='red'
  }
}, 1000);
}

   
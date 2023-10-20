var left = 0;
var forward = 0;
function abc(){
    console.log(event.keyCode)
    var character = document.getElementById("character")
    if(event.keyCode === 65 && left < 1200){
        left = left + 10
        character.style.left = left + "px"
        character.src = 'IMAGES/spider1.gif'
    }
    if(event.keyCode === 66 && left > 0 ){
        left = left - 10
        character.style.left = left + "px"
        character.src = 'IMAGES/spider1.gif'
    }
    if(event.keyCode === 67 ){
        character.style.width = 300 + 'px'
        character.style.height = 300 + 'px'
        character.src = 'IMAGES/spider2.gif'
        setTimeout(function foo() {
          character.src = 'IMAGES/spider1.gif'
          character.style.width = '400px'
          character.style.height = '200px'

        },3000)
    }
    if(event.keyCode === 68){
        character.style.width = 300 + 'px'
        character.style.height = 300 + 'px'
        character.src = 'IMAGES/spidey-dashing.gif3.gif'
        setTimeout(function foo() {
            character.src = 'IMAGES/spider1.gif'
            character.style.width = '400px'
            character.style.height = '200px'
  
          },3000)
    }
    var character2 = document.getElementById("character2")
    if(event.keyCode === 49 && forward < 1200){
        forward = forward + 10
        character2.style.right = forward + "px"
        character2.src = "IMAGES/iron-man-stance.gif1.gif"
    }
    if(event.keyCode === 50 && forward > 0){
        forward = forward - 10
        character2.style.right = forward + "px"
        character2.src = "IMAGES/iron-man-stance.gif1.gif"
    }
    if(event.keyCode === 51){
        character2.style.width = "300px"
        character2.style.height = "300px"
        character2.src = "IMAGES/iron-wins.gif2.gif"
       setTimeout(function foo() {

            character2.src = 'IMAGES/iron-man-stance.gif1.gif'
            character2.style.width = '200px'
            character2.style.height = '180px'
       },3000)
     
    }
    if(event.keyCode === 52){
        character2.style.width = "200px"
        character2.style.height = "200px"
        character2.src = "IMAGES/ironman-shield.gif3.gif"
        setTimeout(function foo(){
            character2.src = 'IMAGES/iron-man-stance.gif1.gif'
            character2.style.width = '200px'
            character2.style.height = '200px'
        },3000)

    }


  
    
   
}
window.onkeydown = abc
document.getElementById('restart').addEventListener('click', function() {
window.location.href = 'index.html';
});


// question list (140 questions)
let table = {
    "What property is used to change the text color of an element?": "color",
    "Which property controls the visibility of an element?": "visibility",
    "What is the default display value for a <div> element?": "block",
    "Which property is used to change the font of an element?": "font-family",
    "What CSS property is used to control the space between borders of adjacent elements?": "margin",
    "Which property adjusts the space inside an element’s border?": "padding",
    "What property is used to set the background color of an element?": "background-color",
    "Which property is used for specifying the stacking order of positioned elements?": "z-index",
    "What is the property used to set the opacity of an element?": "opacity",
    "Which property is used to transform elements in 2D or 3D?": "transform",
    "Which property is used to change the left margin of an element?": "margin-left",
    "What property sets the height of the bottom border of an element?": "border-bottom-width",
    "Which property defines the style for the top border of an element?": "border-top-style",
    "What property is used to control the placement of an element along the Z-axis?": "z-index",
    "Which property sets the horizontal alignment of a flex container's items?": "justify-content",
    "What CSS property is used to specify the duration of a CSS transition?": "transition-duration",
    "Which property is used to set the style of the list marker in lists?": "list-style-type",
    "What property is used to set the bottom margin of an element?": "margin-bottom",
    "Which property sets the style for the left border of an element?": "border-left-style",
    "What property is used to control the wrapping of text in an element?": "white-space",
    "Which property is used to set the line style of the left border of an element?": "border-left-style",
    "What property defines the blending mode of a background layer?": "background-blend-mode",
    "Which property is used to define whether an element should float to the left or right, or not at all?": "float",
    "What property is used to set the vertical position of a background image?": "background-position-y",
    "Which property sets the size of the font?": "font-size",
    "What CSS property is used to set the delay for the start of a CSS animation?": "animation-delay",
    "Which property is used to change the color of the right border of an element?": "border-right-color",
    "What property is used to control the appearance of numbered lists?": "list-style",
    "Which property sets how nested elements are displayed in a flex container?": "flex-direction",
    "What property is used to define the animation timing function?": "animation-timing-function",
    "Which property is used to specify the height of an element?": "height",
    "What property changes the style of the top border of an element?": "border-top",
    "Which property controls how an element's content is laid out in a grid?": "grid-template-areas",
    "What property is used to define the space between the text and its border?": "padding",
    "Which property allows the creation of custom counters in a list?": "counter-reset",
    "What CSS property is used to set the horizontal spacing between flex items?": "justify-content",
    "Which property is used to change the display order of a grid item?": "order",
    "What property is used to control the resizing of an element?": "resize",
    "Which property sets the alignment of the last line in a text block?": "text-align-last",
    "What property is used to change the style of the left border of an element?": "border-left-style",
    "Which property specifies the type of positioning method used for an element (like fixed, relative)?": "position",
    "What property is used to control the visibility of content overflow in an element?": "overflow",
    "Which property defines how elements are rendered along the Z-axis?": "transform-style",
    "What property is used to define the stacking order of positioned elements?": "z-index",
    "Which property is used to define the flex-shrink factor of a flex item?": "flex-shrink",
    "What CSS property is used to specify the space between rows in a grid layout?": "row-gap",
    "Which property is used to set the width of columns in a multi-column element?": "column-width",
    "What property is used to apply an effect (like blur, brightness) to an element?": "filter",
    "Which property is used to set the style of the top border of an element?": "border-top-style",
    "What property is used to control the text decoration (like underline, overline)?": "text-decoration",
    "Which property is used to control the amount of space between each letter in text?": "letter-spacing",
    "What property is used to define the boldness of a font?": "font-weight",
    "Which property allows you to hide elements without deleting them from the layout flow?": "visibility",
    "What property is used to specify the space outside the padding of an element?": "margin",
    "Which property defines the size of the gap between columns in a multi-column layout?": "column-gap",
    "What CSS property is used to set the type of list marker in a list?": "list-style-type",
    "Which property is used to align items in a flex container along the cross axis?": "align-items",
    "What property is used to specify how an element's content should fit within its box?": "object-fit",
    "Which property is used to specify the position of a background image?": "background-position",
    "What property is used to control the wrapping of text in an element?": "white-space",
    "Which property is used for setting the background color of an element?": "background-color",
    "What property is used to specify the type of cursor to be displayed?": "cursor",
    "Which property defines the thickness of the border of a box?": "border-width",
    "What property is used to set the style of the bottom border of an element?": "border-bottom-style",
    "Which property is used to set the horizontal alignment of content within a block?": "text-align",
    "What property is used to specify the duration of a CSS transition?": "transition-duration",
    "Which property sets the type of rendering box used for an element (like border-box)?": "box-sizing",
    "What CSS property is used to set the order of a flex item within a flex container?": "order",
    "Which property is used to control the size of a background image?": "background-size",
    "What property is used to set the vertical alignment of content within an element?": "vertical-align",
    "Which property specifies the transparency of an element?": "opacity",
    "What property is used to specify the stacking order of an element?": "z-index",
    "Which property defines the space between the cells in a table?": "border-spacing",
    "What property specifies the placement of a background image?": "background-position",
    "Which property is used to control text flow around floating elements?": "clear",
    "What property is used to specify the blending mode for an element?": "mix-blend-mode",
    "Which property adjusts the weight (thickness) of a font?": "font-weight",
    "What CSS property is used to make elements render in 3D space?": "transform",
    "Which property is used to set the space between words in text?": "word-spacing",
    "What property is used to define how elements are rendered in a flex container?": "flex-direction",
    "Which property is used to set the animation name in a CSS animation?": "animation-name",
    "What property is used to control text wrapping in an element?": "white-space",
    "Which property specifies the direction of text flow?": "direction",
    "What property sets the boldness of the font?": "font-weight",
    "Which property is used to specify whether an element should be visible or not?": "display",
    "What property is used to set the type of rendering box used for an element?": "box-sizing",
    "Which property is used to control the distribution of space around items along the cross axis in a flex container?": "align-content",
    "What CSS property is used to set the flex basis of a flex item?": "flex-basis",
    "Which property is used to set the speed of an animation?": "animation-duration",
    "What property is used to specify the perspective from which all child elements are viewed?": "perspective",
    "Which property is used to set the shadow effect around an element's frame?": "box-shadow",
    "What property changes the type of cursor that will be displayed?": "cursor",
    "Which property is used for controlling the scaling of a flex item along the main axis?": "flex-grow",
    "What property sets how elements are placed in a grid layout?": "grid-template",
    "Which property is used to control the wrapping of flex items within a flex container?": "flex-wrap",
    "What property is used to set the width of columns in a multi-column layout?": "column-width",
    "Which property is used to set the order of a grid item within a grid layout?": "grid-row",
    "What CSS property is used to specify the initial size of a background image?": "background-size",
    "Which property is used to adjust the kerning between characters in text?": "letter-spacing",
    "What property is used to control the space between elements in a flexbox layout?": "gap",
    "Which property specifies the display behavior of an element?": "display",
    "What property is used to set the width of an element's border?": "border-width",
    "Which property controls the space between lines of text in a block?": "line-height",
    "What property specifies the style of the element's border?": "border-style",
    "Which property is used to create space around elements, outside of any defined borders?": "margin",
    "What property is used to change the list style type in a list?": "list-style-type",
    "Which property is used for aligning flex items along the main axis of a flex container?": "justify-content",
    "What CSS property is used to set how an element's content is displayed in relation to its container?": "object-fit",
    "Which property is used to specify the speed curve of an animation transition?": "transition-timing-function",
    "What property is used to set the stacking context of an element?": "z-index",
    "Which property specifies the type of positioning method used for an element?": "position",
    "What property is used for changing the typeface of a text?": "font-family",
    "Which property specifies the horizontal alignment of text?": "text-align",
    "What property sets the space between characters of text?": "letter-spacing",
    "Which property specifies the top margin of an element?": "margin-top",
    "What property is used for changing the style of the bottom border of an element?": "border-bottom",
    "Which property is used to specify the blending mode of an element?": "mix-blend-mode",
    "What CSS property is used to set the order of a flex item?": "order",
    "Which property sets the decoration added to text?": "text-decoration",
    "What property is used to specify the transition effect when changing from one style to another?": "transition",
    "Which property sets how overflowed content that is not displayed is signaled to users?": "overflow",
    "What property specifies the bottom margin of an element?": "margin-bottom",
    "Which property changes the style of the cursor?": "cursor",
    "What property sets the minimum width of an element?": "min-width",
    "Which property sets the maximum height of an element?": "max-height",
    "What property is used for specifying the stacking context of a positioned element?": "z-index",
    "Which property is used for moving or positioning elements horizontally?": "left",
    "What CSS property is used to specify the space outside the border of an element?": "margin",
    "Which property is used to set the vertical alignment of elements?": "vertical-align",
    "What property is used to apply bold formatting to text?": "font-weight",
    "Which property sets the background image of an element?": "background-image",
    "What property specifies the stack order of an element?": "z-index",
    "Which property is used to set the spacing between lines of text?": "line-height",
    "What CSS property is used for specifying borders around elements?": "border",
    "Which property adjusts the transparency of an element?": "opacity",
    "What property is used to set the width of an element?": "width",
    "Which property is used to set the height of an element?": "height",
    "What CSS property is used to apply a shadow effect to elements?": "box-shadow",
    "Which property is used for changing the font size of text?": "font-size",
    "What property is used to add space inside an element's border?": "padding",
    "What CSS property is used for specifying the alignment of the text within an element?": "text-align",
    "Which property is used to change the left margin of an element?": "margin-left",
    "What property changes the color of text?": "color",
    "Which CSS property controls the visibility of an element?": "visibility",
    "What is the default display value of a 'div' element?": "block",
    "Which property is used to change the font of a text?": "font-family",
    "What property is used to set the space between the borders of adjacent cells in a table?": "border-spacing",
    "Which CSS property changes the opacity of an element?": "opacity",
    "What property is used to make a rounded border around elements?": "border-radius",
    "Which property is used to indent the first line of a text block?": "text-indent"
};




//generate random number
    let randomNum = Math.floor(Math.random()*Object.keys(table).length)
    let numAnswer = Object.values(table)[randomNum]
    let numQuestion = Object.keys(table)[randomNum]

//function for 'next question' button
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') { 
        event.preventDefault(); 
        document.getElementById('next').click();
    }
});
let access = true

function nextQuestion() {
    document.getElementById("answer").setAttribute("hidden", "the-answer");
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();
    if (access == true) {
        access = false;
        let randomNum = Math.floor(Math.random()*8)
        let numAnswer = Object.values(table)[randomNum]
        let numQuestion = Object.keys(table)[randomNum]
        document.getElementById("question").innerText = numQuestion
        document.getElementById("answer").innerText = numAnswer;
        console.log("the answer will be: " + numAnswer)
        let countdown = 30;
        return numAnswer
    } 
    console.log(access)
}

document.getElementById('next').addEventListener('click', nextQuestion);
numAnswer = nextQuestion()
console.log("the right answer is: " + numAnswer);



//function for the form section

 // Variable to store the input value
document.querySelector('.form-box').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById("answer").removeAttribute("hidden");
    
    if (access == false) {
        access = true
            let inputValue = document.getElementById('userInput').value;
    console.log("the input value is " + inputValue); 
    let score = parseInt(document.getElementById("score").innerText, 10);
    let life = parseInt(document.getElementById("life").innerText, 10);
    if (document.getElementById("answer").innerText == inputValue) {
        console.log("numAnswer is: " + numAnswer);
        console.log("inputValue is: " + inputValue);
        console.log(true);
        score += 1; // Increment score
    } else {
        console.log(false);
        life -= 1
        let hp = document.getElementById("life").innerText
        console.log(hp);
        if (hp < 2) {
          setTimeout(function() {
    window.location.href = 'gameover.html';
}, 7000);  
        
        console.log('GAME OVER');
    }
    }
    document.getElementById("score").innerText = score;
    document.getElementById("life").innerText = life;

    console.log("the score is: " + score);
    console.log("the life is: " + life);
    } 
    setTimeout(bullethole, 2750);
    shotgun();
});


function bullethole() {
    let life = parseInt(document.getElementById('life').textContent, 10);
    console.log("Life value:", life);

    let friend1 = document.getElementById('friend1');
    let friend2 = document.getElementById('friend2');
    let friend3 = document.getElementById('friend3');
    let friend4 = document.getElementById('friend4');
    let friend5 = document.getElementById('friend5');
    let friend6 = document.getElementById('friend6');
    let friend7 = document.getElementById('friend7');
    let friend8 = document.getElementById('friend8');
    let friend9 = document.getElementById('friend9');
    console.log("image replace1");
    
    if (life < 1) {
        friend1.style.backgroundImage = "url('../assets/images/bullethole.png')";
    }  
    if (life < 2) {
        friend2.style.backgroundImage = "url('../assets/images/bullethole.png')";
    }  
    if (life < 3) {
        friend3.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 4) {
        friend4.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 5) {
        friend5.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 6) {
        friend6.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 7) {
        friend7.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 8) {
        friend8.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
    if (life < 9) {
        friend9.style.backgroundImage = "url('../assets/images/bullethole.png')";
    } 
}


function shotgun() {
    let life = parseInt(document.getElementById('life').textContent, 10);
    console.log("Life value:", life);

    let friend1 = document.getElementById('friend1');
    let friend2 = document.getElementById('friend2');
    let friend3 = document.getElementById('friend3');
    let friend4 = document.getElementById('friend4');
    let friend5 = document.getElementById('friend5');
    let friend6 = document.getElementById('friend6');
    let friend7 = document.getElementById('friend7');
    let friend8 = document.getElementById('friend8');
    let friend9 = document.getElementById('friend9');
    console.log("image replace1");
    
    if (life < 1) {
    let audio = document.getElementById('shotgun');
    audio.play();
    }  
    if (life < 2) {
    let audio = document.getElementById('shotgun');
    audio.play();
    }  
    if (life < 3) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 4) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 5) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 6) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 7) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 8) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
    if (life < 9) {
    let audio = document.getElementById('shotgun');
    audio.play();
    } 
}









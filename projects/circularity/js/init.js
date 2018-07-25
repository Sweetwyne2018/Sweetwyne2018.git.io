var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp({update: update}),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////
    
    // TODO 1 : Declare and initialize our variables //
    var circle;
    var circles = [ ];
    // TODO 2 : Create a function that draws a circle  //
    var drawCircle = function() {
    // TODO 2: Draw a circle //
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
    
    }
    
    
    // TODO 3 : Call the drawCircle function 3 times //
    for(var i = 0; i < 100; i++){
    drawCircle();
    }
    // TODO 7 : Create a Loop to call drawCircle 100 times
    

    view.addChild(fps);
    app.addUpdateable(fps);

    function checkCircleBounds(circle) {
        // TODO 5 : YOUR CODE STARTS HERE //////////////////////
        /* test for right */
        if ( circle.x > canvas.width + circle.radius ) {
            console.log('test for right before: cirlce at x '+ circle.x);
            circle.x = 0 - circle.radius;
             console.log('test for right after: cirlce at x '+ circle.x);       
            
            console.log('test for left before: cirlce at x '+ circle.x);            
        } else if ( circle.x < 0 - circle.radius /* test for left */ ) {
            circle.x = canvas.width + circle.radius;// your code to place circle exactly off the stage at the right-side //
            console.log('test for left after: cirlce at x '+ circle.x);
        
            console.log('test for top before: cirlce at x '+ circle.x);
    } if ( circle.y > canvas.height + circle.radius/* test for top */ ) {
            circle.y = 0 - circle.radius;// code to place circle exactly off the stage at the bottom //
            console.log('test for top after: cirlce at x '+ circle.x);
            
            console.log('test for bottom before: cirlce at x '+ circle.x);
        } else if ( circle.y < 0 - circle.radius/* test for bottom */ ) {
            circle.y = canvas.height + circle.radius;// your code to place circle exactly off the stage at the top //
            console.log('test for bottom after: cirlce at x '+ circle.x);
        }
        // YOUR TODO 5 CODE ENDS HERE //////////////////////////
    }

    function update() {
        // TODO 4 : Update the circle's position //
        for(var i = 0; i < 100 ; i++){
        physikz.updatePosition(circles[i]);
        }
        // TODO 6 : Call checkCircleBounds on your circles.
        for(var i=0; i < 100; i++){
            checkCircleBounds(circles[i]);
        }
        // TODO 8 : Iterate over the array
    }
        
    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
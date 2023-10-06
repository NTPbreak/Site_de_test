// window.onload = function()
// {
//     var canvas;
//     var ctx;
//     var delay = 5;
//     var xCoord = 0;
//     var yCoord = 0;
//     init();
//     function init() { 
//         canvas = document.createElement('canvas');
//         canvas.width = 900;
//         canvas.height = 600;
//         canvas.style.border = "1px solid"; 
//         document.body.appendChild(canvas);
//         ctx = canvas.getContext("2d");
//         refreshCanvas();
       
//      }
//    function refreshCanvas()
//    {
//         xCoord += 5;
//         yCoord += 5;
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.fillStyle = "#ff0000";
//         ctx.fillRect(xCoord,yCoord,100,50);
//         setTimeout(refreshCanvas,delay);
//    }
// }

window.onload = function()
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 100;
    var snaky;
    var apple;
    var widthInBlocks = canvasWidth/blockSize;
    var heightInBlocks = canvasHeight/blockSize;

    init();
    function init() { 
       var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "2px solid"; 
        canvas.style.marginLeft =  190 + "px";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snaky = new Snake([[6,4],[5,4],[4,4]],"right");
        apple = new Apple([10,10]);
        refreshCanvas();
       
     }
   function refreshCanvas()
   {    
    //    alert(4);
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        snaky.draw();
        snaky.advence();
        apple.draw();
        setTimeout(refreshCanvas,delay);
   }

   function drawBlock(ctx,position) {  
        var x = position[0] * blockSize;
        var  y = position[1] * blockSize;
        ctx.fillRect(x ,y,blockSize,blockSize);
   }
   function Snake(body,direction)
    { 
        this.body  = body;
        this.direction = direction;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i = 0 ; i < this.body.length; i++)
            {
                drawBlock(ctx,this.body[i]);
            }
            ctx.restore();
        };
        this.advence = function ()
        {
            var nextPosition = this.body[0].slice();
            // nextPosition[0] += 1; 
            switch(this.direction){
                case "left":
                    nextPosition[0] -= 1;
                    break;
                case "right":
                    nextPosition[0] += 1;
                    break;
                case "down":
                    nextPosition[1] += 1;
                    break;
                case "up":
                    nextPosition[1] -= 1;
                    break;
                default:
                    throw("invalid direction");
            }
            this.body.unshift(nextPosition);
            this.body.pop();
        };
    
        this.setDirection = function(newDirection)
        {
            var allowedDirections;
            switch(this.direction){
                case "left":
                case "right":
                    allowedDirections=["up","down"];
                    break;
                case "down":
                case "up":
                    allowedDirections=["left","right"];
                    break;  
            default:
                    throw("invalid direction");
            }
            if (allowedDirections.indexOf(newDirection) > -1){
                this.direction = newDirection;
            }
        };
        this.chekCollision = function()
        {
            var wallCollision = false;
            var snakeCollision = false;
            var head = this.body[0];
            var rest = this.body.slice(1);
            var snakeX = head[0];
            var snakeY = head[1];
        };
    }

    function Apple(position)
    {
        this.position = position;
        this.draw = function ()
        { 
            ctx.save();
            ctx.fillStyle = "#33cc33";
            ctx.beginPath(); 
            var radius = blockSize /2 ;
            var x  = position[0]*blockSize + radius;
            var y = position[1] * blockSize + radius;
            ctx.arc(x,y,radius,0,Math.PI*2,true);
            ctx.fill();
            ctx.restore();
        }
    }
    
    document.onkeydown = function handleKeyDown(e){
        var key = e.keyCode;
        var newDirection;
        switch(key){
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            default:
                return;
        }
        snaky.setDirection(newDirection);
    }
}

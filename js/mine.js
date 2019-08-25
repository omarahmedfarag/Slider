

var imgs = document.getElementsByClassName("img-item");
var layer= document.getElementById("lightbox-container");
var in_layer=document.getElementById("lightbox-item");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");
var currentPosision=0,imgsArr=[];

for(var i=0;i<imgs.length;i++)
    {
        
        imgsArr[i]=imgs[i];
        imgs[i].addEventListener( "click",function(e){
            currentPosision=imgsArr.indexOf(e.target);
            var imgSrc=e.target.src;
            layer.style.display="flex";
            in_layer.style.background="url("+imgSrc+")";
            
                    
        })
        
        
        
        
        
        
        
        
    }

next.addEventListener("click",getnext);
prev.addEventListener("click",getprev);


close.onclick=function()
{
    
    layer.style.display="none"; 
    
}

function getnext()
{
    currentPosision++;
    currentPosision%=  (imgsArr.length);
    in_layer.style.background="url("+imgsArr[currentPosision].src+")";

    
}
function getprev(next)
{
    currentPosision--;
    
    if(currentPosision < 0)
        {
            
            currentPosision+=imgsArr.length-1;
        }
    in_layer.style.background="url("+imgsArr[currentPosision].src+")";

    
}

document.addEventListener("keydown",function(e)
{
    
    
    if(e.keyCode==39)
        {
            
            getnext();
            
        }
    else if(e.keyCode==39)
        {
            
            getprev();
            
        }
    else if (e.keyCode==27)
        {
            
            layer.style.display="none"
        }
    
    
})



















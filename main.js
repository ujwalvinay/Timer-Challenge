const min = $(".minutes :input");
const sec = $(".seconds :input")
const StartBtn = $(".start");
const editButton = $(".settings");

var minValue = $(min).attr("value");
var secValue = $(sec).attr("value");



function waitfor(ms)
{
    return new Promise(resolve=> {
        setTimeout(resolve,ms,'xxx');
    })
}

StartBtn.click( async function(){

    
    
    if($(this).hasClass(".pause"))
    {
    }
    else
    {
        min.attr("disabled",true);
        $(this).html("Pause");
        $(this).addClass(".pause");
        while(minValue>=0)
        {
            
            
            while(secValue>=0)
            {
                
                await waitfor(1000);
                
                if(secValue==00 && minValue!= 00)
                {
                    secValue = 59;
                    $(sec).attr("value",secValue);
                    minValue--;
                    $(min).attr("value",minValue);
                        
                }
                else
                {
                    secValue--;
                    $(sec).attr("value",secValue);
                }
                
            }
        }
    }
    
})



editButton.click(function()
{
    
    min.removeAttr("disabled");
})


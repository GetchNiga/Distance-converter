(function(){


    let convertType ="Miles";
    const heading =document.querySelector('h1');
    const intro =document.querySelector('p');
    const answerdiv =document.getElementById("answer");
    const form =document.getElementById('convert');
    
    document.addEventListener('keydown',function(event)
    {
    
     var key =event.code;
    
    if (key ==='KeyK')
     {
        
        convertType ='Kilometers';
        heading.innerHTML ="Kilometer to mile converter";
        intro.innerHTML ="type a number of kilomer and click button to convert to miles";
        
    }
    else if(key==='keyM')
    {
        onvertType ='miles';
        heading.innerHTML ="mile to kilometer converter";
        intro.innerHTML ="type a number of mile and click button to convert to kilometer";
    
    }
    
    
    
    });
    
    
    
    form.addEventListener('submit',function(event){
    
        
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
       if(distance)
       {
        if(convertType=="Miles")
        {
        
          const converted = (distance*1.609344).toFixed(3);
          answerdiv.innerHTML ="<h2> distance" +distance + "in miles is" +converted +"in kilometer</h2>"
        }
        else
        {
    
          const converted= (distance*0.621371192).toFixed(3);
          answerdiv.innerHTML ="<h2> distance" +distance + "in kilometer is" +converted +"in miles</h2>"
        }
    
      
        
    
    
    
    
    
       }
       else{
    
        answerdiv.innerHTML="<h2>please provide number</h2>"
       }
    
    
    });


})();
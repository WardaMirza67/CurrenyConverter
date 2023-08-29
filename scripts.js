var opt = document.getElementById("selectedOption");
var header = document.getElementsByTagName("h2")[0];
var title = document.getElementById("text");
var inputTitle = document.getElementById("Amount");
function ChangeTitle()
{
   if(opt.selectedIndex == 0) 
   {
        header.textContent   ="USD TO PAK";
        title.textContent = 'PAK :' ;
        inputTitle.placeholder = 'Enter USD';
   }
   else if(opt.selectedIndex == 1)
   {
        header.textContent  ="PAK TO USD";
        title.textContent = 'USD :' ;
        inputTitle.placeholder = 'Enter PAK';
   }
   else if (opt.selectedIndex == 2)
   {
    header.textContent  ="INR TO PAK";
    title.textContent = 'PAK :' ;
    inputTitle.placeholder = 'Enter INR';
   }
   else
   {
    header.textContent  ="PAK TO INR";
    title.textContent = 'INR :' ;
    inputTitle.placeholder = 'Enter PAK';
   }
}
function ConvertCurrency() {
    var amount = inputTitle.value; 
    if (opt.selectedIndex == 0)
    {
        amount = amount * 303.18;
        title.textContent = 'PAK : Rs ' + amount.toFixed(3)  ;
    } 
    else if (opt.selectedIndex == 1)
    {
        amount = amount * 303.18;
        console.log(amount);
        title.textContent = 'USD : ' + amount.toFixed(3) + "$" ;
    }
    else if (opt.selectedIndex == 2)
    {
        amount = amount * 3.67;
        console.log(amount);
        title.textContent = 'PAK : Rs ' + amount.toFixed(3) ;
    }
    else
    {
        amount = amount / 3.67;
        console.log(amount);
        title.textContent = 'INR : Rs ' + amount.toFixed(3) ;
    }
}






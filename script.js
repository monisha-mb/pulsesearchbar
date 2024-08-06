document.getElementById('imp').addEventListener('keyup',keyfun)
function keyfun()
{
    var a=document.querySelectorAll('li');
    var val=document.getElementById('imp').value.toLowerCase();

    for( var i=0;i<a.length;i++)
        {
           if(a[i].innerHTML.toLowerCase().indexOf(val)!==-1)
            {
a[i].style.display='block';
            }
            else{
                a[i].style.display='none';
            }
        }
}
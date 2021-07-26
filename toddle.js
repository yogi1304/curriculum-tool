window.onload=js;
function js()
{
    var button=document.getElementById('b');
    button.onclick=function(){
        var blank=document.getElementById('blank');
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');
        var arrows= document.createElement('i');
        var arrowLeft= document.createElement('i');
        var arrowRight= document.createElement('i');
        var del= document.createElement('i');
        arrows.className+="fa fa-arrows"
        arrowLeft.className+="fa fa-arrow-left"
        arrowRight.className+="fa fa-arrow-right"
        del.className+="fa fa-trash-o"
        arrowRight.style.marginLeft="4px"
        arrowLeft.style.marginLeft="4px"
        del.style.marginLeft="4px"
        del.style.cursor="pointer"
        arrows.style.cursor="pointer"
        arrowLeft.style.cursor="pointer"
        arrowRight.style.cursor="pointer"
        col1.appendChild(arrows);
        col1.appendChild(arrowLeft)
        col1.appendChild(arrowRight)
        col1.appendChild(del)
        var d= document.createElement('div');
        d.style.marginLeft="70px"
        var box=document.createElement("i")
        box.className+="fa fa-square fa-3x"
        box.id="t";
        var input=document.createElement('input')
        
        d.appendChild(box);
        d.appendChild(input);
        d.style.color="green";
        var line=document.createElement('hr');
        line.style.width="800px"
        col2.appendChild(d);
        col2.appendChild(line);
        row.appendChild(col1);
        row.appendChild(col2);
        
        blank.appendChild(row);
        del.onclick=function()
        {
            // for(var i = 0; i < blank.children.length; i++) 
            // {
            //     blank.removeChild(blank.children[i]);
            // }
            var e=row;
            var child = e.lastElementChild; 
            while (child) {
                e.removeChild(child);
                child = e.lastElementChild;
            }
        }
        let i="150px";
        arrowRight.onclick=function(){
            var temp=d;
            d.style.marginLeft=i;
            input.style.color="gray";
        }
        arrowLeft.onclick=function()
        {
            console.log("Left Click")
            input.style.color="green";
            d.style.marginLeft="70px";
        }
        arrows.onclick=function()
        {
            var temp=blank.children[blank.children.length-1];
            var fix=temp;
            temp.remove();
            var fix2=blank.children[blank.children.length-2];
            blank.children[blank.children.length-2].remove;
            blank.appendChild(fix)
            blank.appendChild(fix2)
            // console.log(blank.children[blank.children.length-1])
            for(var i = 0; i < blank.children.length; i++) 
            {
                console.log(i);
                console.log("->")
                console.log(blank.children[i]);
            }
        }
    }
} 
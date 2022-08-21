var bu = document.getElementById('calculate');
var ans = document.getElementById('answer');
var ld = document.getElementById("loading");
var av = document.getElementById("ansval");
var op = "";
var tempsel = "No Operator Selected";
var op1 = document.getElementById('+');
var op2 = document.getElementById('-');
var op3 = document.getElementById('*');
var op4 = document.getElementById('/');
var op5 = document.getElementById('^');
var op6 = document.getElementById('%');
var res = document.getElementById('reset');
var nm = document.getElementById('title');
var cm = document.getElementById('comment');
var sub = document.getElementById('su');
var sel = document.getElementById('sel');
var err = document.getElementById('err');
var req = document.getElementById('requ1');
var req2 = document.getElementById('requ2');
var comsec = document.getElementById('commentsec');
var clrallm = document.getElementById('clearallmemos');

clrallm.onclick = function(){
    localStorage.clear();
    comsec.innerHTML = ``;
};
comsec.addEventListener('click',function(e){
    var tarr = JSON.parse(localStorage.getItem('title'));
    var carr = JSON.parse(localStorage.getItem('comment'));
    var darr = JSON.parse(localStorage.getItem('date'));
    var ind = parseInt((e.target.id).charAt((e.target.id).length - 1));
    tarr.splice(ind,1);
    carr.splice(ind,1);
    darr.splice(ind,1);
    localStorage.removeItem('title');
    localStorage.removeItem('comment');
    localStorage.removeItem('date')
    localStorage.setItem('title', JSON.stringify(tarr));
    localStorage.setItem('comment', JSON.stringify(carr));
    localStorage.setItem('date', JSON.stringify(darr));
    (e.target.parentElement.parentElement.parentElement.parentElement).remove();
});

if(localStorage.getItem('title') !== null && localStorage.getItem('comment') !== null && localStorage.getItem('date') !== null)
{
    var tarr = JSON.parse(localStorage.getItem('title'));
    var carr = JSON.parse(localStorage.getItem('comment'));
    var darr = JSON.parse(localStorage.getItem('date'));
    if(carr.length != tarr.length)
    localStorage.clear();
    else{
        for(var i=0;i<(tarr.length);i++)
        {
            var t1=tarr[i];
            var t2=carr[i];
            var t3=darr[i];
            comsec.innerHTML = `<br><table id='tableone'>
        <tr>
         <td><b>Title</b> : ${t1}     <a class='btn right' id="clearmemo${i}">X</a></td> 
        </tr>
        <tr>
         <td><b>Comment</b> :<p>          </p><textarea id='inline' cols=5 disabled> ${t2} </textarea><p class='right'>${t3}</p></td>
        </tr>
        </table><br>` + comsec.innerHTML;
        }
        
    }
}

sub.onclick = function(){
    if(nm.value === '' || cm.value === '')
    {
    req.style.display = 'inline-block';
    req2.style.display = 'inline-block';
    }
    else if(localStorage.getItem('title') === null || localStorage.getItem('comment') === null)
    {
        req.style.display = 'none';
        req2.style.display = 'none';
        var titlearr = [nm.value];
        var comarr = [cm.value];
        var date = new Date();
        var dtop = date.toLocaleString();
        var datearr = [dtop];
        localStorage.setItem('title', JSON.stringify(titlearr));
        localStorage.setItem('comment', JSON.stringify(comarr));
        localStorage.setItem('date', JSON.stringify(datearr));
        comsec.innerHTML = `<br><table id='tableone'>
        <tr>
         <td><b>Title</b> : ${nm.value}<a class='btn right' id="clearmemo${0}">X</a></td>      
        </tr>
        <tr>
         <td><b>Comment</b> :<p>          </p><textarea id='inline' cols=5 disabled> ${cm.value} </textarea><p class='right'>${dtop}</p></td>
        </tr>
        </table><br>`;
    }
    else
    {
        req.style.display = 'none';
        req2.style.display = 'none';
        var titlearr = JSON.parse(localStorage.getItem('title'));
        var comarr = JSON.parse(localStorage.getItem('comment'));
        var datearr = JSON.parse(localStorage.getItem('date'));
        var date = new Date();
        var dtop = date.toLocaleString();
        comsec.innerHTML = `<br><table id='tableone'>
        <tr>
         <td><b>Title</b> : ${nm.value}<a class='btn right' id="clearmemo${titlearr.length}">X</a></td>                   
        </tr>
        <tr>
         <td><b>Comment</b> :<p>          </p><textarea id='inline' cols=5 disabled> ${cm.value} </textarea><p class='right'>${dtop}</p></td>
        </tr>
        </table><br>` + comsec.innerHTML;
        titlearr.push(nm.value);
        comarr.push(cm.value);
        datearr.push(dtop);
        localStorage.removeItem('title');
        localStorage.removeItem('comment');
        localStorage.removeItem('date')
        localStorage.setItem('title', JSON.stringify(titlearr));
        localStorage.setItem('comment', JSON.stringify(comarr));
        localStorage.setItem('date', JSON.stringify(datearr));
    }

};

res.onclick = function(){
    ans.style.display = "none";
    av.innerText = '';
    op='';
    tempsel="No Operator Selected";
    sel.style.color="black";
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    sel.innerText = tempsel;
    sel.style.display = "none";
    err.style.display = 'none';
};

op1.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.innerText = 'Addition';
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
});
op1.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});


op1.onclick = function(){
    op='+';
    sel.style.color="rgb(230,220,50)";
    sel.innerText = 'Selection: Addition(+)';
    tempsel = sel.innerText;
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};
op2.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.style.color="rgb(230,220,50)";
    sel.innerText = 'Subtraction';
    sel.style.display = "block";
});
op2.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});
op2.onclick = function(){
    op='-';
    sel.innerText = 'Selection: Subtraction(-)';
    sel.style.color="rgb(230,220,50)";
    tempsel = sel.innerText;
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};
op3.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.innerText = 'Multiplication';
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
});
op3.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});
op3.onclick = function(){
    op='*';
    sel.innerText = 'Selection: Multiplication(x)';
    sel.style.color="rgb(230,220,50)";
    tempsel = sel.innerText;
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};
op4.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.innerText = 'Division';
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
});
op4.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});
op4.onclick = function(){
    op='/';
    sel.innerText = 'Selection: Division(/)';
    tempsel = sel.innerText;
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};
op5.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.innerText = 'Power';
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
});
op5.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});
op5.onclick = function(){
    op='^';
    sel.innerText = 'Selection: Power(^)';
    tempsel = sel.innerText;
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};
op6.addEventListener('mouseenter',function(){
    tempsel = sel.innerText;
    sel.innerText = 'Modulus';
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
});
op6.addEventListener('mouseleave',function(){
    sel.innerText = tempsel;
    if(tempsel.indexOf('Selection')==-1)
        sel.style.color="black";
    sel.style.display = "block";
});
op6.onclick = function(){
    op='%';
    sel.innerText = 'Selection: Modulus(%)';
    tempsel = sel.innerText;
    sel.style.color="rgb(230,220,50)";
    sel.style.display = "block";
    if(av.innerText!=='')
    {
        document.getElementById('num1').value = parseFloat(av.innerText);
    }
};

bu.onclick = function() {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  if(isNaN(n1) || isNaN(n2))
  {
     showerr("Invalid Input. Try Again.");
  }
  else if(op=='+')
  printAns(n1+n2);
  else if(op=='-')
  printAns(n1-n2);
  else if(op=='*')
  printAns(n1*n2);
  else if(op=='/')
  {
    if(n2!=0)
     printAns(n1/n2);
    else
     showerr("Invalid Operation. Can't Divide by 0.");
  }
  else if(op=='^')
  printAns(n1**n2);
  else if(op=='%')
  printAns(n1%n2);
  else
  showerr("Please Choose a Valid Operator!");
};
function printAns(num)
{
    ld.style.display = "block";
    ans.style.display = "none";
    err.style.display = 'none';
    setTimeout(function(){
        ld.style.display = "none";
        ans.style.marginLeft = (window.innerWidth - 238)/2;
        ans.style.marginRight = (window.innerWidth - 238)/2;
        ans.style.display = "block";
        var temnum=(JSON.stringify(num)).indexOf('.');
        if(temnum === -1)
        av.innerText = parseFloat(num);
        else{
            var temnum2 = ((JSON.stringify(num)).substring(0,temnum)).length;
            av.innerText = parseFloat(num.toFixed(11-temnum2));
        }
    },1500);

}
function showerr(errstr)
{
   err.style.display = 'block';
   err.innerHTML = `<span>&#9888;</span>`;
   err.innerText += "  "+errstr;
setTimeout(function(){
    err.style.display = 'none';
},4000);

}
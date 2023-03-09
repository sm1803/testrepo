function myfunc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
            var data = JSON.parse(xhttp.responseText);
            document.getElementById("h1").innerHTML=data.college;
        
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}
function myfunc2(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
            var data = JSON.parse(xhttp.responseText);
            document.getElementById("h1").innerHTML=data.program;
        
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}
function myfunc3(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
            var data = JSON.parse(xhttp.responseText);
            document.getElementById("h1").innerHTML=data.name;
        
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}
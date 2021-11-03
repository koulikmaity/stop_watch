var hour=0;
var min=0;
var sec=0;
var count=0;

var timer = false;

function start(){
    timer = true;
    stopwatch();

}
function stop(){
    timer = false
}
function restart(){
    timer = false
    var hour=0;
    var min=0;
    var sec=0;
    var count=0;
    document.getElementById("hour").innerHTML = "0" + hour;
    document.getElementById("min").innerHTML = "0" + min;
    document.getElementById("sec").innerHTML = "0" + sec;
    document.getElementById("count").innerHTML = "0" + count;

}
function stopwatch()
{   
    if(timer==true)
    {
        count=count+1;
        document.getElementById("count").innerHTML = count;
        if(count == 100)
        {
            sec = sec+1;
            count = 0;
        }
        if(sec == 60)
        {
            min = min+1;
            sec = 0;
        }
        if(min == 60)
        {
            hour = hour+1;
            min = 0;
        }
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        if(sec<10)
        {
            document.getElementById("sec").innerHTML = "0" + sec.toString();
        }
        if(min<10)
        {
            document.getElementById("min").innerHTML = "0" + min.toString();
        }
        if(hour<10)
        {
            document.getElementById("hour").innerHTML = "0" + hour.toString();
        }
        if(count<10)
        {
            document.getElementById("count").innerHTML = "0" + count.toString();
        }
        setTimeout("stopwatch()",10);
    }

}
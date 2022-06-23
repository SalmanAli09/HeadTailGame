function nametaker(){
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("player_1").style.display = "block";
    document.getElementById("player_2").style.display = "block";
    document.getElementsByClassName("btn_revolve").style.display = "flex";
    document.getElementById("content_cont").style.display = "flex";
    
}
function printname(){
    document.getElementById("btn_revolve").style.display = "flex";
    document.getElementById("content_cont").style.display = "none";
    var p1 = document.getElementById("t1").value.toUpperCase();
     document.getElementById("heading1").innerHTML = "Player # 1 : " + "<u>" + p1 + "</u>"  + "<br>"+ "<br>" + "<center>" + "HEADS" + "</center>";
     document.getElementById("heading1").style.display = "block";
     document.getElementById("player_1").style.display = "none";
     var p2 = document.getElementById("t2").value.toUpperCase();
     document.getElementById("heading2").innerHTML = "Player # 2 : " + "<u>" + p2 + "</u>"  + "<br>"+ "<br>" + "<center>" + "TAILS" + "</center>";
     document.getElementById("heading2").style.display = "block";
     document.getElementById("player_2").style.display = "none";
  
 
     
}

function playgame(){
    var turn = Math.random() * 2;
    var turnfloor = Math.floor(turn);
    var p1 = document.getElementById("t1").value.toUpperCase();
    var p2 = document.getElementById("t2").value.toUpperCase();
    if(turnfloor === 1){
        swal("HEADS", p1 + "  Won");
    }else if(turnfloor === 0){
        swal("TAILS", p2 + "  Won");
        document.getElementById("btn_revolve").style.display = "none"
        document.getElementById("content_cont").style.display = "none";
}
document.getElementById("btn_revolve").style.display = "flex";

}

// background


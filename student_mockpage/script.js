function tabopen(event,name){
    var i, tabcntnt,tablnk;
    tabcntnt=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcntnt.length;i++){
        tabcntnt[i].style.display="none";
    }

    tablnk=document.getElementsByClassName("tablnk");
    for(i=0;i<tablnk.length;i++){
        tablnk[i].className.replace(" activebtn","");
    }
    
    document.getElementById(name).style.display="block";
    event.currentTarget.className+=" activebtn";
}
var name_array=[];

function submit(){
    var names_1=document.getElementById("nameofstudent_1").value;
    var names_2=document.getElementById("nameofstudent_2").value;
    var names_3=document.getElementById("nameofstudent_3").value;
    var names_4=document.getElementById("nameofstudent_4").value;


    name_array.push(names_1);
    name_array.push(names_2);
    name_array.push(names_3);
    name_array.push(names_4);
    console.log(name_array);
    document.getElementById("display_names").innerHTML=name_array;

}



function sort_names(){
    name_array.sort();
    document.getElementById("display_sort_names").innerHTML=name_array;

}
function reset(){
    for(var i = 0; i < 4; i++){
        name_array.pop();
    }
    document.getElementById("nameofstudent_1").value="";
    document.getElementById("nameofstudent_2").value="";
    document.getElementById("nameofstudent_3").value="";
    document.getElementById("nameofstudent_4").value="";
    document.getElementById("display_names").innerHTML="";
    document.getElementById("display_sort_names").innerHTML="";

}
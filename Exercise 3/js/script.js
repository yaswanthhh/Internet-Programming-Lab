function changeBGcolor(elt) {
    elt.style.background = "#e6f0ff";
}
function resetStyle(elt) {
    elt.style.background = "white";
} 
function match() {
    alert('Please enter a valid name(Alphabetic characters and spaces only)');
} 
function func() {
    alert("You selected some text");
}
function keyPress(elt) {
    elt.style.background = "#e6f0ff";
}
function warn() {
    var x = document.getElementById("status").value;
    alert("Your Department is ' " + x + " ' . Are you sure?");
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var STR=document.getElementById(data).innerHTML;
    ev.target.value+=STR+";";
}

function printTable() {
    var myForm = document.getElementById('form') ;
    let formData = new FormData(myForm);
    document.write('<link rel="stylesheet" href="styles.css"><style>table, th, td{ border: 1px solid gray ; }</style>')
    document.writeln("<h1>FORM RESPONSE RECEIVED</h1>");
    document.writeln("<div class='box' style='width: fit-content;'><table style='width: 400px;margin:10px;font-size:25px;'>");
    document.writeln("<tr><th>Name</th><td>"+formData.get('name')+"</td></tr><tr><th>College Name</th><td>"+formData.get('college')+"</td></tr><tr><th>College Address</th><td>"+formData.get('address')+"</td></tr><tr><th>Pincode</th><td>"+formData.get('pin')+"</td></tr><tr><th>Age</th><td>"+formData.get('age')+"</td></tr><tr><th>DOB</th><td>"+formData.get('dob')+"</td></tr><tr><th>Gender</th><td>"+formData.get('recommend')+"</td></tr><tr><th>Department</th><td>"+formData.get('dept')+"</td></tr><tr><th>Contact Number</th><td>"+formData.get('contact')+"</td></tr><tr><th>Email</th><td>"+formData.get('email')+"</td></tr><tr><th>Programming skills</th><td>"+formData.get('prog')+"</td></tr><tr><th>Hobbies</th><td>"+formData.getAll('ch')+"</td></tr></table></div>") ;
}

/*function printTable() {
    var name = document.getElementById("name").value;
    var collegeName = document.getElementById("collegeName").value;
    var collegeAddr = document.getElementById("collegeAddr").value;
    var pin = document.getElementById("pin").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="recommend"]:checked');
    var dept = document.getElementById("dept").value;
    var no = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var skills = document.getElementById("skilllist").value;
    var hobbies = document.getElementById("ch").value;
    document.write("<h1 style=\"text-align:center\">DETAILS OF REGISTRATION</h1>");
    document.write("<table border=\"2px solid black\" width=\"50%\" style=\"border-collapse:collapse;margin-left:auto; margin-right:auto; text-align:center\">");
    document.writeln("<tr><th> Name </th><td> &nbsp;&nbsp;"+name+"</td></tr>");
    document.writeln("<tr><th> College Name </th><td> &nbsp;&nbsp;"+collegeName+"</td></tr>");
    document.writeln("<tr><th> College Address </th><td> &nbsp;&nbsp;"+collegeAddr+"</td></tr>");
    document.writeln("<tr><th> Pin </th><td> &nbsp;&nbsp;"+pin+"</td></tr>");
    document.writeln("<tr><th> Age </th><td> &nbsp;&nbsp;"+age+"</td></tr>");
    document.writeln("<tr><th> Date of Birth </th><td> &nbsp;&nbsp;"+dob+"</td></tr>");
    document.writeln("<tr><th> Gender </th><td> &nbsp;&nbsp;"+gender+"</td></tr>");
    document.writeln("<tr><th> Department </th><td> &nbsp;&nbsp;"+dept+"</td></tr>");
    document.writeln("<tr><th> Contact Number </th><td> &nbsp;&nbsp;"+no+"</td></tr>");
    document.writeln("<tr><th> Email </th><td> &nbsp;&nbsp;"+email+"</td></tr>");
    document.writeln("<tr><th> Skills </th><td> &nbsp;&nbsp;"+skills+"</td></tr>");
    document.writeln("<tr><th> Hobbies </th><td> &nbsp;&nbsp;"+hobbies+"</td></tr>");
    document.writeln("</table>");
}*/
function myFunction() {
    let cupsDrank, response;
    cupsDrank = document.getElementById("cupsDrank").value;
    // console.log(cupsDrank);
    
    if (cupsDrank < 4) {
        response = "You are fine, maybe have another cup!";
    }

    else {
        response = "Run to the bathroom NOW!";  
    }
    document.getElementById("result").innerHTML = response;
    console.log(response);
}
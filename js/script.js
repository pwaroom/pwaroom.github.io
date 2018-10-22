var jcontent = {
    "items" : 
        {
        "firstName" : "City",  
        "lastName" : "Biker",
        }
}

var output = document.getElementById('output');
output.innerHTML = jcontent.items.firstName + " " + jcontent.items.lastName;


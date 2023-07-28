/*

Project goal: Creating a chrome extension to fill the forms automatically when a button in the extension is clicked

Script goal: This script fills the form based on input json 

*/



// This is the input json which contains the contents of the form fields to be filled
text_fill_json = {"name":"lokesh", "age":30, "city":"New York"}


//testing step to print in the console while inspecting
console.log("test = ",text_fill_json["name"])


//this is an event listener which is called when the button is clicked in the HTML page
document.getElementById('fillForm').addEventListener('click', function(){
    
    // populates the html field based on the ID of the field ( in the below case id name : test)
    document.getElementById("test").innerHTML=text_fill_json["name"];
    
});





// Below code can be refered for filling the fields based on id

// function fillforms(){
//     var fullname = document.querySelector('input[name="fullname"]');
//     fillField(fullname,"logesh_karthik")
//     var email = document.querySelector('input[name="email"]');
//     fillField(email,"lk@gmail.com")
//     var phonenumber = document.querySelector('input[name="phonenumber"]');
//     fillField(phonenumber,"9551783347")
    
// }

// test()
// console.log("test success")
// test_string = test()
// document.getElementById("test").innerHTML=test_string;

// function test(){
//     test_string =  "hello world"
//     return "hello world"
    
// }

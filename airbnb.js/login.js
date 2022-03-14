// const userForm=document.getElementById("user-form");
// userForm.addEventListener("submit",e=>{
//     e.preventDefault();
//     console.log("Prevent");
//     const url=userForm.action;
//     var formData=new FormData(userForm);
//     const plainFormData = Object.fromEntries(formData.entries());
//     fetch("http://localhost:3000/login",{
//         method:"POST",
//         body:JSON.stringify(plainFormData),
//         headers:{
//             "content-type":"application/json"
//         }
//     }
    
//     ).
//     then(res=>{
//         console.log(`Status Code: ${res.status}`);
//     })
//     .catch(err=>{
//         console.log(err);
//     });
    
// });

const userform = document.getElementsById("user-form");
userform.addEventListener("submit", e =>{

    //prevents form from being submitted
    e.preventDefault();
    console.log("Prevented");
    

    const url = userform.action;
    var formData = new FormData(userform);
    
    //We want to send the request body as JSON, so we're converting it to a plain object and then send as a JSON string.
    const plainFormData = Object.fromEntries(formData.entries());
    //fetch data		
    fetch(url, {
    //method: "POST",
    body: JSON.stringify(plainFormData),
    headers: {
       "Content-Type": "application/json"
      }}).
    then(res => {
    console.log(`Status Code:  ${res.status}`);
    if(res.status===200){
    window.location.assign('http://localhost:3000/users/homes');
}   
    })
    .catch(err => console.log(err));;
        });

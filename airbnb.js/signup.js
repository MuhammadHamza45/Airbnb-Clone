const userForm=document.getElementById("user-form");
userForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log("Prevent");
    const url=userForm.action;
    var formData=new FormData(userForm);
    const plainFormData = Object.fromEntries(formData.entries());
    fetch(url,{
        method:"POST",
        body:JSON.stringify(plainFormData),
        headers:{
            "content-type":"application/json"
           }
    }
    ).
    then(res=>{
        console.log(`Status Code: ${res.status}`);
    })
    .catch(err=>{
        console.log(err);
    });
    
});
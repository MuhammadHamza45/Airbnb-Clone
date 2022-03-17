
    const userForm=document.getElementById("user-form");
    userForm.addEventListener("submit",e=>{
        e.preventDefault();
        console.log("Prevent");
        const url=userForm.action;
        var formData=new FormData(userForm);
        const plainFormData = Object.fromEntries(formData.entries());
        fetch("http://localhost:3000/users/signin",{
            method:"POST",
            body:JSON.stringify(plainFormData),
            headers:{
                "content-type":"application/json"
            }
        }
        ).
        then(res=>{
            console.log(`Status Code: ${res.status}`);
            console.log(res.cookie);
            if(res.status===200){
                window.location.assign('http://127.0.0.1:5500/Airbnb-Clone/airbnb.html/browseListing.html');
                cookie.set(res.cookie);
            }
        })
        .catch(err=>{
            console.log(err);
        });
        
    });


function getData() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users/homes");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        
        console.log(datax);
        var outPut = '';
        for (let i in datax) {
            outPut += `
             
            <div class="col-md-3">
            <div class="card mb-4 box-shadow ">
                <a href="/airbnb.html/locationDetail.html"> <img class="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                        src="${datax[i].image}" data-holder-rendered="true">
                </a>
                <div class="card-body d-flex justify-content-between p-2 mt-2">
                    <div class="text-start">
                        <a href="/airbnb.html/locationDetail.html">
                            <h6 class="card-text">${datax[i].place_name}</h6>
                            <p>${datax[i].owner_name}</p>
                        </a>
                    </div>
                    <div>
                        <a href="/airbnb.html/locationDetail.html"><span>$${datax[i].rent}/night</span>
                            <p class="date">${datax[i].number}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
         
 
   
    `
        }

        document.getElementById("test").innerHTML = outPut;
 

    }

    xhr.send();
}

getData();





// <div >
// <a href=""> <img src="${datax[i].location_image}"></a>
// <a href="" >${datax[i].location}</a>
//  </div>

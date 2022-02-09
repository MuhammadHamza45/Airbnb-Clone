
// latest Meal Function
function getData() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/api/products");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        
        console.log(datax);
        var outPut = '';
        for (let i in datax) {
            outPut += `
            <div class="col-md-3">
            <div class="card mb-4 box-shadow ">
                <a href="/Airbnb Clone/Airbnb-Clone/airbnb.html/locationDetail.html"> <img class="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                        src="${datax[i].location_image}" data-holder-rendered="true">
                </a>
                <div class="card-body d-flex justify-content-between p-2 mt-2">
                    <div class="text-start">
                        <a href="">
                            <h6 class="card-text">${datax[i].location}</h6>
                            <p>${datax[i].name}</p>
                        </a>
                    </div>
                    <div>
                        <a href=""><span>$${datax[i].rent_per_night}/night</span>
                            <p class="date">${datax[i].cell_number}</p>
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

























// //import express module
// const express = require('express');
// const mysql = require('mysql');

// //creates an object of type express. This represents our application.
// const app = express();

// //create connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'airbnb_clone'
// });

// //connect to the db
// db.connect((err)=> {
//     if (err) {
//         throw err;
//     }
//     console.log("DB Connected.....");
// });

// //different methods available corresponds to different http verbs/methods
// app.get('/', (req, res) => {
//     res.send("Data fetched");

// });
// //get list of products
// app.get('/api/products', (req, res) => {

// // call query method to get data/query results from db
// db.query('select * from host', (err, results) => {
//  if (err)
//     throw err;
//  console.log(results);
// res.send(results);
// });
// });

// //response to one product id
// app.get('/api/products/:id', (req, res) => {
// db.query(`select * from host where id =${ req.params.id }`, (err, results) => {
//  if (err)
//      throw err;
//  console.log(results);
//  res.send(results);
// });

// });


// //Server listening on port 3000
// app.listen(3000, () => console.log("Litening on port 3000..."));

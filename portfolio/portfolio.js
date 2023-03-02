function includeHTML(file){
    console.log("click")
    let xhttp;

    element = document.createElement("div");

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}                
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();

    document.getElementById("portfolio").insertAdjacentElement("beforeend", element);

}

// function includeHTML(html){
//     let doc, file, xhttp;

//     doc = document.getElementsByTagName("*");

//     for (let element of doc){

//         file = element.getAttribute("include-html");
        
//         if(file){
            
//             console.log("xhttp request")

//             xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function() {
//                 if (this.readyState == 4){
//                     if (this.status == 200) {element.innerHTML = this.responseText;}
//                     if (this.status == 404) {element.innerHTML = "Page not found.";}

//                     element.removeAttribute("include-html");
//                     includeHTML();
//                 }
//             }
//             xhttp.open("GET", file, true);
//             xhttp.send();
//             // return;
//         }

//     }

// }



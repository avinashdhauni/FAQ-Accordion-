let headings = document.querySelectorAll("h4");
let single_heading = document.getElementsByTagName("h4");
let paragraph = document.querySelectorAll(".accordion_paragraph");
let individual_paragraph = document.querySelector(".accordion_paragraph");

headings.forEach((element, index) => {
    element.addEventListener("click", () => {
     
        paragraph.forEach((paragraph, p_index) => {
            if(index === p_index){
                if(paragraph.classList.contains("show")){
                    paragraph.classList.remove("show");
                    element.classList.remove("h4_color");
                }else{
                    paragraph.classList.add("show");
                    element.classList.add("h4_color");
                }
            }else{
                paragraph.classList.remove("show");
            }
        })   
        for(i = 0; i<headings.length; i++){
            if(i !== index && element.classList.contains("h4_color")){
                single_heading[i].classList.remove("h4_color");
                console.log(element);
            }
        }     
    })
});
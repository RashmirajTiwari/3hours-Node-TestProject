var list = document.getElementById('items');
var todoDone = document.getElementById('todoDone');
var RTodo = document.getElementById('RTodo');
var DTodo = document.getElementById('DTodo');

function getAllTodo(){
    window.addEventListener("DOMContentLoaded", async () => {
        try {
            let res = await axios.get("http://localhost:3000/getTodo")
            for (let i = 0; i < res.data.length; i++) {
                list.innerHTML += 
                `<li>
                <span class="span" style="display:none">${res.data[i].id}</span>
                <span class="span" >${res.data[i].itemName}</span>
                <span class="span" >${res.data[i].description}</span>
                <button class="edit-btn">&check;</button>
                <button class="delete-btn">X</button>
                </li>`
            }
        } catch (error) {
            console.log(error)
    
        }
})
}



//Add Todo
var submit = document.getElementById("submitBtn");
submit.addEventListener("click", async (e) => {
  
    try {
        var itemName = document.getElementById('itemName');
        var description = document.getElementById('description');
        
        let todo= {
            itemName:itemName.value,
            description:description.value,
           }
          
          
          //Show heading Done and Remaing todo availabe or not;
           function isEmpty(id) {
            return document.getElementById(id).innerHTML== ""
          }
          if(isEmpty("items")==true){
            RTodo.innerHTML=`<h3 style="text-align: center;" >Remaining Todo</h3>`
          }else{
            RTodo.innerHTML=``
          }
          
           
        const res=  await axios.post("http://localhost:3000/postTodo",todo);
        showTodo(res);
   
   
     
        itemName.value="";
        description.value="";
       
        
    } catch (error) {
        console.log(error)

    }

})

//Delete Todo
list.addEventListener('click', async (e) => {
    try {
        if (e.target.classList.contains("delete-btn")) {
            if (confirm("Are You Sure ?")) {
                const li = e.target.parentElement;
                const id = li.firstElementChild.innerText
                list.removeChild(li);
                

          //Show heading Done and Remaing todo availabe or not;
                function isEmpty(id) {
                    return document.getElementById(id).innerHTML== ""
                  }
                  
                 if(isEmpty("items")==true)
                    RTodo.innerHTML=`` 
               
               
                await axios.delete(`http://localhost:3000/deleteTodo/${id}`);
                

            }
        } 
        

    } catch (err) {
        console.log(err)

    }
   
})
//Todo Done

list.addEventListener('click', async (e) => {
    try {
        if (e.target.classList.contains("edit-btn")) {
                const li = e.target.parentElement;
                var itemName = li.children[1].innerText;
                var description = li.children[2].innerText;
                list.removeChild(li);


          //Show heading Done and Remaing todo availabe or not;
                function isEmpty(id) {
                    return document.getElementById(id).innerHTML== ""
                  }
                  
                console.log(isEmpty("items"))
                if(isEmpty("items")==true)
                RTodo.innerHTML=``
                
                if(isEmpty("DTodo")==false)
                DTodo.innerHTML=`<h3 style="text-align: center;" >Done Todo</h3>`
                
                 
                
    } 
        if(itemName!=undefined ||description!=undefined )
        todoDone.innerHTML += `<li><span class="span" >${itemName}</span><span class="span" >${description}</span></li>`

    } catch (err) {
        console.log(err)

    }
   
})


function showTodo(res){
        list.innerHTML += 
        `<li>
        <span class="span" style="display:none">${res.data.id}</span>
        <span class="span" >${res.data.itemName}</span>
        <span class="span" >${res.data.description}</span>
        <button class="edit-btn">&check;</button>
        <button class="delete-btn">x</button>
        </li>`
    

}

getAllTodo();
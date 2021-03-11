let table=document.querySelector("table")

table.addEventListener("click",(e)=>{
  
    if(e.target.className=="deleteButton"){
        e.preventDefault()
        let result=confirm("Do you want to delete the user?")
        if(result){
            fetch(`/admin/${e.target.id}`,{
                method:"post",
                headers:{
                    "Content-Type":"application/JSON",
                    "Accept":"application/JSON"
                },
             }).then(res=>res.json())
            .then(data=>{
                let elelm= document.getElementsByClassName(e.target.id)[0]
                elelm.remove()
             
                
            })

        }else{
            location.href="/admin"
        }

    }
})
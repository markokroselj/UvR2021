const x = document.getElementById("roadClosuresOutput");



fetch("https://api.rocketlaunchestoday.space/closures", {
"method": "GET"
})
.then(response => {
return response.json();
})
.then(data =>{

    for(const closure of data){
        var tableNode = document.createElement("tr"); 
        for(info in closure){
            var node = document.createElement("td");  
            var textNode = document.createTextNode(closure[info])       
            node.appendChild(textNode)
            tableNode.appendChild(node)
        }
        x.appendChild(tableNode)
        console.log('aa')
    }   

})

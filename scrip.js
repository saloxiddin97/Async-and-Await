let API="https://jsonplaceholder.typicode.com/comments"
let card=document.querySelector('div')
let myfunktion=async(olma)=>{
    console.log('loading .....');

    const request=await fetch (olma)
    const data=await  request.json(request)
    console.log(data);

for(item of data){
    card.innerHTML += `
    
    <div>
    <p>${item.email}</p>
     <p>${item.name}</p>
    </div>
    `;
}
    
    
}
myfunktion(API)
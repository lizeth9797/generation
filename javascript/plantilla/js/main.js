function gData(){
    let promise= fetch("https://epic.gsfc.nasa.gov/api/natural",{method:"GET"});
  
    promise.then((response)=>{
      response.json()
        .then((data)=>printInfo(data))
        .catch((error)=>console.log("Error en la conversion a JSON"));
    })
    .catch((error)=>console.log("Api error"));
  }
  
  function printInfo(data){
    console.log(data);
    data.forEach(d=>{
      console.log("data: ", d)
    })
  }
  
  gData();

  fetch('https://epic.gsfc.nasa.gov/api/natural')
  .then(resp=>resp.json())
  .then(data=>console.log('datossss',data));
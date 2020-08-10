//API COVIT-19
async function callCovid() {
    const result =  await fetch(`https://covid19.th-stat.com/api/open/today`,{method:"get"});
    const dataCovid = await result.json();
    console.log(dataCovid)

    //display apiCovid
    document.getElementById("Confirmed").innerHTML = dataCovid.Confirmed ;
    document.getElementById("Recovered").innerHTML = dataCovid.Recovered ;
    document.getElementById("Hospitalized").innerHTML = dataCovid.Hospitalized ;
    document.getElementById("Deaths").innerHTML = dataCovid.Deaths ;
    document.getElementById("UpdateDate").innerHTML = dataCovid.UpdateDate ;
    document.getElementById("Source").innerHTML = dataCovid.Source;
    
}

function callbackCovid(dataCovid){
    return dataCovid;
}
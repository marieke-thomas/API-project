console.log("script linked")
let inputCity=document.querySelector('#inputCity')
let button=document.querySelector('#button')
let inputZip=document.querySelector('#inputZip')


button.addEventListener('click', e=>{
    console.log("Button clicked!")
    sendApiRequest()
    
})

async function sendApiRequest() {
    let city=inputCity.value
    if (city != ""){
        let response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=aefe1a90a5d145b79cb8ab4b0749e263`)
        console.log(response)
        let weather= await response.json()
        console.log(weather)
        printTemp(weather)
    } else {
        let zip=inputZip.value
        let response = await fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${zip}&country=US&key=aefe1a90a5d145b79cb8ab4b0749e263`)
        console.log(response)
        let weather= await response.json()
        console.log(weather)
        printTemp(weather)
    }
}


function getTemp(myJSON) {
    // console.log(myJSON.data[0].app_temp)
    let celsiusTemp = myJSON.data[0].app_temp
    let farenheitTemp = celsiusTemp*1.8 + 32
    return farenheitTemp
}

function printTemp(x) {
    response.innerHTML = `The temperature is currently ${Math.round(getTemp(x))} &#176;F. You should wear ${clothing(getTemp(x))}.`
}

function clothing(temp) {
    if (temp>75){
        picture.innerHTML = "<img src='https://static.boredpanda.com/blog/wp-content/uploads/2015/01/crochet-shorts-schuyler-ellers-lord-von-schmitt-1.jpg'>";
        return "shorts/dress";
    } else if (temp>65){
        picture.innerHTML = "<img src='https://i.pinimg.com/originals/86/d0/ed/86d0eda67396daad600f807c3376f359.jpg'>";
        return "pants"
    } else if (temp>55){
        picture.innerHTML = "<img src='https://i.pinimg.com/originals/82/af/53/82af53823cbaf7c776f3997d5414910a.jpg'>";
        return "pants and a light jacket"
    } else if (temp>45){
        picture.innerHTML = "<img src='https://cdn8.bigcommerce.com/s-eh06w/images/stencil/1280x1280/products/803/5381/ps_couture_designer_peacoat_14072.1410851136.1280.1280__61629.1428421592.gif?c=2&imbypass=on' height=500px>";
        return "a peacoat/warm jacket"
    } else if (temp>0){
        picture.innerHTML = "<img src='https://cdn-images-1.medium.com/max/600/0*CuIufkUeRUCb3bs_.'>";
        return "a down-stuffed jacket, hat, and gloves"
    } else {
        picture.innerHTML = "<img src='https://media4.s-nbcnews.com/j/newscms/2016_04/948536/secondeunpic_db1911a449fa610566cb2f84c67f9df8.fit-760w.jpg' height=750px>";
        return "pajamas, because there is no way you should go outside today"
    }
}
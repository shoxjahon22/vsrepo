let soat = document.querySelector(".hour")
let minut = document.querySelector(".minute")
let sekunt = document.querySelector(".second")

setInterval(() => {
    let vaqt = new Date()

    if (vaqt.getHours() <= 9){
        soat.innerHTML = "0" + vaqt.getHours()
    } else{
        soat.innerHTML = vaqt.getHours()
    }


    if (vaqt.getMinutes() <= 9){
        minut.innerHTML ="0" + vaqt.getMinutes()
    } else{
        minut.innerHTML = vaqt.getMinutes()
    }



    if (vaqt.getSeconds() <= 9){
        sekunt.innerHTML = "0" + vaqt.getSeconds()
    } else{
        sekunt.innerHTML = vaqt.getSeconds()
    }


})

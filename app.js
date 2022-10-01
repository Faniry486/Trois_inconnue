function equation(){

    var a1 = document.getElementById("enterA1").value
    var b1 = document.getElementById("enterY1").value
    var c1 = document.getElementById("enterZ1").value
    var d1 = document.getElementById("enterR1").value

    var a2 = document.getElementById("enterA2").value
    var b2 = document.getElementById("enterY2").value
    var c2 = document.getElementById("enterZ2").value
    var d2 = document.getElementById("enterR2").value

    var a3 = document.getElementById("enterA3").value
    var b3 = document.getElementById("enterY3").value
    var c3 = document.getElementById("enterZ3").value
    var d3 = document.getElementById("enterR3").value

    document.getElementById("affiche1").innerHTML = "On a une eqution de la forme: " + "<br>" 
    document.getElementById("affiche2").innerHTML = a1 + "x + " + b1 + "y + " + c1 + "z = " + d1
    document.getElementById("affiche3").innerHTML = a2 + "x + " + b2 + "y + " + c2 + "z = " + d2
    document.getElementById("affiche4").innerHTML = a3 + "x + " + b3 + "y + " + c3 + "z = " + d3

    var delta1 = (Number(a1) * ((Number(b2) * Number(c3)) - (Number(b3) * Number(c2))))
    var delta2 = (Number(a2) * ((Number(b1) * Number(c3)) - (Number(b3) * Number(c1))))
    var delta3 = (Number(a3) * ((Number(b1) * Number(c2)) - (Number(b2) * Number(c1))))

    var delta = delta1 - delta2 + delta3
    document.getElementById("affiche5").innerHTML = "Δ = " + delta + "<br>"

    var deltax1 = (Number(d1) * ((Number(b2) * Number(c3)) - (Number(b3) * Number(c2))))
    var deltax2 = (Number(d2) * ((Number(b1) * Number(c3)) - (Number(b3) * Number(c1))))
    var deltax3 = (Number(d3) * ((Number(b1) * Number(c2)) - (Number(b2) * Number(c1))))

    var deltax = deltax1 - deltax2 + deltax3
    // document.getElementById("affiche6").innerHTML = "Δx = " + deltax + " "

    var deltay1 = (Number(a1) * ((Number(d2) * Number(c3)) - (Number(d3) * Number(c2))))
    var deltay2 = (Number(a2) * ((Number(d1) * Number(c3)) - (Number(d3) * Number(c1))))
    var deltay3 = (Number(a3) * ((Number(d1) * Number(c2)) - (Number(d2) * Number(c1))))

    var deltay = deltay1 - deltay2 + deltay3
    // document.getElementById("affiche7").innerHTML = "Δy = " + deltay + " "

    var deltac1 = (Number(a1) * ((Number(b2) * Number(d3)) - (Number(b3) * Number(d2))))
    var deltac2 = (Number(a2) * ((Number(b1) * Number(d3)) - (Number(b3) * Number(d1))))
    var deltac3 = (Number(a3) * ((Number(b1) * Number(d2)) - (Number(b2) * Number(d1))))

    var deltac = deltac1 - deltac2 + deltac3
    // document.getElementById("affiche8").innerHTML = "Δz = " + deltac + " "

    document.getElementById("affiche8").innerHTML = "Δx = " + deltax + " ; Δy = " + deltay + " ; Δz = " + deltac + " "

    var x = deltax / delta
    document.getElementById("affiche9").innerHTML = "x = Δx / Δ = " + deltax + " / " + delta + " = " + x + "<br>"

    var y = deltay / delta
    document.getElementById("affiche10").innerHTML = "y = Δy / Δ = " + deltay + " / " + delta + " = " + y + "<br>"

    var c = deltac / delta
    document.getElementById("affiche11").innerHTML = "z = Δz / Δ = " + deltac + " / " + delta + " = " + c + "<br>"

    document.getElementById("affiche12").innerHTML = "Les solution sont : " + "<br>" + "<br>" + " x = " + x + " ; y = " + y + " ; z = " + c + " "

}





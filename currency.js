function euroConverter(){
document.converter.dollar.value = document.converter.euro.value * 1.470
document.converter.pound.value = document.converter.euro.value * 0.717
document.converter.yen.value = document.converter.euro.value * 165.192
document.converter.Ruppee.value = document.converter.euro.value * 75.17
}
function dollarConverter(){
document.converter.euro.value = document.converter.dollar.value * 0.680
document.converter.pound.value = document.converter.dollar.value * 0.488
document.converter.yen.value = document.converter.dollar.value * 112.36
    document.converter.Ruppee.value = document.converter.dollar.value * 64.16
}
function poundConverter(){
document.converter.dollar.value = document.converter.pound.value * 2.049
document.converter.euro.value = document.converter.pound.value * 1.394
document.converter.yen.value = document.converter.pound.value * 230.27
    document.converter.Ruppee.value = document.converter.pound.value * 83.77
}
function yenConverter(){
document.converter.dollar.value = document.converter.yen.value * 0.0089
document.converter.pound.value = document.converter.yen.value * 0.00434
document.converter.euro.value = document.converter.yen.value * 0.00605
    document.converter.Ruppee.value = document.converter.yen.value * 0.58
}

function RuppeeConverter(){
 document.converter.dollar.value = document.converter.Ruppee.value * 0.016
document.converter.pound.value = document.converter.Ruppee.value * 0.012
document.converter.euro.value = document.converter.Ruppee.value * 0.013  
    document.converter.yen.value = document.converter.Ruppee.value * 1.72
}

$(function() {
    $("#dindin").maskMoney({
        prefix: 'R$ ',
        allowNegative: true,
        thousands: '.',
        decimal: ',',
        affixesStay: false
    });
})




var valor = "";

function calcular() {
    valor = document.getElementById('dindin').value;
    res = valor / 2;
    document.getElementById('res').innerHTML = res
    console.log(res)
}
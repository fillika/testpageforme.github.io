$(function () {
    $('.list-title').on('click', function () {
        var attr = $(this).attr('data-set');
        $('.list-content[data-set=' + attr + ']').toggleClass('visible');
    })
});

$(function () {
    $('.list-number').on('click', function () {
        var atr = $(this).attr('data-set');
        $('.main-variables').load('./pages/page' + atr + '.php')
    })
});


let str = 'Body'
console.log(str.charAt(0))
console.log(str[0])
console.log('Hello \nworld')

// var num = 0.1 * 0.2;
// console.log(num)
// console.log(Math.round(num * 1000) / 1000)
// console.log(num.toFixed(4))
// console.log(isNaN(num.toFixed(4)))

// num = 017;

// console.log(num.toLocaleString())
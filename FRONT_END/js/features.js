$(document).ready(function () {
    let inp = document.getElementsByClassName("features1")[0];
    let count = parseInt(inp.value);
    let span = document.getElementsByClassName("sum1")[0];
    let sum = parseInt(span.innerText);
    let total = 1;
    $(".features-minus-btn1").click(function () {
        if (count > 0) {
            count -= 1;
        }
        inp.value = count;
        total = sum * count;
        span.innerText = total;
    });
    $(".features-plus-btn1").click(function () {
        count = parseInt(inp.value) + 1;
        inp.value = count;

        total = sum * count;
        span.innerText = total;
    });


})
$(document).ready(function () {
    let inp = document.getElementsByClassName("features2")[0];
    let count = parseInt(inp.value);
    let span = document.getElementsByClassName("sum2")[0];
    let sum = parseInt(span.innerText);
    let total = 1;
    $(".features-minus-btn2").click(function () {
        if (count > 0) {
            count -= 1;
        }
        inp.value = count;
        total = sum * count;
        span.innerText = total;
    });
    $(".features-plus-btn2").click(function () {
        count = parseInt(inp.value) + 1;
        inp.value = count;
        total = sum * count;
        span.innerText = total;
    });
})
$(document).ready(function () {
    let spam = document.getElementsByClassName("sum1")[0];
    let span = document.getElementsByClassName("sum2")[0];
    let sum1 = parseInt(spam.innerText);
    let sum2 = parseInt(span.innerText);
    let cuponadd = document.getElementById("cupon");
    let total1 = 1;
    let total2 = 1
    let apply = document.getElementById("apply");
    for (let f in cupon) {
        console.log(cupon[f]);
        apply.addEventListener("click", function () {
            if (cuponadd.value == cupon[f]) {
                total1 = sum1 - 10;
                total2 = sum2 - 10;
                span.innerText = total2;
                spam.innerText = total1;
            }
        })
    }

});

let cupon = {
    cupon1: "1111",
    cupon2: "2222",
    cupon3: "3333",
    cupon4: "4444"
}

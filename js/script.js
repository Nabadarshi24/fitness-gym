
let startedViewing1 = false;
let startedViewing2 = false;
let startedViewing3 = false;

// let doMarginTop = function (el) {
//      el.toggleClass("do-margin")
//  }

// let doMarginTopSpan = function (el) {
//     el.toggleClass("do-margin1")
// }

// let doMarginBottomBtn = function (el) {
//     el.toggleClass("do-margin2")
// }

const scrollChangeFunc = function (
    elementContainerSelector,
    screenTop,
    screenBottom
) {
    let elementContainer = $(elementContainerSelector)
    let elementTop = elementContainer.offset().top;
    let elementBottom = elementContainer.offset().top + elementContainer.outerHeight();

    return (screenBottom >= (elementTop + elementContainer.outerHeight() / 2)) &&
        (screenTop < elementBottom)
};

$(document).ready(function () {

    $(window).scroll(function () {
        let screenBottom = $(window).scrollTop() + $(window).innerHeight();
        let screenTop = $(window).scrollTop();

        let element1 = $("#id_2 h1")
        let element2 = $(".span-div span")
        let element3 = $("#id_3 a")

        if (scrollChangeFunc("#id_1", screenTop, screenBottom)) {
            // the element is visible, do something
            if (!startedViewing1) {
                element1.toggleClass("do-margin")

                startedViewing1 = true
            }

            if (!startedViewing2) {
                element2.toggleClass("do-margin1")

                startedViewing2 = true
            }

            if (!startedViewing3) {
                element3.toggleClass("do-margin2");

                startedViewing3 = true
            }

        } else {
            if (startedViewing1) {
                element1.toggleClass("do-margin")

                startedViewing1 = false
            }

            if (startedViewing2) {
                element2.toggleClass("do-margin1")

                startedViewing2 = false
            }

            if (startedViewing3) {
                element3.toggleClass("do-margin2");

                startedViewing3 = false
            }
        }
    });
});



$(document).ready(function () {
    $(".footer-icon a").click(function (e) {
        // alert($(this).parents(".my-style").find("h5").text())

        alert($(e.target).parents(".my-style").find("h5").text())
        
    })
})
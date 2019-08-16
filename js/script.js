$(document).ready(function () {
    function compute() {
        let txtTotalBill = document.querySelector("#txtTotalBill"),
            txtTipInPercentage = document.querySelector("#txtTipInPercentage"),
            txtNumberOfPeople = document.querySelector("#txtNumberOfPeople"),
            txtTipPerPerson = document.querySelector("#txtTipPerPerson"),
            txtTotalPerPerson = document.querySelector("#txtTotalPerPerson");
        if (txtTotalBill.value != "" && txtTipInPercentage.value != "" && txtNumberOfPeople.value != "") {
            txtTipPerPerson.innerHTML = ((+txtTotalBill.value * (+txtTipInPercentage.value /100)) / +txtNumberOfPeople.value);
            txtTotalPerPerson.innerHTML = ((+txtTotalBill.value / +txtNumberOfPeople.value) + +txtTipPerPerson.innerHTML) + "&#8377";
            txtTipPerPerson.innerHTML += "&#8377";
        } else {
            txtTipPerPerson.value = "";
            txtTotalPerPerson.value = "";
        }
    }

    $("#txtTotalBill").bind('input', compute);
    $("#txtTipInPercentage").bind('input', compute);
    $("#txtNumberOfPeople").bind('input', compute);


});
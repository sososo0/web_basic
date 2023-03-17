function order() {
    alert('주문해 주셔서 감사합니다!');

    var today = new Date();

    var element1 = document.getElementById("date");
    var date = document.createTextNode(today.toLocaleDateString());
    element1.appendChild(date);

    var element2 = document.getElementById("time");
    var time = document.createTextNode(today.toLocaleTimeString());
    element2.appendChild(time);

    var text3 = document.getElementById("address").value;
    var element3 = document.getElementById("destination");
    var destination = document.createTextNode(text3);
    element3.appendChild(destination);

    var food1 = Number(document.getElementById("jajang").value);
    var food2 = Number(document.getElementById("bob").value);
    var food3 = Number(document.getElementById("tang").value);
    var food4 = Number(document.getElementById("gun").value);

    var text4 = 5000 * food1 + 6000 * food2 + 10000 * food3 + 5000 * food4;
    var element4 = document.getElementById("price");
    var price = document.createTextNode(text4+"원");
    element4.appendChild(price);

    var element5 = document.getElementById("totalJajang");
    var totalJajang = document.createTextNode("자장면 : " + food1 + "개");
    element5.appendChild(totalJajang);

    var element6 = document.getElementById("totalBob");
    var totalBob = document.createTextNode("볶음밥 : " + food2 + "개");
    element6.appendChild(totalBob);

    var element7 = document.getElementById("totalTang");
    var totalTang = document.createTextNode("탕수육 : " + food3 + "개");
    element7.appendChild(totalTang);

    var element8 = document.getElementById("totalGun");
    var totalGun = document.createTextNode("군만두 : " + food4 + "개");
    element8.appendChild(totalGun);

}

function mostrar(id) {

    let cards = document.querySelectorAll(".especialidade");
    cards.forEach(card => { card.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

}






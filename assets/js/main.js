var gravedades = [3.7, 8.87, 9.8, 3.71, 24.79, 10.44, 8.69, 11.15, 0.62];
var planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno", "Pluton"];

function calculoPeso(){
    var peso = parseInt(document.getElementById('peso').value);
    var indicePlaneta = parseInt(document.getElementById("planetas").value);
    var planeta = planetas[indicePlaneta];
    var gravedad = gravedades[indicePlaneta];

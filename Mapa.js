var mapoptions = {center:[14.085278,-87.163056],zoom: 16,zoomControl: false};
var setMaxBounds = [14.0758, -87.1826, 14.1075, -87.1418];
var mapa = L.map('map',mapoptions,L.CRS.EPSG4326,setMaxBounds); 
//agregar mapa base de mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'
}).addTo(mapa);  
new L.Control.Zoom({ position:'bottomright'}).addTo(mapa);
//agregar coordenadas de las facultades unah
var FACES = L.marker([14.087822,-87.15992]);
var ingeneria = L.marker([ 14.086652,-87.162054]);
var quimica = L.marker([ 14.084028,-87.167382]);
var derecho = L.marker([ 14.085707,-87.162377]);
var ciencias = L.marker([ 14.084106,-87.162380]);
var odonto = L.marker([ 14.083809,-87.165956]);
var humanidades = L.marker([ 14.084997,-87.164196]);
var economicas = L.marker([ 14.086824,-87.163751]);
var sociales =  L.marker([14.085074,-87.162092]); 
//metodo para hacer un click y abrir una ventana emergente
FACES.bindPopup("<b>FACES</b><br>Facultad de ciencias espaciales.").openPopup();
//agregar al mapa  FACES. 
//icono personalizado 
var FACES_Icon = L.icon({
    iconUrl: 'FACES.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text(){
    return "<b>FACES</b><br>facultad de ciencias espaciales."
}
//L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
L.marker([14.087822,-87.15992],{icon: FACES_Icon}).addTo(mapa).bindPopup(text());
//primero
var Ingeneria_Icon = L.icon({
    iconUrl: 'INGENERIA.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
//ingeneria.bindPopup("<b>Ingeneria.</b><br>Facultad de Ingeneria.").openPopup();
//ingeneria({icon: FACES_Icon})
function text2(){
    return "<b>Ingeneria.</b><br>Facultad de Ingeneria."
}
L.marker([ 14.086652,-87.162054],{icon: Ingeneria_Icon}).addTo(mapa).bindPopup(text2());
//segundo
var Farmacia_icon = L.icon({
    iconUrl: 'Quimica.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
//quimica.bindPopup().openPopup();
function text3(){
    return "<b>Quimica y Farmacia.</b><br>Facultad de Quimica y Farmacia."
}
L.marker([ 14.084028,-87.167382],{icon: Farmacia_icon}).addTo(mapa).bindPopup(text3());
//tercero
var derecho_icon = L.icon({
    iconUrl: 'DERECHO.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text4(){
    return "<b>Derecho.</b><br>Facultad de Derecho."
}
//derecho.bindPopup("").openPopup();
L.marker([ 14.085707,-87.162377],{icon: derecho_icon}).addTo(mapa).bindPopup(text4());
//cuarto
var derecho_icon = L.icon({
    iconUrl: 'CIENCIAS.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text5(){
    return "<b>Ciencias Naturales.</b><br>Facultad de Ciencias Naturales."
}
//ciencias.bindPopup("<b>Ciencias Naturales.</b><br>Facultad de Ciencias Naturales.").openPopup();
L.marker([ 14.084106,-87.162380],{icon:derecho_icon}).addTo(mapa).bindPopup(text5());
//sexto
var odonto_icon = L.icon({
    iconUrl: 'Odonto.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text6(){
    return "<b>Odontologia.</b><br>Facultad de Odontologia."
}
//odonto.bindPopup().openPopup();
L.marker([ 14.083809,-87.165956],{icon:odonto_icon}).addTo(mapa).bindPopup(text6());
//septimo
var humanidades_icon = L.icon({
    iconUrl: 'Humanidades.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text7(){
    return "<b>Humanidades y Artes.</b><br>Facultad de Humanidades y Artes."
}
L.marker([ 14.084997,-87.164196],{icon:humanidades_icon}).addTo(mapa).bindPopup(text7());
//octavo 
var economicas_icon = L.icon({
    iconUrl: 'ECONOMICAS.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text8(){
    return "<b>Ciencias Economicas.</b><br>Facultad de ciencias economicas."
}
L.marker([ 14.086824,-87.163751],{icon:economicas_icon}).addTo(mapa).bindPopup(text8());
//noveno 
var sociales_icon = L.icon({
    iconUrl: 'SOCIALES.jpg',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});
function text9(){
    return "<b>Ciencias Sociales.</b><br>Facultad de ciencias sociales."
}
L.marker([14.085074,-87.162092],{icon:sociales_icon}).addTo(mapa).bindPopup(text9()); 


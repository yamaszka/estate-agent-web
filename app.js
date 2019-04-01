// $('.project_foto').hover(function() {
//     $(this).addClass('fade-out');
//     $(this).addClass('displayNone');
//     // setTimeout(function(){ $(this).addClass('displayNone'); }, 2000);
// });

var sellText = `<span class="close_cross"><i class="fas fa-times"></i></span>
<b>Sprzedajesz nieruchomość?</b><br>
  <img src="img/obrazy/kanapa.png" class="text_photo" alt="small house">
Nie wiesz jaką cenę zaproponować?<br><br>
Opłaciłeś już kilka portali ale skontaktowało się z Tobą tylko wielu agentów i kilku niezainteresowanych kupujących?<br><br>
Nie wiesz jak wykonać profesjonalne zdjęcia?<br><br>
Zastanawiasz się jak przygotować dom/ mieszkanie/ działkę do prezentacji?<br><br>
Obawiasz się, że nieruchomość ma wady prawne?<br><br>
Masz działkę rolna powyżej 0,3ha i nie wiesz kto może ją kupić?<br><br>
Boisz się, że nie skompletujesz dokumentów potrzebnych do aktu notarialnego?<br><br>
Mieszkasz daleko od nieruchomości, nie wiesz kto może Ci pomóc w sprzedaży?<br><br>
Podpisałeś już umowy pośrednictwa sprzedaży ale agent się do Ciebie nie odzywa?<br><br>

<hr><br>

DOBRZE TRAFIŁEŚ.<br><br>
Zapraszam do współpracy.<br><br>
Rozwiążę Twoje problemy.<br><br>
Przeprowadzę Cie komfortowo i bezpiecznie przez proces sprzedaży nieruchomości.<br><br>

<img src="img/obrazy/key_hands.png" class="text_photo" alt="small house">

<br><hr><br>

<b>Co mogę zaoferować?</b><br><br>
Nikt na Świecie nie sprzedaje tyle nieruchomości co RE/MAX a ja korzystam z doświadczenia oraz know-how tej firmy<br><br>
Agenci RE/MAX 85% „swoich” nieruchomości sprzedają od 2 tygodni do 3 miesięcy. Postaram się aby Twoja oferta tak samo szybko znalazła nabywcę<br><br>
przeprowadzę analizę rynku oraz ustalę cenę ofertową<br><br>
wykonam profesjonalne materiały marketingowe oraz zadbam o odpowiednią reklamę<br><br>
ustalę stan prawny nieruchomości, pomogę skompletować potrzebne dokumenty<br><br>
będę Cie na bieżąco informować o rezultatach moich działań<br><br>
przeprowadzę home staging oraz  profesjonalne prezentacje<br><br>
będę dbała abyś uzyskał najlepszą cenę oraz negocjowała dla Ciebie<br><br>
Przeprowadzę Cię bezpiecznie przez proces sprzedaży (spotkanie u notariusza, przekazanie pieniędzy)<br><br>
pomogę w przekazaniu lokalu<br><br>
polecę usługi dodatkowe (doradca podatkowy, firma przeprowadzkowa)<br>

<img src="img/obrazy/smallHouse1.png" class="text_photo" alt="small house">

<hr><br>

Jeśli uważasz że nie potrzebujesz mojej pomocy, gdyż masz tylko kilka pytań zapraszam na darmowe konsultacje.
<button class="button">Darmowe konsultacje</button><br>
<span class="close_text"><em>..zamknij..</em></span>
`;

function get_sellText() {
  return sellText;
}



$('.project_desc').click(function() {
//   var p = $(this);
// var position = p.position();
// console.log (position.top);
//
// $('.text').css('top', position.top);
var paragraph = document.createElement("p");
paragraph.classList.add("sell");
paragraph.classList.add("text");
var text = get_sellText();
$('.project_content').prepend(paragraph);
paragraph.innerHTML = text;

      $('.close_cross').click(function() {
        paragraph.remove();
      });

      $('.close_text').click(function() {
        paragraph.remove();
      });



});

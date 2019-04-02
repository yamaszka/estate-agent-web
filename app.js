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

var buyText = `<span class="close_cross"><i class="fas fa-times"></i></span>
<b>Kupujesz nieruchomość?</b><br><br>

<img src="img/obrazy/bed.png" class="text_photo" alt="small house">

Czujesz się zagubiony w ogromie ofert dostępnych w internecie?<br><br>
Nie masz czasu wyszukiwać nieruchomości spełniających Twoje kryteria?<br><br>
Boisz się, że zakupione dom/ działka / mieszkanie będą miały wadę prawną?<br><br>
Nie wiesz co zrobić, żeby nie przepłacić?<br><br>
Zbierasz informacje żeby niczego nie przeoczyć?<br><br>
Chcesz kupić szybko?<br><br>

<hr><br>

DOBRZE TRAFIŁEŚ.<br><br>
Zapraszam do współpracy.<br><br>
Rozwiążę Twoje problemy.<br><br>
Przeprowadzę Cie komfortowo i bezpiecznie przez proces kupna nieruchomości.<br><br>

<img src="img/obrazy/key_hands.png" class="text_photo" alt="small house">

<br><hr><br>

<b>Co mogę zaoferować</b><br><br>
w ramach dostępności na rynku znajdę nieruchomości spełniające Twoje kryteria<br><br>
ustalę dogodny dla Ciebie termin ich prezentacji<br><br>
sprawdzę stan prawny ofert<br><br>
skompletuję potrzebne dokumenty<br><br>
będę dbała abyś uzyskał najlepszą cenę oraz negocjowała dla Ciebie<br><br>
Przeprowadzę Cię bezpiecznie przez proces kupna (spotkanie u notariusza, przekazanie pieniędzy)<br><br>
pomogę w odebraniu lokalu/ domu/ działki<br><br>
polecę usługi dodatkowe (doradca kredytowy, projektant wnętrz, mozliwości wynajmu krótkoterminowego)<br><br>

<img src="img/obrazy/smallHouse2.png" class="text_photo" alt="small house">

<hr><br>

Skorzystaj z mojej pomocy zupełnie za darmo!<br><br>
Wybierz nieruchomość z naszej bazy a obsłużę Twoją transakcję bez żadnych kosztów.<br><br>
<button class="button free"><a href = "https://www.remax-polska.pl/" target="blind">Baza nieruchomości RE/MAX</a></button><br>
<span class="close_text"><em>..zamknij..</em></span>
`;

var rentText = `<span class="close_cross"><i class="fas fa-times"></i></span>

<img src="img/obrazy/pokoj.png" class="text_photo" alt="small house">

<b>Chcesz wynająć nieruchomość</b><br><br>
Nie wiesz jaka cenę ustalić?<br><br>
Zastanawiasz się jak osiągnąć najwyższe zyski?<br><br>
Boisz się niewypłacalnych najemców?<br><br>
Nie znasz obowiązującego prawa ale wiesz, że najemca może pozostawać w lokalu nie płacąc?<br><br>
Obawiasz się zniszczeń i skarg sąsiadów?<br><br>
Zastanawiasz się nad najmem tymczasowym?<br><br>
Kalkulujesz wzrost odstępnego po wykonaniu remontu?<br><br>

<hr><br>

DOBRZE TRAFIŁEŚ.<br><br>
Zapraszam do współpracy.<br><br>
Rozwiążę Twoje problemy.<br><br>
Przeprowadzę Cie komfortowo i bezpiecznie przez proces wynajmu nieruchomości.<br><br>

<img src="img/obrazy/key_hands.png" class="text_photo" alt="small house">

<br><hr><br>

<b>Co mogę zaoferować</b><br><br>
przeprowadzę analizę rynku oraz ustalę cenę najmu<br><br>
wykonam profesjonalne materiały marketingowe oraz zadbam o odpowiednią reklamę<br><br>
przeprowadzę home staging oraz przeprowadzę profesjonalne prezentacje<br><br>
będę dbała abyś uzyskał najlepszą cenę oraz negocjowała dla Ciebie<br><br>
Przeprowadzę Cię bezpiecznie przez proces przygotowania i podpisania umowy najmu<br><br>
pomogę w przekazaniu lokalu<br><br>
polecę usługi dodatkowe (firma remontowa)<br><br>

<img src="img/obrazy/smallHouse3.png" class="text_photo" alt="small house">

<hr><br>

<b>Rozważasz najem krótkoterminowy</b><br><br>
przedstawię możliwe rozwiązania (praca dodatkowa czy podwykonawca)<br><br>
doradzę skuteczne formy reklamy<br><br>
pomogę w ustaleniu cen oraz grupy docelowej klientów<br><br>
polecę usługi dodatkowe (firma sprzątająca, pralnia, zamki elektroniczne)<br><br>
<span class="close_text"><em>..zamknij..</em></span>
`;

var konsultacje = `<span class="close_cross"><i class="fas fa-times"></i></span>
<b>Jak mogę Ci pomóc?</b><br><br>

<img src="img/obrazy/kon.jpg" class="text_photo" alt="small house">

W ramach konsultacji udzielam porad na tematy:<br><br>
<i class="fas fa-check"></i>  określanie ceny rynkowej nieruchomości<br><br>
<i class="fas fa-check"></i> podatki w obrocie nieruchomości<br><br>
<i class="fas fa-check"></i> skuteczny marketing<br><br>
<i class="fas fa-check"></i> techniki negocjacji<br><br>
<i class="fas fa-check"></i> przygotowanie dokumentów potrzebnych do kupna/ sprzedaży<br><br>
<i class="fas fa-check"></i> home staging<br><br>
<i class="fas fa-check"></i> prezentacja nieruchomości<br><br>
<i class="fas fa-check"></i> jak oglądać nieruchomość, na co zwrócić uwagę<br><br>
<i class="fas fa-check"></i> przekazanie / odebranie lokalu<br><br>
<i class="fas fa-check"></i> wynajem długoterminowy<br><br>
<i class="fas fa-check"></i> wynajem krótkoterminowy<br><br>

<img src="img/obrazy/smallHouse4.png" class="text_photo" alt="small house">

Konsultacje odbywają się w środy w godzinach 9:00 – 12:00.<br><br>
Na rozmowy obowiązują zapisy poprzez e-mail lub telefonicznie.
<span class="close_text"><em>..zamknij..</em></span>
`;

// $('.konsultacje').html(konsultacje);

//LARRY//

function get_sellText() {
  return sellText;
}

function get_buyText() {
  return buyText;
}

function get_rentText() {
  return rentText;
}

function get_konsultacje() {
  return konsultacje;
}



//LARRY//

//VIEW//
//zmienne pobrane z larry?
var larry_sellText = get_sellText();
var larry_buyText = get_buyText();
var larry_rentText = get_rentText();
var larry_konsultacje = get_konsultacje();

//tworzy text area dla strefy klienta, pobiera zmienna tekst
function create_text_area(text) {
  var paragraph = document.createElement("p");
  paragraph.classList.add("text");
  paragraph.innerHTML = text;
  $('.project_content').prepend(paragraph);
      $('.close_cross').click(function() {
        paragraph.remove();
      });

      $('.close_text').click(function() {
        paragraph.remove();
      });
}


$('.sell').click(function() {
  //click for seel section
  //to pobierało wartoś top elementu
//   var p = $(this);
// var position = p.position();
// console.log (position.top);
//
// $('.text').css('top', position.top);

create_text_area(larry_sellText);
});

$('.buy').click(function() {
create_text_area(larry_buyText);
});

$('.rent').click(function() {
create_text_area(larry_rentText);
});

 $(".free").click(function(){
   var paragraph = document.createElement("p");
   paragraph.classList.add("text");
   paragraph.innerHTML = larry_konsultacje;
   $('.content').append(paragraph);
       $('.close_cross').click(function() {
         paragraph.remove();
       });

       $('.close_text').click(function() {
         paragraph.remove();
       });
 });

 $('#menu').click(function() {
     $('#open_menu').css("display", "block");
 });

 $('#open_menu').click(function() {
   $('#open_menu').toggle();
 });

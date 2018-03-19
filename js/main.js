// Put your JavaScript code in the block below. You can remove line 3.
$(document).ready(function() {
  $("#bedroom p").addClass("load");
  $("#wardrobe p").addClass("load");
})

function loadText() {
  $("#bedroom p").addClass("load");
  $("#wardrobe p").addClass("load");
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}


function goToWardrobe () {
  var heading = "Wardrobe";
  var text= "<p>Crisp, white satin slips down one side of a coat hanger. The number of clothes in there is enough to fill all of the pews that day. It was a white one, with sugared almonds and a pageboy, who was the godson of some distant relation of his and just as sickly sweet. You wanted it here, but his mother was already unhappy about the match.</p><p> On Sundays, you would sit in her <a href=\"#\" onclick=goToDiningRoom()> dining room </a> and match her crisp smile, both of you pretending not to notice the ring of cakes she had laid out in a ring on a paper plate. You chose a tangerine instead. <p>You would both examine your shoes, whilst she would stroke her fur collar and her Siamese stared at you from the mantelpiece. Once, you tried to align your shoes according to preference. Best at the front. But in summer, your sandals were first and in winter they were last. You let them roam towards the back and tried to forget that the seasons could change. <p>From then on, it could never be autumn. ";

  var image = "<img class=\"center\" id=\"bedimage\" src=\"assets/wardrobe2.png\">";

    document.getElementById("storyheading").innerHTML = heading;
   document.getElementById("storyparagraph").innerHTML = text;
document.getElementById("mainimage").innerHTML = image;
   loadText();
}

function goToDiningRoom()
{
  var heading = "Dining Room";
  var text= "<p>You sat at each end of the flat-pack table, which he boasted he could set up and collapse within minutes.</p><p>  He glanced at the photo that his mother gave him last Christmas. Your flimsy paper hats are frozen in film. The silver banded frame cuts into your smile and champagne glasses are held in the anticipation of a speech. He coughed, clearing his throat. Who would take Olly? He was hers. And the silver, the wedding album and the chocolate gateau at the back of the freezer?</p><p> He followed a pea on his plate and stabbed it with the end of his fork. A green globe. It was kept from rest of the plate, safe in a sphere. Its shell became wedged between his front teeth.</p> <p> You take him, you had begged, but he was insistent. I don’t like leaving you here alone. Don’t then, you had replied, but he was already packing away dinner into the dishwasher.</p> <p> He left his suitcase open. It was meant to be for holidays. His shoes crept from summer to winter in autumnal fashion. By the end of the year, all of his shoes were in his case. Piece by piece, he packed away the <a href=\"#\" onclick=goToBedroom()>bedroom.</a></p>";
var image = "<img class=\"center\" id=\"bedimage\" src=\"assets/table.png\">";


    document.getElementById("storyheading").innerHTML = heading;
   document.getElementById("storyparagraph").innerHTML = text;
document.getElementById("mainimage").innerHTML = image;
   loadText();
}

function goToBedroom (){
  var heading = "Bedroom";
  var text= "<p>You wake and find that the crumpled sheets still manage to wear the ring of his waist.</p> <p> Sunlight streaks through the curtains, but it should be treated with caution. Its fingers prod at your shadow, trying to coax you down the stairs. But here, you are free to sail and you can navigate the debris. On the ground, wires hook around your toes.</p> <p> Your <a href= \"#\" onclick=goToWardrobe()>wardrobe</a> stands in the corner, forced to reflect on its sparse offerings. You could not work the door. It kept its lamppost- lit escape hidden, but its draft still circulates around your Snow Queen heart.</p> <p>  You wait for the alarm clock to buzz. You put it in the <a href=\"#\" onclick=goToBathroom()>bathroom </a>so that it did not instantly seize you from sleep. There is a bluebottle on the side table. It rubs its legs together in anticipation.</p> <p>Buzz.</p> ";
  var image = "<img class=\"center\" id=\"bedimage\" src=\"assets/bed.png\">";

 document.getElementById("storyheading").innerHTML = heading;
document.getElementById("storyparagraph").innerHTML = text;
document.getElementById("mainimage").innerHTML = image;
loadText();
}

function goToBathroom (){
  var heading = "Bathroom";
  var text= "<p>His hairs still hang on the towel rail.</p><p> You could never fix the right tap. He fixed it once, but it was inevitable. Drops fall just off-beat to the ticking of the clock. It became loose. </p> <p>Tick, drop.</p> <p>The sink <a href=\"mirror.html\">mirror </a> is cracked from when you tripped, whilst brushing your teeth. You sit on the edge of the bath and pick the filler between the tiles. Blood smells like orange copper, like rusty taps.</p> <p> Once the dizziness has subsided, you line up the shampoo bottles like soldiers. You should be getting ready, but now you are not sure you can. It is his promotion celebration. His lips sit on the edge of scolding you. You are always late, but not your monthly cycle. He smooths your hair. There, wear a fringe and nobody will notice.</p><p> He laughs when you walk out with a plaster stuck to your forehead.</p>    ";
var image = "<img class=\"center\" id=\"bedimage\" src=\"assets/bath.png\">";

 document.getElementById("storyheading").innerHTML = heading;
document.getElementById("storyparagraph").innerHTML = text;
document.getElementById("mainimage").innerHTML = image;
loadText();
}



// Wrap every letter in a span
$('.ml9 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i+1)
    }
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

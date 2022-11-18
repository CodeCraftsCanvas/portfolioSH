filterSelection("all");

// Filter portfolio items
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Add active class
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

// Remove active class
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

jQuery(document).ready(function () {
  let projects = [
    // Visual Composer
    ["theme vc", "Metaphor School", "source/metaphorschool/preview.jpg", "https://metaphorschool.org/"],
    ["theme vc", "Enstruct", "source/enstruct/preview.png", "https://enstructcorp.com/"],
    ["theme vc", "Ellis Patents", "source/ellispatents/preview.png", "https://www.ellispatents.co.uk/"],
    // ELEMENTOR
    ["theme elementor woocommerce", "Terra Creta", "source/terra/preview.png", "https://terracreta.gr/"],
    ["theme elementor woocommerce", "Vivid Health Nutrition", "source/vividhealthnutrition/preview.jpg", "https://vividhealthnutrition.com/"],
    ["theme elementor", "Glen Security", "source/glen/preview.png", "https://gleneagle.com.au/"],
    ["theme elementor", "Meditation Carma", "source/carmameditation/preview.png", "https://carmameditation.com.au/"],
    ["theme elementor", "Tomax", "source/tomax/preview.jpg", "https://tomax.io/"],
    ["theme elementor", "Tianshan Expeditions", "source/tianshanexpeditions/preview.jpg", "http://www.tianshanexpeditions.com/"],
    // SHOPWARE
    ["shopware", "Eat Performance", "source/eatperformance/preview.png", "https://eat-performance.com/"],
    ["shopware", "Foto Marlin", "source/fotomarlin/preview.png", "https://www.fotomarlin.ch/"],
    ["shopware", "Gigandet", "source/Gigandet/preview.png", "https://gigandet.com/"],
    ["shopware", "Hachette", "source/hachette/preview.png", "https://hachette.de/"],
    // CRYPTO
    ["crypto", "Meta Bounty", "source/metabounty/preview.png", "https://www.metabountyhuntress.io/"],
    ["crypto", "Lets go farming", "source/letsgofarming/preview.png", "https://www.letsgofarming.io/"],
    ["crypto", "Aswang Tribe", "source/aswangtribe/preview.png", "https://www.aswangtribe.com/"],
    ["crypto", "0x0", "source/0x0/preview.png", "https://0x0.gg/"],
    ["crypto", "kaijukongz", "source/kaijukongz/preview.png", "https://kaijukongz.io/"],
    ["crypto", "The Americans", "source/crypto/american.png", "https://theamericans.io/"],
    ["crypto", "troll-town.wtf", "source/crypto/tt.png", "https://troll-town.wtf/"],
    ["crypto", "MoonFrens", "source/crypto/moonfrens.png", "https://moonfrens.io/"],
    // GUTENBERG
    ["theme gutenberg woocommerce", "Family Traveller", "source/familytraveller/preview.png", "https://familytraveller.com/"],
    ["theme gutenberg", "Canadian Casino", "source/canadiancasino/preview.jpg", "https://www.canadiancasino.bet/"],
    ["theme gutenberg", "Betting Nirvana", "source/bettingnirvana/preview.jpg", "https://bettingnirvana.com/"],
    ["theme gutenberg", "Top Canadian Casino Games", "source/topcanadiancasinogames/preview.jpg", "https://topcanadiancasinogames.com/"],
    ["theme gutenberg", "Hotel Better", "source/hotelbetter/preview.jpg", "https://hotelbetter.co/"],
    ["theme gutenberg", "Untangle", "source/untangle/preview.jpg", "https://untanglegrief.com/"],
    ["theme gutenberg", "The Pokies King", "source/thepokiesking/preview.jpg", "https://www.thepokiesking.com/"],
    ["theme gutenberg", "Touchpoint", "source/touchpoint/preview.png", "https://www.touchpoint.com/"],
  ];

  shuffle(projects).forEach(element => {
    jQuery('.projects').append(
      `<div class="column ` + element[0] + `">
        <a href="`+ element[3] + `" class="content" target="_blank">
          <figure>
              <img src="`+ element[2] + `" width="800" height="600" alt="` + element[1] + `" loading="lazy">
              <figcaption>`+ element[1] + `</figcaption>
          </figure>
        </a>
      </div>`
    );
  });
  filterSelection("all");
});
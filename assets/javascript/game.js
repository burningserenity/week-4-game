var darth_traya =
{

  graphic: $("<div>").attr(
  {
    class: "charbox",
    id: "traya",
  }),

      name: "Darth Traya",
      hp: 180,
      atk: 7,
      initAtk: 7,
      ctr: 25,
      hpDisplay: ""
}

var jolee_bindo =
{
  name: "Jolee Bindo",
  hp: 150,
  atk: 8,
  initAtk: 8,
  ctr: 20,
  hpDisplay: ""
}

var visas_marr =
{
  name: "Visas Marr",
  hp: 120,
  atk: 8,
  initAtk: 8,
  ctr: 15,
  hpDisplay: ""
}

var bastila_shan =
{
  name: "Bastila Shan",
  hp: 100,
  atk: 14,
  initAtk: 14,
  ctr: 5,
  hpDisplay: ""
}

var player;
var enemy;

$(function()
{
  $("<div>").attr(
    {
      class: "col-md-6",
      id: "charwrapper"
    }).appendTo("#choose");
      $("<div>").attr(
      {
        class: "col-md-3",
        id: "traya-col"
      }).appendTo("#charwrapper");
        /*
$("<div>").attr(
        {
          class: "charbox",
          id: "traya"
        }).appendTo("#traya-col");*/

          darth_traya.graphic.appendTo("#traya-col");
          $("<p>Darth Traya</p>").prependTo("#traya");
          $("<img>").attr(
          {
            id: "traya_image",
            alt: "Darth Traya",
            src: "assets/images/darth_traya.jpg",
            width: "200",
            height: "200"
          }).appendTo("#traya");
          darth_traya.hpDisplay = $("<p></p>").text(darth_traya.hp).attr(
          {
            class: "hp",
            id: "traya_hp",
          }).appendTo("#traya");
      $("<div>").attr(
        {
          class: "col-md-3",
          id: "jolee-col"
        }).appendTo("#charwrapper");
        $("<div>").attr(
          {
            class: "charbox",
            id: "jolee"
          }).appendTo("#jolee-col");
          $("<p>Jolee Bindo</p>").prependTo("#jolee");
          $("<img>").attr(
            {
              id: "jolee_image",
              alt: "Jolee Bindo",
              src: "assets/images/jolee_bindo.jpg",
              width: "200",
              height: "200"
            }).appendTo("#jolee");
          jolee_bindo.hpDisplay = $("<p></p>").text(jolee_bindo.hp).attr(
            {
              class: "hp",
              id: "jolee_hp",
            }).appendTo("#jolee");
      $("<div>").attr(
        {
          class: "col-md-3",
          id: "visas-col"
        }).appendTo("#charwrapper");
        $("<div>").attr(
          {
            class: "charbox",
            id: "visas"
          }).appendTo("#visas-col");
          $("<p>Visas Marr</p>").prependTo("#visas");
          $("<img>").attr(
            {
              id: "visas_image",
              alt: "Visas Marr",
              src: "assets/images/visas_marr.jpg",
              width: "200",
              height: "200"
            }).appendTo("#visas");
          visas_marr.hpDisplay = $("<p></p>").text(visas_marr.hp).attr(
          {
            class: "hp",
            id: "visas_hp",
          }).appendTo("#visas");
      $("<div>").attr(
        {
          class: "col-md-3",
          id: "bastila-col"
        }).appendTo("#charwrapper");
        $("<div>").attr(
          {
            class: "charbox",
            id: "bastila"
          }).appendTo("#bastila-col");
          $("<p>Bastila Shan</p>").prependTo("#bastila");
          $("<img>").attr(
            {
              id: "bastila_image",
              alt: "Bastila Shan",
              src: "assets/images/bastila_shan.jpg",
              width: "200",
              height: "200"
            }).appendTo("#bastila");
          bastila_shan.hpDisplay = $("<p></p>").text(bastila_shan.hp).attr(
            {
              class: "hp",
              id: "bastila_hp",
            }).appendTo("#bastila");

  /*
$(".charbox").click(function()
  {
    if ($("#char-col").find(".col-md-3").length == 0)
    {
      $(this).appendTo("#char-col");
      if (this == traya.charbox)
        player = darth_traya;
    }
  })
  */


  $("#traya-col").click(function()
  {
    if ($("#char-col").find(".col-md-3").length == 0)
    {
      player = Object.assign({}, darth_traya);
      $("#traya-col").appendTo("#char-col");
    }
    else if (($("#char-col").find(".col-md-3").length == 1) && ($("#defender").find(".col-md-3").length == 0))
      {
        enemy = Object.assign({},darth_traya);
        $("#traya-col").appendTo("#defender");
        $("#charwrapper").appendTo("#remainingVictims");
        $("#benchheader").appendTo("#bench");
        $('#remainingVictims').appendTo("#benchheader");
        play(player, enemy);
      }
  });



  $("#jolee-col").click(function()
  {
    if ($("#char-col").find(".col-md-3").length == 0)
    {
      player = Object.assign({}, jolee_bindo);
      $("#jolee-col").appendTo("#char-col");
    }
    else if (($("#char-col").find(".col-md-3").length == 1) && ($("#defender").find(".col-md-3").length == 0))
      {
        enemy = Object.assign({}, jolee_bindo);
        $("#jolee-col").appendTo("#defender");
        $("#charwrapper").appendTo("#remainingVictims");
        $("#benchheader").appendTo("#bench");
        $('#remainingVictims').appendTo("#benchheader");
        play(player, enemy);
      }
  });

  $("#visas-col").click(function()
  {
    if ($("#char-col").find(".col-md-3").length == 0)
    {
      player = Object.assign({}, visas_marr);
      $("#visas-col").appendTo("#char-col");
    }
    else if (($("#char-col").find(".col-md-3").length == 1) && ($("#defender").find(".col-md-3").length == 0))
      {
        enemy = Object.assign({}, visas_marr);
        $("#visas-col").appendTo("#defender");
        $("#charwrapper").appendTo("#remainingVictims");
        $("#benchheader").appendTo("#bench");
        $('#remainingVictims').appendTo("#benchheader");
        play(player, enemy);
      }
  });

  $("#bastila-col").click(function()
  {
    if ($("#char-col").find(".col-md-3").length == 0)
    {
      player = Object.assign({}, bastila_shan);
      $("#bastila-col").appendTo("#char-col");
    }
    else if (($("#char-col").find(".col-md-3").length == 1) && ($("#defender").find(".col-md-3").length == 0))
    {
      enemy = Object.assign({}, bastila_shan);
      $("#bastila-col").appendTo("#defender");
      $("#charwrapper").appendTo("#remainingVictims");
      $("#benchheader").appendTo("#bench");
      $('#remainingVictims').appendTo("#benchheader");
      play(player, enemy);
    }
  });
});

function play(player, enemy)
{
  if ($("#fightSect").find("#ft-btnRow").length == 0)
  {
    $("<div>").attr(
    {
      class: "row",
      id: "ft-btnRow"
    }).appendTo("#fightSect");
      $("<div>").attr(
      {
        class: "col-md-12",
        id: "fight-col",
      }).appendTo("#ft-btnRow");
        $("<img>").attr(
        {
          id: "lightsaber",
          alt: "Fight!",
          src: "assets/images/saberclash.png",
          width: "75",
          height: "75"
        }).appendTo("#fight-col");

          $("<div>").attr(
          {
            class: "row",
            id: "textRow"
          }).appendTo("#fightSect");
            $("<p>").attr(
            {
              id: "youdamage"
            }).appendTo("#textRow");
              $("<p>").attr(
              {
                id: "foedamage"
              }).appendTo("#textRow");

      $("<div>").attr(
      {
        class: "row",
        id: "resetrow"
      }).appendTo("#fightSect");
        $("<div>").attr(
        {
          class: "col-md-12",
          id: "reset-col"
        }).appendTo("#resetrow");
          $("<img>").attr(
          {
            id: "resetButton",
            alt: "RESET",
            src: "assets/images/reset.jpeg",
            width: "75",
            height: "75"
          }).appendTo("#reset-col");
  }
  $("#lightsaber").click(function()
  {
    if (enemy.hp > 0 && player.hp > 0)
    {
      enemy.hp -= player.atk;
      $(enemy.hpDisplay).text(enemy.hp);
      $("#youdamage").text(player.name + " attacks " + enemy.name + " for " + player.atk + " damage.");
      player.atk += player.initAtk;
      if (enemy.hp > 0)
      {
        $("#foedamage").text(enemy.name + " counters " + player.name + ", dealing " + enemy.ctr + " damage.");
        player.hp -= enemy.ctr;
        $(player.hpDisplay).text(player.hp);
        if (player.hp <= 0)
        {
          $("#char-col").html("");
          $("#youdamage").html("");
          $("#foedamage").html("You are defeated. Click the Reset button to play again");
        }
      }
      else if (enemy.hp <= 0)
      {
        $("#defender").html("");
        $("#foedamage").html("");
        $("#youdamage").html(enemy.name + " defeated!");
        if ($("#remainingVictims").find(".col-md-3").length == 0)
        {
          alert("You win!");
          location.reload(true);
        }
      }
    }
    else if (enemy.hp <= 0)
    {
      $("#youdamage").html("There is no enemy here.");
    }
    else if (player.hp <= 0)
    {
      $("#foedamage").html("You are still dead. Press the Reset button to play again.");
    }
  });

$("#resetButton").click(function()
{
  if ($("#char-col").find(".col-md-3").length > 0)
  {
    var r = confirm("Are you sure?");
    if (r == true)
      location.reload(true);
    else
      return;
  }
  else
    location.reload(true);
})
}

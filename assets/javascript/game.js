var darth_traya =
{

  graphic: $("<div>").attr(
  {
    class: "charbox",
    id: "traya",
  }),

      name: "Darth Traya",
      hp: 2000,
      atk: 50,
      initAtk: 50,
      ctr: 100,
      hpDisplay: ""
}

var jolee_bindo =
{
  graphic: $("<div>").attr(
  {
    class: "charbox",
    id: "jolee",
  }),
  name: "Jolee Bindo",
  hp: 1500,
  atk: 70,
  initAtk: 70,
  ctr: 150,
  hpDisplay: ""
}

var visas_marr =
{
  graphic: $("<div>").attr(
  {
    class: "charbox",
    id: "visas",
  }),
  name: "Visas Marr",
  hp: 1200,
  atk: 80,
  initAtk: 80,
  ctr: 200,
  hpDisplay: ""
}

var bastila_shan =
{
  graphic: $("<div>").attr(
  {
    class: "charbox",
    id: "bastila",
  }),
  name: "Bastila Shan",
  hp: 1800,
  atk: 40,
  initAtk: 40,
  ctr: 250,
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
        jolee_bindo.graphic.appendTo("#jolee-col");
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
        visas_marr.graphic.appendTo("#visas-col");
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
        bastila_shan.graphic.appendTo("#bastila-col");
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

          player = darth_traya;

$(".charbox").click(function()
  {
    if ($("#char-col").find(".charbox").length == 0)
    {
      $(this).parent().detach();
      $(this).parent().appendTo("#char-col");
      $("#charwrapper").appendTo("#remainingVictims");
      if ($("#char-col").find("#traya").length == 1)
        player = darth_traya;
      if ($("#char-col").find("#jolee").length == 1)
        player = jolee_bindo;
      if ($("#char-col").find("#visas").length == 1)
        player = visas_marr;
      if ($("#char-col").find("#bastila").length == 1)
        player = bastila_shan;
    }
    else if ($("#char-col").find(".charbox").length == 1 && $("#defender").find(".charbox").length == 0)
    {
      $(this).parent().detach();
      $(this).parent().appendTo("#defender");
      if ($("#defender").find("#traya").length == 1)
        enemy = darth_traya;
      if ($("#defender").find("#jolee").length == 1)
        enemy = jolee_bindo;
      if ($("#defender").find("#visas").length == 1)
        enemy = visas_marr;
      if ($("#defender").find("#bastila").length == 1)
        enemy = bastila_shan;
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

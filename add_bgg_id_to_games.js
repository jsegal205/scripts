const games = [
  {
    id: 1,
    url: "https://boardgamegeek.com/boardgame/68448/7-wonders"
  },
  {
    id: 2,
    url: "https://boardgamegeek.com/boardgame/43443/castle-panic"
  },
  {
    id: 3,
    url: "https://boardgamegeek.com/boardgame/175095/dawn-zeds-third-edition"
  },
  {
    id: 4,
    url: "https://boardgamegeek.com/boardgame/1927/munchkin"
  },
  {
    id: 5,
    url: "https://boardgamegeek.com/boardgame/70323/king-tokyo"
  },
  {
    id: 6,
    url: "https://boardgamegeek.com/boardgame/70919/takenoko"
  },
  {
    id: 7,
    url: "https://boardgamegeek.com/boardgame/124172/tsuro-seas"
  },
  {
    id: 8,
    url: "https://boardgamegeek.com/boardgame/146735/munchkin-adventure-time"
  },
  {
    id: 9,
    url:
      "https://boardgamegeek.com/boardgame/194228/rick-and-morty-mr-meeseeks-box-o-fun-dice-and-dare"
  },
  {
    id: 10,
    url: "https://boardgamegeek.com/boardgame/2453/blokus"
  },
  {
    id: 11,
    url: "https://boardgamegeek.com/boardgame/54043/jaipur"
  },
  {
    id: 12,
    url: "https://boardgamegeek.com/boardgame/65244/forbidden-island"
  },
  {
    id: 13,
    url: "https://boardgamegeek.com/boardgame/173460/dark-dealings"
  },
  {
    id: 14,
    url: "https://boardgamegeek.com/boardgame/170216/blood-rage"
  },
  {
    id: 15,
    url: "https://boardgamegeek.com/boardgame/184491/spaceteam"
  },
  {
    id: 16,
    url: "https://boardgamegeek.com/boardgame/237728/ravine"
  },
  {
    id: 17,
    url: "https://boardgamegeek.com/boardgame/168584/love-letter-batman"
  },
  {
    id: 18,
    url: "https://boardgamegeek.com/boardgame/172225/exploding-kittens"
  },
  {
    id: 19,
    url: "https://boardgamegeek.com/boardgame/156108/regular-show-fluxx"
  },
  {
    id: 20,
    url: "https://boardgamegeek.com/boardgame/50381/cards-against-humanity"
  },
  {
    id: 21,
    url: "https://boardgamegeek.com/boardgame/188834/secret-hitler"
  },
  {
    id: 22,
    url: "https://boardgamegeek.com/boardgame/211534/bears-vs-babies"
  },
  {
    id: 23,
    url: "https://boardgamegeek.com/boardgame/140/pit"
  },
  {
    id: 24,
    url: "https://boardgamegeek.com/boardgame/185154/wizard-school"
  },
  {
    id: 25,
    url: "https://boardgamegeek.com/boardgame/255664/binding-isaac-four-souls"
  },
  {
    id: 26,
    url: "https://boardgamegeek.com/boardgame/133473/sushi-go"
  },
  {
    id: 27,
    url: "https://boardgamegeek.com/boardgame/207830/5-minute-dungeon"
  },
  {
    id: 28,
    url:
      "https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf"
  },
  {
    id: 29,
    url: "https://boardgamegeek.com/boardgame/2593/pass-pigs"
  },
  {
    id: 30,
    url: "https://boardgamegeek.com/boardgame/234465/potato-pirates"
  },
  {
    id: 31,
    url: "https://boardgamegeek.com/boardgame/193621/joking-hazard"
  },
  {
    id: 32,
    url: "https://boardgamegeek.com/boardgame/197435/santa-vs-jesus"
  },
  {
    id: 33,
    url: "https://boardgamegeek.com/boardgame/2223/uno"
  },
  {
    id: 34,
    url: "https://boardgamegeek.com/boardgame/1269/skip-bo"
  },
  {
    id: 35,
    url: "https://boardgamegeek.com/boardgame/9209/ticket-ride"
  },
  {
    id: 36,
    url:
      "https://boardgamegeek.com/boardgame/201808/clank-deck-building-adventure"
  },
  {
    id: 37,
    url: "https://boardgamegeek.com/boardgame/174785/mare-nostrum-empires"
  },
  {
    id: 38,
    url: "https://boardgamegeek.com/boardgame/39856/dixit"
  },
  {
    id: 39,
    url:
      "https://boardgamegeek.com/boardgame/154560/adventure-time-card-wars-bmo-vs-lady-rainicorn"
  },
  {
    id: 40,
    url: "https://boardgamegeek.com/boardgame/153213/livestock-uprising"
  },
  {
    id: 41,
    url: "https://boardgamegeek.com/boardgame/167791/terraforming-mars"
  },
  {
    id: 42,
    url: "https://boardgamegeek.com/boardgame/221965/fox-forest"
  },
  {
    id: 43,
    url: "https://boardgamegeek.com/boardgame/246531/star-trek-fluxx"
  },
  {
    id: 44,
    url:
      "https://boardgamegeek.com/boardgame/194232/rick-and-morty-total-rickall-card-game"
  },
  {
    id: 45,
    url: "https://boardgamegeek.com/boardgame/178900/codenames"
  },
  {
    id: 46,
    url: "https://boardgamegeek.com/boardgame/1751/jumanji"
  },
  {
    id: 47,
    url: "https://boardgamegeek.com/boardgame/1836/solarquest"
  }
];

const mapToUpdate = () => {
  let output = "";
  games.map(game => {
    const splitUrl = game.url.split("/");
    const bgg_id = splitUrl[splitUrl.length - 2];

    output += `
    UPDATE games
    SET bgg_id = ${bgg_id}
    WHERE id = ${game.id};
    `;
  });
  console.log(output);
};

mapToUpdate();

import React, { Component } from "react";
import Card from "../../components/Card";

class Game extends Component {
  cards = [
    {
      id: "knife",
      image: "https://i.ytimg.com/vi/nUj4ObkwrkY/maxresdefault.jpg"
    },
    {
      id: "pipe",
      image:
        "https://snworksceo.imgix.net/dtc/3fb856c1-1399-4e9b-a2b3-74b8b094c618.sized-1000x1000.jpg?w=1000"
    },
    {
      id: "radio",
      image:
        "https://cdn.gamer-network.net/2019/articles/2019-10-03-11-23/untitled-goose-game-heading-to-playstation-and-xbox-1570098189092.jpg/EG11/thumbnail/1920x1072/format/jpg/quality/80"
    },
    {
      id: "glasses",
      image:
        "http://www.thedopeuniversity.com/wp-content/uploads/2019/06/-1560194750067.jpg"
    },
    {
      id: "bottle",
      image:
        "http://yoyosplayland.com.au/wp-content/uploads/2019/09/goose-bottle-1024x577.gif"
    },
    {
      id: "boot",
      image:
        "https://img.resized.co/entertainment/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cXFwvZW50ZXJ0YWlubWVudGllXFxcL3VwbG9hZHNcXFwvMjAxOVxcXC8wOVxcXC8yOTEzMTMyOVxcXC91bnRpdGxlZC1nb29zZS1nYW1lLXNwZWVkcnVuLnBuZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjMwLFwiZGVmYXVsdFwiOlwiaHR0cDpcXFwvXFxcL3d3dy5zdGFnaW5nLmVudGVydGFpbm1lbnQuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZ1wifSIsImhhc2giOiI1N2JiNmUzMjZjYWI3ODY3YjA3MjU5ZDU2YWQzMThmODRhMDMyYTAzIn0=/it-s-possible-to-beat-untitled-goose-game-in-just-over-three-minutes.png"
    },
    {
      id: "laundry",
      image:
        "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1574/15746725/3512292-gdc_breakout_untitledgoosegame_indiemix_site.jpg"
    },
    {
      id: "honk",
      image: "https://i.ytimg.com/vi/_1GLCEPezxk/maxresdefault.jpg"
    },
    {
      id: "picnic",
      image:
        "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2019/09/untitled-goose-game-house-house-feature-interview.jpeg?itok=-9Ey-lzM"
    },
    {
      id: "coat",
      image:
        "https://cdn.mos.cms.futurecdn.net/JycrJzD5tvbGHWgjtPrRZY-320-80.jpg"
    },
    {
      id: "sandwich",
      image:
        "https://i2.wp.com/culturedvultures.com/wp-content/uploads/2019/04/Untitled-Goose-Game.jpg?fit=770%2C513&ssl=1"
    },
    {
      id: "peace",
      image:
        "https://i.kym-cdn.com/entries/icons/facebook/000/018/215/cover8.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      cards: this.cards,
      clickedCards: []
    };
  }

  cardClicked = card => {
    if (this.state.clickedCards.includes(card.id)) {
      alert("You got Goosed");
      this.setState({
        clickedCards: []
      });
    } else {
      this.setState({ clickedCards:[...this.state.clickedCards, card.id]});
    }
  };

  render() {
    console.log(this.state.clickedCards);
    return (
      <div>
        <h1>Clicky Game</h1>
        <div className="row">
          {this.state.cards.map((card, index) => (
            <Card
              key={index}
              onClick={() => this.cardClicked(card)}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;

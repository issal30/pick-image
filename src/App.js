import { Component } from "react";
import "./App.css";
class App extends Component {
  clickImage = (e) => {
    this.setState({
      ...this.state,
      img: e.target.src,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  constructor(props) {
    super(props);
    this.state = {
      img: "https://cdn.mos.cms.futurecdn.net/KNGZRXySsM7quLuNUa6C4h.jpg",
      isMode: false,
      listimg: [
        "https://aasnova.org/wp-content/uploads/2021/09/360-cm-la-silla-cc.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        "https://cdn.pixabay.com/photo/2015/10/27/08/51/autumn-1008520_960_720.png",
        "https://img.freepik.com/premium-photo/saturn-planet-with-night-view-rising-sun-realistic-view-solar-system-3d-rendering_508524-249.jpg?w=2000",
        "https://img.freepik.com/premium-photo/saturn-planet-with-night-view-rising-sun-realistic-view-solar-system-3d-rendering_508524-249.jpg?w=2000",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
      ],
    };
  }
  render() {
    return (
      <>
        <div className={this.state.isMode ? "dark-mode" : "light-mode"}>
          <div style={{ width: "70%" }}>
            <div className="container">
              <span style={{ color: this.state.isMode ? "grey" : "yellow" }}>
                ☀︎
              </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() =>
                      this.setState({
                        ...this.state,
                        isMode: !this.state.isMode,
                      })
                    }
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span style={{ color: this.state.isMode ? "#c96dfd" : "grey" }}>
                ☽
              </span>
            </div>
            <div>
              <img className="img" src={this.state.img} alt="img space" />
              <div className="grid">
                {this.state.listimg.map((e, i) => (
                  <div className="parent" key={i}>
                    <img
                      className={
                        !this.state.isMode ? "img-switch" : "img-component"
                      }
                      src={e}
                      onClick={this.clickImage}
                      // key={i}
                      alt="img space"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

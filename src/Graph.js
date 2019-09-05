import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      last: null,
      visibil: "none",
      data: [{ name: "Page A", uv: 40, pv: 2400, amt: 2400 }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ac = this.ac.bind(this);
  }
  handleChange(event) {
    this.setState({ weight: event.target.value });
  }

  handleSubmit(event) {
    let date = new Date().getHours();
    this.setState(prevState => ({
      data: [
        ...prevState.data,
        { name: date, uv: this.state.weight, pv: 2400, amt: 2400 }
      ]
    }));
    this.setState({ last: this.state.weight });
    event.preventDefault();
  }
  //let visibil = "none";
  ac() {
    this.setState({
      visibil: this.state.visibil === "none" ? "block" : "none"
    });
  }
  render() {
    const Kilo = "Kilo almışsızınız.";
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ padding: 10 }}>
          <label>
            <input
              className="search"
              type="number"
              onChange={this.handleChange}
              placeholder="Kilonuzu girin."
              style={{ width: "60%" }}
            />
          </label>
          <input className="addButton" type="submit" value="Submit" />
        </form>
        <p>{this.state.last >= this.state.weight ? Kilo : this.state.weight}</p>

        <div style={{ position: "fixed", width: "25%" }}>
          <button onClick={this.ac} className="shwbtn">
            Yeni kişi ekle
          </button>

          <div
            class="ekle"
            id="myForm"
            style={{ display: this.state.visibil, width: "25%" }}
          >
            <form>
              <h1>Giriş</h1>
              <input type="text" className="addT" placeholder="İsim" />
              <input
                type="number"
                in="0"
                className="addT"
                placeholder="Başlangıç kilonuz."
              />
            </form>
            <button onClick={this.ac}>Ekle</button>
          </div>
        </div>

        <LineChart
          className="table"
          width={480}
          height={300}
          data={this.state.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

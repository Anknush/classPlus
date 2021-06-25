import './App.css';
import React from "react";
import { SearchBox } from "./components/card-main/searchbox/seaarch-box"
import { CardApp } from "./components/card-main/card-main"
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=4a8c3a11f25e671651c82b30d95fb30f&format=json&nojsoncallback=1")
      .then((Response) => Response.json()
        .then((users) => this.setState({ locations: users.photos.photo })));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { locations, searchField } = this.state;
    const filterLocations = locations.filter(location => location.title.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <div className="Header">
          <h1>Search Photos</h1>
          <SearchBox placeholder="search-box" handleChange={this.handleChange} />
        </div>
        <CardApp Locations={filterLocations} />
      </div>
    )
  }
}

export default App;

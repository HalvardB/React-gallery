import React, { Component } from 'react';
import PictureList from "./Components/PictureList";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";
import apiKey from "./config";
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats and dogs') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(data => {
        console.log(data.data.photos.photo)
        this.setState({
          photos: data.data.photos.photo,
          loading: false
        });
      }).catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div class="container">
        <Search
          onSearch={this.performSearch}
        />

        <NavBar />

        <div class="photo-container">
          <h2>Results</h2>
          <ul>
            <PictureList data={this.state.photos}/>

          </ul>
        </div>
      </div>
    );
  }
}

export default App;

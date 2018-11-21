import React, { Component } from 'react';
import apiKey from './config'; 
import './App.css';
import axios from 'axios';
// React Router imports
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Gallery from './components/Gallery';
import Header from './components/Header';
import Nav from './components/Nav';
import Search from './components/Search';
import ErrorNotFound from './components/ErrorNotFound';
import Loading from './components/Loading';

class App extends Component {

  constructor() {
    super();
    this.state = {
      img: [],
      cats: [],
      lizard: [],
      elephant: [],
      loading: true
    };
  }
  // Mounts the components
  componentDidMount() {
    this.performSearch('monkey');
    this.catsSearch('cats');
    this.lizardSearch('lizard');
    this.elephantSearch('elephant');
  }

  // Search function
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          img: response.data.photos.photo,
          loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  // Cats Search 
  catsSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  // lizard Search 
  lizardSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        lizard: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

// elephant Search 
  elephantSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        elephant: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }


  // Renders the page.
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Header />
              {/* <Search onSearch={this.performSearch} /> */}
              <Route exact path="/" component={() => <Search onSearch={this.performSearch} />} />
              <Route exact path="/cats" component={() => <Search onSearch={this.catsSearch} />} />
              <Route exact path="/lizard" component={() => <Search onSearch={this.lizardSearch} />} />
              <Route exact path="/elephant" component={() => <Search onSearch={this.elephantSearch} />}/>
              {/* <Route path="/search" component={() => <Search onSearch={this.performSearch} />} /> */}
            <Nav />
          </div>
          
          <div className='photo-container'>            
            { 
              (this.state.loading)
              ? <Loading /> :
              <div>
                <Switch>
                  <Route exact path="/" render={() => <Gallery data={this.state.img} />} />
                  <Route exact path="/cats" render={() => <Gallery data={this.state.cats} />} />
                  <Route path="/lizard" render={() => <Gallery data={this.state.lizard} />} />
                  <Route path="/elephant" render={() => <Gallery data={this.state.elephant} />} />
                  {/* <Route exact path="/search" render={() => <Gallery data={this.state.img} />} /> */}
                  <Route component={ErrorNotFound} />
                </Switch> 
              </div>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
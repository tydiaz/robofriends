import { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  onSearchInput = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log(filteredRobots);

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchInput={this.onSearchInput} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : ""
        }
    }

    onChangeEvent = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(Response => Response.json())
            .then(users => this.setState({robots : users}));
    }

    render() {
        const {robots, searchfield} = this.state;
        const filtredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
            <div className= "tc">
                <h1>Robot friends</h1>
                <SearchBox searchEvent = {this.onChangeEvent} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots= {filtredRobots} /> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        );   
    }
}

export default App;
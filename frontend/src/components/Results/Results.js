import React from 'react';
import Result from './Result/Result';
import axios from 'axios';

class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            results: [],
            
        }

        
    }

    
    componentDidMount() {
        this.fetchLeaderboard();     
    }
    
    async fetchLeaderboard() {  
    const res = await axios.get('http://localhost:9999/api/results')
    const results = res.data;
   
    this.setState({results: results});
    }



    render() {




        return (
            <div>
                         {this.state.results.map(result => {
                       
                       return (
                          <Result
                           key={result._id}
                           id={result._id}
                           nickname={result.nickname}
                           score={result.score}
                          
                           />

                       )
                   })}
            </div>
        );
    }
}

export default Results;
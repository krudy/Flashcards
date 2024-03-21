import React from 'react';
import Result from './Result/Result';
import axios from 'axios';

class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            results: [],
            scoreToBeat: 0,

        }


    }


    componentDidMount() {
        this.fetchLeaderboard();
    }

    async fetchLeaderboard() {
        const res = await axios.get('http://localhost:9999/api/results')
        let results = res.data;

        // Sorting in descending order by 'score' field
        results.sort((a, b) => b.score - a.score);

        // Filling empty fields
        while (results.length < 10) {
            results.push({ score: 0, nickname: "billy - a very weak player" });
        }

        // cut to 10 elements
        results = results.slice(0, 10);

        this.setState({ results: results });
        
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
                        scoreToBeat={result.scoreToBeat}
                    />

                )
                })}
            </div>
        );
    }
}

export default Results;

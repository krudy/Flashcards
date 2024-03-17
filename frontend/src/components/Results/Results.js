import React from 'react';
//import Result from './Result/Result';
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

    

    // async AddFlashcard(flashcard) {
    //    await axios.post('http://localhost:9999/api/flashcards', flashcard);
    // }


    render() {




        return (
            <div>
                        <p>testowo</p>  
            </div>
        );
    }
}

export default Results;
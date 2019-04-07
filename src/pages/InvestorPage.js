import React, {Component} from 'react';
import Combo from '../components/Combo';

class InvestorPage extends Component {
    constructor(){
        super();
        this.state = {
            symbol: null,
            companyName: null
        }
    }

    handleSelect = (company) => {
        this.setState({
            symbol: company.symbol,
            companyName: company.companyName
        })
    }

    render(){
        return (
            <Combo 
            handleSelect = {this.handleSelect}
            companyName = {this.state.companyName}/>
        );
    }
}
export default InvestorPage;
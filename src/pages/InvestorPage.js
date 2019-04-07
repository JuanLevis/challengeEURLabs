import React, {Component} from 'react';
import Combo from '../components/Combo';
import StockCard from '../components/StockCard';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';

class InvestorPage extends Component {
    constructor(){
        super();
        this.state = {
            symbol: null,
            companyName: null,
            fetchLimit: false,
            companyData: null
        }
    }

    handleSelect = (company) => {
        this.setState({
            symbol: company.symbol,
            companyName: company.companyName
        })
    }

    calcularDiferencia(todayValue, yesterdayValue){
        return todayValue - yesterdayValue;
    }

    fetchData(symbol) {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=X86NOH6II01P7R24`;

        axios.get(url)
        .then(res => {
            if(res.data['Time Series (Daily)']){
            const today = Object.values(res.data['Time Series (Daily)'])[0];
            const yesterday = Object.values(res.data['Time Series (Daily)'])[1];
            const data = {
                open: today['1. open'],
                high: today['2. high'],
                low: today['3. low'],
                close: today['4. close'],
                difference: this.calcularDiferencia(today['1. open'], yesterday['4. close'])
            }
            this.setState({
                ...this.state,
                fetchLimit: false,
                companyData: data
            })
            }
            else{
                this.setState({
                    ...this.state,
                    fetchLimit: true
                })
            }
        }).catch(error => console.log(error))
        //FIXME: Deberia ir a parar al log!
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.symbol !== this.state.symbol){
            this.fetchData(this.state.symbol)
        }
    }

    render(){
        return (
            <>
                <Combo 
                handleSelect = {this.handleSelect}
                companyName = {this.state.companyName}/>
                {this.state.fetchLimit ? <Alert dismissible variant='danger'>Limite de peticiones alcanzado. Vuelva en un minuto</Alert>
                : <StockCard companyData = {this.state.companyData}/>}
            </>
        );
    }
}
export default InvestorPage;
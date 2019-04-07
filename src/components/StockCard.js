import React from 'react';
import Card from 'react-bootstrap/Card';
import NumberFormat from 'react-number-format';
import './StockCard.css';

const StockCard = ({companyData}) => (
    companyData ? 
    <Card>
        <Card.Body>
            <Card.Title>Cotizacion actual</Card.Title>
            <Card.Text>
                <ul>
                    <li>Open: {companyData.open}</li>
                    <li>High: {companyData.high}</li>
                    <li>Low: {companyData.low}</li>
                    <li>Close: {companyData.close}</li>
                </ul>
            </Card.Text>
            <Card.Footer>Diferencia: 
                <NumberFormat 
                value={companyData.difference}
                displayType={'text'}
                decimalSeparator={','}
                prefix={'USD '}
                decimalScale={2}
            />
            (<NumberFormat
                className={companyData.difference < 0 ? 'negative' : 'positive'} 
                value={(companyData.difference * 100) / companyData.open}
                displayType={'text'}
                decimalSeparator={','}
                suffix={'%'}
                decimalScale={2}
            />)</Card.Footer>
        </Card.Body>
    </Card>
    : <></>
);

export default StockCard;
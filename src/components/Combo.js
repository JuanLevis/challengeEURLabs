import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Combo extends Component 
{
    handleSelect(company) {
        const aux = company.split(" ");
        this.props.handleSelect({
            symbol: aux[1],
            companyName: aux[0]
        })
    }

    render()
    {
        const {companyName} = this.props;
        return(
            <DropdownButton variant='warning' title={`${companyName ? companyName : 'Seleccione una compañia'}`}>
                <Dropdown.Item onSelect={() => this.handleSelect('Facebook FB')}>Facebook (FB)</Dropdown.Item>
                <Dropdown.Item onSelect={() => this.handleSelect('Apple AAPL')}>Apple (AAPL)</Dropdown.Item>
                <Dropdown.Item onSelect={() => this.handleSelect('Microsoft MSFT')}>Microsoft (MSFT)</Dropdown.Item>
                <Dropdown.Item onSelect={() => this.handleSelect('Google GOOGL')}>Google (GOOGL)</Dropdown.Item>
                <Dropdown.Item onSelect={() => this.handleSelect('Amazon AMZN')}>Amazon (AMZN)</Dropdown.Item>
            </DropdownButton>
        );
    }
}
export default Combo;
import React, { Component } from "react";
import StockService from "../services/stock.service";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            allotment: '',
            cost: '',
            sell_price: '',
            buy_commission: '',
            sell_commission: '',
            tax: '',
            errors: {
                symbol: '',
                allotment: '',
                cost: '',
                sell_price: '',
                buy_commission: '',
                sell_commission: '',
                tax: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        let state = this.state;
        state[event.target.name] = event.target.value;
        if(event.target.value.length === 0) state.errors[event.target.name] = 'This field is required';
        else state.errors[event.target.name] = '';
        this.setState(state);
    }

    handleSubmit = () => {
        this.validateForm(() => {
            if(Object.values(this.state.errors).filter(v => v !== '').length === 0) {
                StockService.getResults(this.state, data => {
                    if(data){
                        this.props.showData(data);
                    }
                })
            }
        });
        
    }

    validateForm = (callback) => {
        let state = this.state;
        Object.keys(state.errors).forEach(v => {
            if(state[v].length === 0) state.errors[v] = 'This field is required';
            else if(v === 'allotment' && Number(state[v]) <=0) state.errors[v] = 'Cannot be zero';
            else state.errors[v] = '';
        });
        this.setState(state,callback);
    }

    render() {
        console.log(this.state);
        return(
            <div className='formDiv'>
                <div className='formElem'>
                    <input name='symbol' type='text' onChange={this.handleChange} value={this.state.symbol} className='textfield' />
                    <p className='error'>{this.state.errors.symbol}</p>
                    <label htmlFor='symbol'>Symbol</label>
                </div>
                <div className='formElem'>
                    <input name='allotment' type='number' onChange={this.handleChange} value={this.state.allotment} className='textfield' />
                    <p className='error'>{this.state.errors.allotment}</p>
                    <label htmlFor='allotment'>Allotment</label>
                </div>
                <div className='formElem'>
                    <input name='cost' type='number' onChange={this.handleChange} value={this.state.cost} className='textfield' />
                    <p className='error'>{this.state.errors.cost}</p>
                    <label htmlFor='cost'>Cost</label>
                </div>
                <div className='formElem'>
                    <input name='sell_price' type='number' onChange={this.handleChange} value={this.state.sell_price} className='textfield' />
                    <p className='error'>{this.state.errors.sell_price}</p>
                    <label htmlFor='sell_price'>Sell Price</label>
                </div>
                <div className='formElem'>
                    <input name='buy_commission' type='number' onChange={this.handleChange} value={this.state.buy_commission} className='textfield' />
                    <p className='error'>{this.state.errors.buy_commission}</p>
                    <label htmlFor='buy_commission'>Buy Commission</label>
                </div>
                <div className='formElem'>
                    <input name='sell_commission' type='number' onChange={this.handleChange} value={this.state.sell_commission} className='textfield' />
                    <p className='error'>{this.state.errors.sell_commission}</p>
                    <label htmlFor='sell_commission'>Sell Commission</label>
                </div>
                <div className='formElem'>
                    <input name='tax' type='number' onChange={this.handleChange} value={this.state.tax} className='textfield' />
                    <p className='error'>{this.state.errors.tax}</p>
                    <label htmlFor='tax'>Tax</label>
                </div>
                <div className='formElem'>
                    <input type='button' onClick={this.handleSubmit} className='Button' value='Submit'/>
                </div>
            </div>
        );
    }
}

export default Form;
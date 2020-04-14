import React from "react";

const Results = (props) => {
    console.log(props);
    return (
        <div className='formDiv'>
            <h3>Profit Report</h3>
            <div className='formElem'>
                <p className='display'>Proceeds: </p><p className='result'>{props.proceeds}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Cost: </p><p className='result'>{props.realized_cost}</p>
            </div>
            <h5>Cost Details</h5>
            <div className='formElem'>
                <p className='display'>Total Purchase Price: </p><p className='result'>{props.purchase_price}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Buy Commission: </p><p className='result'>{props.buy_commission}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Sell Commission: </p><p className='result'>{props.sell_commission}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Tax on Capital Gain at {props.tax + '%: '}</p><p className='result'>{props.tax_on_capital_gain}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Net Profit: </p><p className='result'>{props.realized_profit}</p>
            </div>
            <div className='formElem'>
                <p className='display'>Return On Investment: </p><p className='result'>{props.return_on_investment + '%'}</p>
            </div>
            <div className='formElem'>
                <p className='display'>To break even,you should have a final share price of: </p><p className='result'>{props.break_even}</p>
            </div>
        </div>
    );
}

export default Results;
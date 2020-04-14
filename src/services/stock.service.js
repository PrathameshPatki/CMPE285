import axios from 'axios';
import Constants from "../utils/Constants";

const StockService = () => {}

StockService.getResults = (data, callback) => {
    const query = `symbol=${data.symbol}&allotment=${data.allotment}&&cost=${data.cost}&sell_price=${data.sell_price}&buy_commission=${data.buy_commission}&sell_commission=${data.sell_commission}&tax=${data.tax}`;
    axios.get(Constants.svcUrl + '/getResults?' + query).then(resp => {
        callback(resp.data);
    })
}

export default StockService;
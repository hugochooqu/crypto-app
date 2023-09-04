import classes from './coinsList.module.css'

const CoinsList = (props) => {
    let number;
   for(let i = 0; i <= 100;){
    number = i++;
   }

    return(
        <div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Percentage</th>
                </tr>
                <tr className={classes.coins}>
                    <td>{number}</td>
                    <td><img src={props.image} alt='/' /></td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.percentage}</td>
                </tr>
            </table>
        </div>
    )
}

export default CoinsList;
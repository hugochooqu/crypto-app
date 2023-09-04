import classes from './coins.module.css';

import Card from '../UI/card';

import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const Coins = (props) => {
  return (
    <Card className={classes.card}>
      <div className={classes.coins}>
        <img src={props.image} alt="/" />
      </div>
      <div>
        <h5>{props.name}</h5>
        <p>#{props.price}</p>
      </div>

      {props.percentage < 0 ? (
        <span className={classes.red}>
          <FiArrowDown />
          {props.percentage}%
        </span>
      ) : (
        <span className={classes.green}>
          <FiArrowUpRight />
          {props.percentage}%
        </span>
      )}
    </Card>
  );
};

export default Coins;

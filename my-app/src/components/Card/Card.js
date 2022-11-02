import React, {useState} from "react";
import './Card.css';

const Card = (props) => {
  const {title, body} = props;

  const [checked, setChecked] = useState(false);

  return(
    
  <div className={checked ? 'checked_wrapper' : 'wrapper' }>
    <div className="title">
      {title}
    </div >

    <div className="body">
      {body}
    </div>

    <div className="checkbox" >
      <input onChange={() => setChecked(!checked)} type='checkbox' />
    </div>
  </div>
  )
}
export default Card;
import React from 'react';

class SinglePickle extends React.Component {
  render() {
    const {
      type,
      size,
      price,
      numberInStock,
    } = this.props.pickle;

    return (
      <div className="ShopCard">
        <ul>
          <li>Type: {type}</li>
          <li>Size: {size}</li>
          <li>Price: {price}</li>
          <li>Number In Stock: {numberInStock}</li>
        </ul>
      </div>
    );
  }
}

export default SinglePickle;

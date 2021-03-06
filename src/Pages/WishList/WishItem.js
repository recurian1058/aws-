import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default class WishItem extends Component {
  handleDelete = (id) => {
    this.props.deleteData(id);
  };

  render() {
    const {
      list,
      key,
      id,
      price,
      name,
      img,
      quantity,
      isSelected,
    } = this.props;

    return (
      <div>
        <div className="itemWishList">
          <div className="itemImage">
            <img src={img[0]} />
            <img src={img[1]} />
            <img src={img[2]} />
            <img src={img[3] !== undefined ? img[3] : null} />
          </div>
          <div className="itemBox">
            <div className="itemDetail">
              <div className="itemData">
                <div>{name}</div>
                <div>{list.option}</div>
                <div className="quantity">
                  <div>QUANTITY :</div>
                  <button className="quantityButton">-</button>
                  <div>{quantity}</div>
                  <button className="quantityButton">+</button>
                </div>
              </div>
              <div className="priceBox">
                <div className="itemPrice">{`${price.toLocaleString()} USD`}</div>
                <button
                  onClick={() => {
                    this.props.removeItem(id);
                    this.handleDelete(id);
                  }}
                  className="remove"
                >
                  REMOVE
                </button>
              </div>
            </div>
            <div
              className="checkboxContainer"
              onClick={() => {
                this.props.selectHandler(id);
              }}
            >
              <div
                className={
                  isSelected ? "checkArea checkboxOn" : "checkArea checkboxOff"
                }
              >
                <div>
                  <div className="check"></div>
                </div>
              </div>
              <div className="text">SELECT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

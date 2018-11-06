import React, { Component } from 'react';
import './style.css';

export default class Selectbox extends Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0],
  }

  dropDown = () => {
    const { showItems } = this.state;
    this.setState({
      showItems: !showItems,
    });
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false,
    });
  }

  render() {
    const { items, showItems, selectedItem } = this.state;
    return (
      <div>
        <div className="select-box--arrow" onClick={this.dropDown}>
          <span className={`${showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />
        </div>
        <div
          style={{ display: showItems ? 'block' : 'none' }}
        >
          {items.map(item => (
            <div
              key={item.id}
              onClick={() => this.selectItem(item)}
              className={selectedItem === item ? 'selected' : ''}
              value={item.value}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

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

  keyDownHandler = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      if (e.target.getAttribute('role') === 'menubar') {
        this.dropDown();
      } else if (e.target.getAttribute('role') === 'menuitem') {
        this.selectItem();
      }
    }
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
        <div
          className="select-box--arrow"
          onClick={this.dropDown}
          onKeyDown={this.keyDownHandler}
          role="menubar"
          tabIndex="0"
        >
          <span className={`${showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />
        </div>
        <div
          style={{ display: showItems ? 'block' : 'none' }}
          aria-expanded={showItems ? 'true' : 'false'}
        >
          {items.map(item => (
            <div
              key={item.id}
              onClick={() => this.selectItem(item)}
              onKeyDown={this.keyDownHandler}
              className={selectedItem === item ? 'selected' : ''}
              value={item.value}
              role="menuitem"
              tabIndex="0"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

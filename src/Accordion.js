import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  handleClick(index) {
    const { activeIndex } = this.state;
    this.setState({ activeIndex: activeIndex === index ? null : index });
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index}>
            <div className="accordion-header" onClick={() => this.handleClick(index)}>
              {item.name}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>Capital: {item.capital}</p>
                <p>ISO 2: {item.iso2}</p>
                <p>ISO 3: {item.iso3}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;

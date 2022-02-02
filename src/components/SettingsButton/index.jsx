import React, { Component } from 'react';
import '../../styles/default.css';

export default class SettingsButton extends Component {
  handleCheckbox = ({ target }) => {
    const check = target.checked;
    const id = target.id;
    this.props.onCheckChange(check, id);
  }

  render() {
    const { fieldName, item } = this.props;

    // slider ref: https://www.w3schools.com/howto/howto_css_switch.asp
    
    return (
      <div className="password__settings color__field">
        <div className="password__field"><span>{ fieldName }</span></div>
        <label htmlFor={`checkbox-${item}`} className="password__switch">
          <input
            className="password__checkbox"
            type="checkbox"
            id={`checkbox-${item}`}
            onChange={ this.handleCheckbox }
          />
          <span className="password__settings-slider round"></span>
        </label>
      </div>
    );
  }
}

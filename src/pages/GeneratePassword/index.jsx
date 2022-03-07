import React, { Component } from 'react';
import '../../styles/default.css';
import Header from '../../components/Header';
import SettingsButton from '../../components/SettingsButton';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';

class GeneratePassword extends Component {
  constructor() {
    super();

    this.state = {
      isLowercase: false,
      isNumber: false,
      isSymbol: false,
      isUppercase: false,
      length: 12,
      password: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ length: target.value });
  }

  handleClick = () => {
    const {
      isLowercase,
      isNumber,
      isSymbol,
      isUppercase,
      length,
    } = this.state;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%*()';

    const combine = (isUppercase ? uppercase : '')
     + (isLowercase ? lowercase : '')
     + (isNumber ? numbers : '')
     + (isSymbol ? symbols : '');

    let result = '';
    for (let i = 1; i <= length; i += 1) {
      result += combine.charAt(Math.random() * (combine.length));
    }
    this.setState({ password: result },
      localStorage.setItem('generated_password', result));
  }

  handleCheck = (checked, id) => {
    switch (id) {
    case 'checkbox-1':
      this.setState({ isUppercase: checked });
      break;
    case 'checkbox-2':
      this.setState({ isLowercase: checked });
      break;
    case 'checkbox-3':
      this.setState({ isNumber: checked });
      break;
    case 'checkbox-4':
      this.setState({ isSymbol: checked });
      break;
    default:
      this.setState(() => {});
    }
  }

  render() {
    const { length, password } = this.state;

    return (
      <>
        <Header title="Generate Password" />
        <main>
          <section className="user">
            <div className="user__avatar"><Avatar /></div>
            <div className="user__info color__field">
              <span className="user__title">Name: </span>
              <span className="user__text">Gabriel Soares</span>
            </div>
          </section>
          <section className="bar">
            <span className="bar__line" />
          </section>
          <section className="password">
            <p className="header__title">Generate Password</p>
            <p className="password__title color__title">Generated Password</p>
            <div className="password__generated color__field">
              { password || 'Click generate' }
            </div>
            <p className="password__title color__title">{ `Length: ${length}` }</p>
            <div className="password__length color__field">
              <input
                type="range"
                min="5"
                max="20"
                value={ length }
                className="password__length-slider"
                id="myRange"
                onChange={ this.handleChange }
              />
            </div>
            <p className="password__title color__title">Settings</p>
            <SettingsButton
              item="1"
              fieldName="Include uppercase"
              onCheckChange={ this.handleCheck }
            />
            <SettingsButton
              item="2"
              fieldName="Include lowercase"
              onCheckChange={ this.handleCheck }
            />
            <SettingsButton
              item="3"
              fieldName="Include numbers"
              onCheckChange={ this.handleCheck }
            />
            <SettingsButton
              item="4"
              fieldName="Include symbols"
              onCheckChange={ this.handleCheck }
            />
            <Button title="Generate password" onClick={ this.handleClick } />
          </section>
        </main>
      </>
    );
  }
}

export default GeneratePassword;

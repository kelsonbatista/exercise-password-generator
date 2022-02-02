import React, { Component } from 'react';
import Avatar from '../Avatar';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    
    return (
      <header>
        <section className="header">
          <div className="header__back color__title"><span>{'< Back'}</span></div>
          <div className="header__middle">
            <div className="header__title"><p>{ title }</p></div>
            <div className="header__avatar"><Avatar /></div>
          </div>
        </section>
      </header>
    );
  }
}

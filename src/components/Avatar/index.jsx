import React, { Component } from 'react';
import avatar from '../../images/avatar.png';

export default class Avatar extends Component {
  render() {
    return (
    <img src={ avatar } alt="Avatar" className="image__avatar" />
    );
  }
}

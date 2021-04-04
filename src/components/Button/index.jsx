import React from "react";
import './styles.css'

export class Button extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return <button className='button' onClick={onClick}>{text}</button>;
  }
}

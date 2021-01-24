import React, { Component } from 'react';
import PropTypes from "prop-types";


export default class Header extends Component {
   static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       return (
           <div className="header">
               <span>AlekSeLit</span>
               <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
           </div>
       )
   }
}

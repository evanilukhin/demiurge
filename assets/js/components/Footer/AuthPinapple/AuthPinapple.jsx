import React from "react"
import Modal from 'react-modal';

import style from './AuthPinapple.less'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class AuthPinapple extends React.Component  {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      admin_password: '123'
    };
    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  authentification() {
    console.log('Auth')
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  handleChange(event) {
   this.setState({admin_password: event.target.value});
 }

  handleSubmit(event) {
   alert('A password: ' + this.state.admin_password);
   event.preventDefault();
   this.setState({modalIsOpen: false});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <a onClick={this.openModal}>
        <img className={style.ananas} border="0" src="images/ananas-256.png"/>
        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles}
         >
         <form onSubmit={this.handleSubmit}>
           <input type="password"
                  name="admin_password"
                  value={this.state.admin_password}
                  onChange={this.handleChange}/>
           <input type="submit" value="It's me!"/>
         </form>
       </Modal>
      </a>
    );
  }
}

import React from "react"
import Modal from 'react-modal';
import jsSHA from 'jssha'
import {Cookies, withCookies} from "react-cookie";

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

class AuthPinapple extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      modalIsOpen: false,
      admin_password: ''
    };
    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  authentification(encrypted_password) {
    const { cookies } = this.props;
    cookies.set("encrypted_password", encrypted_password, {path: "/"})
  }

  openModal() {
    const { cookies } = this.props;
    if (cookies.get("encrypted_password")) {
      cookies.remove("encrypted_password");
    } else {
      this.setState({modalIsOpen: true});
    }
  }

  handleChange(event) {
   this.setState({admin_password: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();
   var shaObj = new jsSHA("SHA3-512", "TEXT");
   shaObj.update(this.state.admin_password);
   this.authentification(shaObj.getHash("HEX"))
   this.setState({modalIsOpen: false});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <a onClick={this.openModal}>
        <img className={style.ananas} border="0" src="/images/ananas-256.png"/>
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

export default withCookies(AuthPinapple);

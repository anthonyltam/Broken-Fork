import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signIn, signUp } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Welcome to BrokenFork!',
    submitButton: 'Create Account'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signUp(user)),
    otherForm: () =>  dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(SessionForm);

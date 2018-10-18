import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signIn, signUp, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Please sign in',
    submitButton: 'Sign In'
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signIn(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: () =>  dispatch(openModal('signup')),
    openModal: () => dispatch(openModal('login')),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(signIn({email: 'DemoUser', password: 'starwars'}))
  };
};

export default connect(msp, mdp)(SessionForm);

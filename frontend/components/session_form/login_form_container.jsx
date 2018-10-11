import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signIn, signUp } from '../../actions/session_actions';
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
    otherForm: (
      <button on Click={() => dispatch(signUp())}>
        Sign up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);

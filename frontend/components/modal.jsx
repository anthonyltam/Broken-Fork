import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { clearErrors } from '../actions/session_actions';

function Modal({modal, closeModal, clearErrors}) {
  if (!modal) {
    return null;
  }

  const closeSession = () => {
    closeModal();
    clearErrors();
  };

  let component;
  switch (modal) {
    case 'login':
      component = <LogInFormContainer />;
      break;
    case 'signup':
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeSession}>
      <div className='modal-child' onClick={ e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(Modal);

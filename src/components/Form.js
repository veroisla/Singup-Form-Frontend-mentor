import React from 'react';
import '../styles/components/Form.scss';
import SubmitBtn from './SubmitBtn';

function Form(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };
  return (
    <section className="form">
      <form
        className="form__container"
        action=""
        method="POST"
        name="signupForm"
        onSubmit={props.handleSubmit}
      >
        <input
          className={
            props.errors.name !== '' && props.completeForm.name === false
              ? 'form__inputError'
              : 'form__input'
          }
          type="text"
          name="name"
          id="name"
          placeholder="First Name"
          onChange={handleInput}
        />
        {props.errors.name && (
          <p className="form__errorText">{props.errors.name}</p>
        )}
        <input
          className={
            props.errors.lastName !== '' &&
            props.completeForm.lastName === false
              ? 'form__inputError'
              : 'form__input'
          }
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={handleInput}
        />

        {props.errors.lastName && (
          <p className="form__errorText">{props.errors.lastName}</p>
        )}
        <input
          className={
            props.errors.email !== '' && props.completeForm.email === false
              ? 'form__inputError'
              : 'form__input'
          }
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={handleInput}
        />
        {props.errors.email && (
          <p className="form__errorText">{props.errors.email}</p>
        )}
        <input
          className={
            props.errors.password !== '' &&
            props.completeForm.password === false
              ? 'form__inputError'
              : 'form__input'
          }
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleInput}
        />
        {props.errors.password && (
          <p className="form__errorText">{props.errors.password}</p>
        )}

        <SubmitBtn handleForm={props.handleForm} />

        <p className="form__termsContainer">
          <small className="form__terms">
            By clicking the button, you are agreeing to our{' '}
            <span className="form__pinkSpan">Terms and Services</span>
          </small>
        </p>
      </form>
    </section>
  );
}

export default Form;

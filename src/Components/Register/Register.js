import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      imageUrl: ""
    };
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:4003/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        imageUrl: this.state.imageUrl
      })
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    return (
      <article className='br3 ba b--white-60 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0 white bg-near-#202020'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6 white bg-near-black' htmlFor='name'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-white hover-black w-100'
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onNameChange}
                  required={true}
                />
                <label className='db fw6 lh-copy f6 white bg-near-black' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-white hover-black w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                  required={true}
                />
                <label className='db fw6 lh-copy f6 white bg-near-black' htmlFor='image-url'>
                  ImageUrl
                </label>
                <input
                  className='b pa2 input-reset ba bg-white hover-black w-100'
                  type='link'
                  name='image-url'
                  id='image-url'
                  onChange={this.onImageUrl}
                  required={true}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6 white bg-near-black' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-white hover-black w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                  required={true}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--white bg-white grow pointer f6 dib'
                type='submit'
                value='Register'
                onClick={this.onSubmitSignIn}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}
export default Register;

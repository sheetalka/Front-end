import React from "react";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      signInUrl: ""
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onImageUrlChange = (event) => {
    this.setState({ signInUrl: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch("http://localhost:4003/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
        imageUrl: this.state.signInUrl
      }),
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
    const { onRouteChange } = this.props;
    return (
      <article className='br3 ba b--white-60 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0 white bg-near-#202020'>Sign In</legend>
              <div className='mt3'>
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
                  Image Url
                </label>
                <input
                  className='pa2 input-reset ba bg-white hover-black w-100'
                  type='link'
                  name='image-url'
                  id='image-url'
                  onChange={this.onImageUrlChange}
                  required={true}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6 white bg-near-black' htmlFor='password'>
                  Password
                </label>
                <input
                  className='pa2 input-reset ba bg-white hover-black w-100'
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
                onClick={this.onSubmitSignIn}
                className='b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                onClick={() => onRouteChange("register")}
                className='f6 link dim white db pointer'
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}
export default Signin;

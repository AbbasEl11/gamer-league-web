import '../styles/components/forms.css';

function Login() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit" className="btn btn-primary btn--block">Log In</button>

        <div className="form-footer">
          Don’t have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

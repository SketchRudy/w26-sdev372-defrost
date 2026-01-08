import './index.css'

function App() {

  return (
    <>
      <h1>Defrost</h1>
      <h4>Discard the Frost.</h4>
      <div class="register">
        <h2>Sign up Today!</h2>
        <label for="phone-number">
          Your Phone Number:
          <input type="number" name="phone-number"/>
        </label>
        <button class="btn">Sign up</button>
      </div>
    </>
  )
}

export default App

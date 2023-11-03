import React from 'react'

export const Register = () => {
  return (
    <div className='register'>
        <h1>Technology and Business Solution</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut labore et dolore magna aliqua veniam,
            quis nostrund exercitation ullamcorpor s commodo consequat. Duis autem vel eum irrure esse molestiae consequat,
        </p>

        <form className='container-form'>
            <label>Email</label>
            <input v-model="Email" placeholder="Enter your Email"/>
            <button >Hello</button>
        </form>
    </div>
  )
}

import React from 'react'

function login() {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="inputEmail">Email adress</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       placeholder="Enter email"
                />
            </div>
        </form>
      
    </div>
  )
}

export default login

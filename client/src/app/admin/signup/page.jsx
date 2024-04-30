'use client'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessLevel, setAccessLevel] = useState('regular')
  const [success, setSuccess] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let url = 'http://localhost:5000/'
      const response = await axios.post(url + 'api/user/signup', {
        username,
        password,
        access_level: accessLevel,
      })
      // Optionally, you can redirect the user to another page after successful signup
      if (response.status == 201) {
        setSuccess(true)
        setTimeout(() => {
          window.location.href = './login'
        }, 1000)
      } else {
        setSuccess(false)
      }
    } catch (error) {
      console.error('Error:', error)
      setSuccess(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        {success == true ? (
          <h3 className="mt-6 text-center text-green-500 text-lg font-extrabold">
            Signed up successfully
          </h3>
        ) : success == false ? (
          <h3 className="mt-6 text-center text-red-500 text-lg font-extrabold">
            Error signing up
          </h3>
        ) : (
          <></>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="accessLevel" className="sr-only">
                Access Level
              </label>
              <select
                id="accessLevel"
                name="accessLevel"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value)}
              >
                <option value="regular">Regular</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p>Already have an account?</p>
          <Link
            className="text-indigo-600 hover:text-indigo-700"
            href="/admin/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp

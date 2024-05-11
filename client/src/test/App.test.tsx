
import { expect, it } from 'vitest'
import { render, screen, } from '@testing-library/react'
import Login from '../pages/Login'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { message } from 'antd'
import Test from '../pages/Test'

it('renders correctly', () => {
    const result = render(
        <Test/>


    )
    const message = screen.queryByText(/test/i)
    expect(message).toBeVisible()
})
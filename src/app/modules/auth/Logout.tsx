import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../setup/store'
import { logoutRedirection } from '../redux/auth/authSlice'

export function Logout() {
  // const {logout} = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/auth/login')
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    dispatch(logoutRedirection())
  }, [dispatch])

  return null
}

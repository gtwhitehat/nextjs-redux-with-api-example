import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserAction } from '../store/actions'


const codeStyle = {
  background: '#ebebeb',
  width: 400,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
}

const Index = () => {
  const [isFetch, setIsFetch] = useState(false)
  const users = useSelector((state) => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserAction())
  }, [dispatch, isFetch])

  const fetchUser = () => {
    setIsFetch(true)
    dispatch(fetchUserAction())
  }

  return (
    <>
      <button onClick={fetchUser}>fetch user</button>
      <pre style={codeStyle}>
        <code>{JSON.stringify(users, null, 4)}</code>
      </pre>
    </>
  )
}

export default Index

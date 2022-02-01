import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@gtwhitehat/web-component-ib-v1'
import '@gtwhitehat/web-component-ib-v1/dist/tailwind.css'

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

  const fetchUser = async () => {
    await dispatch(fetchUserAction())
    setIsFetch(true)
  }

  useEffect(() => {
  }, [isFetch])


  return (
    <>
      <Button onClick={fetchUser}>Fetch</Button>
      <pre style={codeStyle}>
        <code>{JSON.stringify(users, null, 4)}</code>
      </pre>
    </>
  )
}

export default Index

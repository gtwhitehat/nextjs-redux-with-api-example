import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserAction } from '../actions'


const codeStyle = {
  background: '#ebebeb',
  width: 400,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
}

const Index = () => {
  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserAction())
  }, [dispatch])

  return (
    <>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
    </>
  )
}

export default Index

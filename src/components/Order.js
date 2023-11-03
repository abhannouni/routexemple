import { useNavigate } from 'react-router-dom'

export const Order = () => {
    const navigate = useNavigate()
  return (
    <>
        <div>Order</div>
        <button onClick={(() => navigate(-1))} >go back</button>
    </>
  )
}
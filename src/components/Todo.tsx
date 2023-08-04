import { type Todo as todoType } from '../types'

type Props = todoType
export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input
        type='checkbox'
        className='toggle'
        checked={completed}
        onChange={() => {}}
      />
      <label htmlFor=''>{title}</label>
      <button className='destroy' onClick={() => {}}></button>
    </div>
  )
}

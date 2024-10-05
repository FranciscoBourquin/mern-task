import { useDispatch } from 'react-redux'
import { deleteTask, toggleTaskCompletion } from '../features/tasks/taskSlice'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <div className='task'>
            <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
            <h2 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </h2>
            <button onClick={() => dispatch(toggleTaskCompletion(task._id))} className='complete'>
                ✔
            </button>
            <button onClick={() => dispatch(deleteTask(task._id))} className='close'>X</button>
        </div>
    )
}

export default TaskItem

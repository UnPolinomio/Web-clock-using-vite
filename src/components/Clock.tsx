import { useTime } from '../hooks/useTime'
import classes from './Clock.module.css'

export const Clock: React.FC = () => {
    const time = useTime()

    return (<>
        <div className={classes.clock}>{time}</div>
    </>)
}


import { Input} from "../forms/input"
//import { Checkbox } from "../forms/checkebox"
import { useEffect, useState } from "react"

function Time(){

    const [duration, setDuration] = useState(5)
    const [secondsLeft, setSecondsLeft] = useState(duration)

    console.log('render')

    const handleChange = (y) => {
        setDuration(y)
        setSecondsLeft(y)
    }

    useEffect(() => {
        const timer =  setInterval(() => {
            setSecondsLeft(y => {
                if(y <= 1){
                    clearInterval(timer)
                    return 0;
                }
                return y - 1
            })   
        }, 1000)
        return () => {
            clearInterval(timer)
        }
        
    }, [duration]);

    return(
        <div className="vstack gap-2">
            <Input 
                value={duration}
                onChange={handleChange}
                placeholder="Timer..."
            />
            <p>
                Décompter : {secondsLeft}
            </p>
        </div>
    )
}

export default Time;
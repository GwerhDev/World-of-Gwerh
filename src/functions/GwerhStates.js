import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTales } from "../middleware/actions"

export function GwerhStates(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTales())
    }, [dispatch])
}
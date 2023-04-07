import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function DashboardView({pageTitle}) {

    const [setTitle] = useOutletContext()  
    useEffect(()=>{
        setTitle(pageTitle);
    },[pageTitle, setTitle])

    return (
        <div>
            Hello World
        </div>
    )
}

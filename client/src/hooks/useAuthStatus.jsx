import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuthStatus = () => {

    const {user} = useSelector((state) => state.auth)
    const [checkUserLoading, setCheckUserLoading] = useState(true)
    const [userExist, setUserExist] = useState(false)

    useEffect(() => {

        user ? setUserExist(true) : setUserExist(false)
        setCheckUserLoading(false)

        
    },[user])

    return {userExist, checkUserLoading}
}

export default useAuthStatus;
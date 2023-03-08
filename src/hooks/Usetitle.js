import { useEffect } from 'react'

const Usetitle = (title) => {

    useEffect(()=>{
        document.title=`${title}|Shoping Cart`
    },[title])

    return null
}

export default Usetitle
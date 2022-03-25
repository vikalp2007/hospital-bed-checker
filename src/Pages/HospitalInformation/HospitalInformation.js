import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { database } from '../../firebase';

const HospitalInformation = () => {
    const params = useParams();

    const [data, setData] = useState(null)

    useEffect(()=> {
        
    }, [])

  return (
    <>
        <h2>
            {data?.Name}
        </h2>
    </>
  )
}

export default HospitalInformation
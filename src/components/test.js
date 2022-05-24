import React, { useEffect, useState } from 'react'
import { AuthStore } from '../stores/authStore';
import { store } from '../stores/store';
import Cappsules from "./Cappsules";
import { useStores } from '../stores/store';
import { observer } from "mobx-react-lite"

const Test = ({ test }) => {

    const { cappsuleStore } = useStores();
    const [loaded, setLoaded] = useState(false)

    const t = () => setLoaded(true)

    useEffect(() => {
        const fetchData = async (id) => {
            cappsuleStore.getCappsules(id)
        }

        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            fetchData(user.id)
        }

        setTimeout(t, 500)
    }, [])
    //Open message
    const openMessage = (id) => {

        console.log(id)
    }

    //Delete Cappsule -- regner med at lave kald til database her
    const deleteCappule = (id) => {
        console.log('delete', id)
    }

    return (
        <>
            {loaded ?

                true ?
                    <Cappsules cappsules={cappsuleStore.cappsules}
                        onDelete={deleteCappule}
                        onOpen={openMessage}
                    />
                    :
                    'No Cappsules to show!'

                : null}
        </>
    )
}

export default Test
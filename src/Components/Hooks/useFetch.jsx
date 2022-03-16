import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const useFetch = ({url, didMount = true}) => {
    const initialState = {
        data: [],
        error: null
    }
    const [data, setData] = useState(initialState)
    const doFetch = useCallback(() => {
        setData({
            ...data,
        })
        axios
            .get(url)
            .then((res) => {
                setData({
                    ...data,
                    data: res.data,
                })
            })
            .catch((e) => {
                setData({
                    ...data,
                    error: e,
                })
            }, [url, data])

    })
    useEffect(() => {
        if (didMount) {
            doFetch()
        }
    }, [])
    return {
        data: data.data,
        error: data.error,
        doFetch
    }
}
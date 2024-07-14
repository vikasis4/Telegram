import React from 'react';
import genSen from '../utils/genSen';
import { useGetChatsQuery, useGetMessgaesQuery } from '../store/api';
import FormatDate from '../utils/formatdate';


const UseApi = () => {


    const { data, isError, isLoading } = useGetChatsQuery();


    var ChatData = React.useMemo(() => {
        return data ? data.data.data.map(el => ({
            id: el.id,
            name: el.creator.name ? el.creator.name : 'New User',
            avatar: el.creator.name ? el.creator.name[0] : 'N',
            message: genSen(),
            date: FormatDate(el.updated_at),
        })) : []
    }, [data])

    return {
        data,
        isError,
        isLoading,
        ChatData
    }
}

export default UseApi
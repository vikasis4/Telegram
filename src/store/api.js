import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

var msg_api = "https://devapi.beyondchats.com/api/3888";
const baseUrl = "https://devapi.beyondchats.com/api"

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => "/get_all_chats?page=1",
        }),
        getMessgaes: builder.query({
            query: (id) => "/get_chat_messages?chat_id=" + id,
        }),
    }),
});

export const { useGetChatsQuery, useGetMessgaesQuery } = api;
export default api;

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
    'X-RapidAPI-Key': '59f002d725mshc0062227462c1b1p189342jsn78808f7d8447',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequests = (url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequests(`/coins?limit=${count}`)
        })
    })
});
export const{
    useGetCryptosQuery,
}=cryptoApi;
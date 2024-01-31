import React from 'react'
import { Select,Row,Col,Typography,Avatar,Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const {Text,Title}=Typography;
export default function News({simplified}) {
  const {data:cryptoNews,isFetching}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified?10:100});
  console.log(cryptoNews);
  return (
    <div>News</div>
  )
}

import React from 'react'
import './FeatureProducts.scss'
import Card from '../Card/Card.js'
import useFetch from '../../hooks/useFetch'

export default function FeatureProducts({ type }) {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featureProducts'>
            <h1>{type} Products</h1>
            <div className='intro'>
                {error 
                ? 'something went wrong'
                :loading
                    ? 'loading'
                    : data.map(item =>
                    <Card item={item} key={item.id} />
                )}
            </div>
        </div>
    )
}

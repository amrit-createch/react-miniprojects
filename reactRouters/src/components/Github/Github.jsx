import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img className='text-center content-center' src={data.avatar_url} alt="Github Profile" width={300} />
        <p className='text-sm'>Github Bio: {data.bio}</p>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/amrit-createch')
    return response.json()
}

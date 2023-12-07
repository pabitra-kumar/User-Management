import React from 'react'
import { User } from '../components/User'
import { useFetchUsersQuery } from '../store/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Users = () => {

    const [page, setPage] = useState(1);
    // const [users, setUsers] = useState([]);

    const { data, error, isLoading } = useFetchUsersQuery(page);
    // setUsers(data);

    const nextPage = () => {
        setPage(page + 1);
    }
    const prevPage = () => {
        setPage(page - 1);
    }

    return (
        <main className='w-full flex justify-center bg-[#f5f6fa]'>
            <section className='flex flex-col items-center justify-start min-h-screen w-full p-10 gap-y-[20px]'>
                <div className='flex w-full justify-between pr-[3vw] flex-wrap' >
                    <h1 className='text-6xl text-gray-400 font-bold'>
                        USERS
                    </h1>
                    <Link to='/users/create'>
                        <button className='bg-green-200 rounded-md h-fit p-[5px] px-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold'>
                            Add a new user
                        </button>
                    </Link>
                </div>
                <div className="pagination w-full flex justify-center gap-[3vw]">
                    <div className='flex gap-[1.5vw] items-center bg-green-200 p-[5px] rounded-lg flex-wrap'>
                        {page > 1 ? <button onClick={prevPage} className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button> : <button disabled className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button>}
                        <p className='font-bold'>Page: {page}</p>
                        <button onClick={nextPage} className="bg-green-700 rounded-md py-[5px] px-[10px] ">Next</button>
                    </div>

                </div>
                <div className="users w-full flex flex-wrap justify-around gap-x-[1vw] gap-y-[3vw]">
                    {
                        isLoading ? <h1>Loading...</h1> :
                            error ? <h1>Error: {error}</h1> :
                                data?.map((user) => (
                                    <User key={user.id} user={user} />
                                ))
                    }

                </div>
                <div className="pagination w-full flex justify-center gap-[3vw]">
                    <div className='flex gap-[1.5vw] items-center bg-green-200 p-[5px] rounded-lg flex-wrap'>
                        {page > 1 ? <button onClick={prevPage} className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button> : <button disabled className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button>}
                        <p className='font-bold'>Page: {page}</p>
                        <button onClick={nextPage} className="bg-green-700 rounded-md py-[5px] px-[10px] ">Next</button>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Users

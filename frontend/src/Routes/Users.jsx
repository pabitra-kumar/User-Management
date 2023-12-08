import React from 'react'
import { User } from '../components/User'
import { useFetchUsersQuery } from '../store/api'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, prevPage, nextPage, fetchSearch, fetchDomain, fetchPage, fetchGender, fetchAvl } from '../store/slices/UserSlice'

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    const page = useSelector((state) => state.users.page);
    const search = useSelector((state) => state.users.searchData);
    const domain = useSelector((state) => state.users.domainData);
    const gender = useSelector((state) => state.users.gender);
    const avl = useSelector((state) => state.users.avl);

    const { data, error, isLoading, refetch } = useFetchUsersQuery({ page, name: search, domain: domain, gender: gender, avl: avl });
    useEffect(() => {
        dispatch(fetchUsers(data));
    }, [data, dispatch])

    // Run useFetchUsersQuery after every re-render
    useEffect(() => {
        refetch();
    }, [refetch, page, dispatch, search, domain, gender, avl]);

    const next = () => {
        dispatch(nextPage());
    }

    const prev = () => {
        dispatch(prevPage());
    }

    const handleSearch = (e) => {
        const data = e.target.value;
        dispatch(fetchSearch(data));
        dispatch(fetchPage(1));
    }

    const handleDomain = (e) => {
        const data = e.target.value;
        dispatch(fetchDomain(data));
        dispatch(fetchPage(1));
    }

    const handleGender = (e) => {
        const data = e.target.value;
        dispatch(fetchGender(data));
        dispatch(fetchPage(1));
    }

    const handleAvl = (e) => {
        const data = e.target.checked;
        console.log(data);
        dispatch(fetchAvl(data));
    }


    return (
        <main className='w-full flex justify-center bg-[#f5f6fa]'>
            <section className='flex flex-col items-center justify-start min-h-screen w-full p-10 gap-y-[20px]'>
                <div className='flex w-full justify-between pr-[3vw] items-center flex-wrap gap-5' >
                    <h1 className='text-6xl text-gray-400 font-bold'>
                        USERS
                    </h1>

                    <form>
                        <label htmlFor="domain-select" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Filter Domain</label>
                        <div className="relative">
                            <select name="cars" onChange={handleDomain} id="domain-select" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value=""> Filter by domain:</option>
                                <option value="Management">Management</option>
                                <option value="IT">IT</option>
                                <option value="Sales">Sales</option>
                                <option value="Finance">Finance</option>
                                <option value="Marketing">Marketing</option>
                                <option value="UI Designing">UI designing</option>
                                <option value="Business Development">Business Development</option>
                            </select>
                        </div>
                    </form>

                    <form>
                        <label htmlFor="Gender-select" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Filter Gender</label>
                        <div className="relative">
                            <select name="cars" onChange={handleGender} id="Gender-select" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value=""> Filter by Gender:</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Agender">Agender</option>
                                <option value="Bigender">Bigender</option>
                                <option value="Polygender">Polygender</option>
                                <option value="Non-binary">Non-binary</option>
                                <option value="Genderfluid">Genderfluid</option>
                                <option value="Genderqueer">Genderqueer</option>
                            </select>
                        </div>
                    </form>

                    <div className="flex items-center ">
                        <div className="flex items-center h-5">
                            <input id="avl_check" name='available' defaultChecked={data?.available} onChange={handleAvl} type="checkbox" className="w-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="avl_check" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">available</label>
                    </div>

                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500 dark:text-gray-400">
                                <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" onChange={handleSearch} className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users..." required />
                        </div>
                    </form>
                    <Link to='/users/create'>
                        <button className='bg-green-200 rounded-md h-fit p-[5px] px-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold'>
                            Add a new user
                        </button>
                    </Link>
                </div>
                <div className="pagination w-full flex justify-center gap-[3vw]">
                    <div className='flex gap-[1.5vw] items-center bg-green-200 p-[5px] rounded-lg flex-wrap'>
                        {page > 1 ? <button onClick={prev} className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button> : <button disabled className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button>}
                        <p className='font-bold'> Page: {page}</p>
                        <button onClick={next} className="bg-green-700 rounded-md py-[5px] px-[10px] ">Next</button>
                    </div>

                </div>
                <div className="users w-full flex flex-wrap justify-around gap-x-[1vw] gap-y-[3vw]">
                    {
                        isLoading ? <h1>Loading...</h1> :
                            error ? <h1>Error: {error}</h1> :
                                users?.map((user) => (
                                    <User key={user.id} user={user} />
                                ))
                    }

                </div>
                <div className="pagination w-full flex justify-center gap-[3vw]">
                    <div className='flex gap-[1.5vw] items-center bg-green-200 p-[5px] rounded-lg flex-wrap'>
                        {page > 1 ? <button onClick={prev} className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button> : <button disabled className=" bg-green-700 rounded-md py-[5px] px-[10px]">Prev</button>}
                        <p className='font-bold'>Page: {page}</p>
                        <button onClick={next} className="bg-green-700 rounded-md py-[5px] px-[10px] ">Next</button>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Users

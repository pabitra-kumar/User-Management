import React from 'react'

import { LuMails } from "react-icons/lu"
import { Link } from 'react-router-dom'

import { FaUserEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useDeleteUserMutation } from '../store/api'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'

export const User = ({ user }) => {

    const dispatch = useDispatch();
    const [deleteUserMutation, { isLoading }] = useDeleteUserMutation() // Our mutation hook from the slice

    const deleteUser = async () => {
        try {
            await deleteUserMutation(user?.id);
            alert(` User with ID: ${user?.id} ,  Deleted successfully!`);
            dispatch(removeUser(user?.id));
        } catch (error) {
            console.error('rejected: ', error);
        }
    };
    return (
        <div className='bg-white w-[300px] min-h-[100px] rounded-xl p-[20px] flex flex-col gap-[10px]'>
            <div className="w-[60px] h-[60px] image bg-white rounded-lg overflow-hidden">
                <img className='w-full h-full' src={user?.avatar} alt="user-img" />
            </div>

            <h2 className='text-2xl font-bold flex gap-2 justify-start items-baseline'>
                {user?.first_name + " " + user?.last_name}
                <p className='font-normal text-base'>
                    {`(${user?.gender})`}
                </p>
            </h2>

            <hr />

            <div className="user-info flex justify-between items-center mt-[5px] px-[10px]">
                <div className="domain-caption">
                    <p className="caption text-[#b7bbb7] font-bold text-base">
                        Domain
                    </p>
                    <p className=' text-lg font-bold'>
                        {user?.domain}
                    </p>
                </div>
                <div className="domain-caption">
                    <p className=' text-lg'>
                        {user?.available ? "Available" : "Not Available"}
                    </p>
                </div>
            </div>

            <hr />

            <div className="actions flex justify-between items-end px-10">
                <Link to={`mailto:${user?.email}`}>
                    <div className="email bg-[#b1b2b5] rounded-full p-[10px] hover:bg-blue-200">
                        <LuMails className='text-zinc-600' />
                    </div>
                </Link>
                <Link to={`/users/edit/${user?.id}`}>
                    <div className="email bg-[#b1b2b5] rounded-full p-[10px] hover:bg-green-200">
                        <FaUserEdit className='text-zinc-600' />
                    </div>
                </Link>
                {isLoading ? <h1>Loading...</h1> :
                    <div onClick={deleteUser} className="email bg-[#b1b2b5] rounded-full p-[10px] hover:bg-red-200 cursor-pointer">
                        <MdDelete className='text-zinc-600' />
                    </div>}
            </div>

        </div>
    )
}

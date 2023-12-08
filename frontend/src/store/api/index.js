import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://user-management-backend-ovx4.onrender.com/api/users' }),
    endpoints: (builder) => ({
        fetchUsers: builder.query({
            query: ({ page, name = null, domain = null, gender = null, avl = null }) => {
                let query = '?page=' + page;
                if (name) {
                    query += '&name=' + name;
                }
                if (domain) {
                    query += '&domain=' + domain;
                }
                if (gender) {
                    query += '&gender=' + gender;
                }
                if (avl) {
                    query += '&availablel=' + avl;
                }
                return query;
            },
        }),
        fetchUserById: builder.query({
            query: (id) => `/${id}`,
        }),
        addUser: builder.mutation({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body: body,
            }),
        }),
        updateUser: builder.mutation({
            query: (body) => {
                console.log(body)
                return {
                    url: `/${body?.id}`,
                    method: 'PUT',
                    body: body,
                }
            },
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});


// https://user-management-backend-ovx4.onrender.com/api/users

// https://user-management-backend-production.up.railway.app/api/users/
export const { useFetchUsersQuery, useFetchUserByIdQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
import React from 'react'

const API = import.meta.env.VITE_BACKEND_API;
const apiKey = import.meta.env.VITE_BACKEND_API_TOKEN;

export const get = (path) => {
    return (

        fetch(API + path + apiKey ).then(result => result.json())

    )
}



// export const get = (path) => {
//     return (
  
//       fetch(API + path, {
  
//           headers: {
//               Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGY4NTU1OGQ4NTdmM2NkZmI2NzY0Y2FmODBlYTNkMiIsInN1YiI6IjVmYjhhMmJmN2YxZDgzMDA0MDA4MjQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4m5KezET8AjZZPFlKHFX591n7-j7QgObkz2U_FZv3c",
//                   "Content-Type": "application/json;charset=utf-8"
//           }
  
//       }).then(result => result.json())
      
//     )
//   }



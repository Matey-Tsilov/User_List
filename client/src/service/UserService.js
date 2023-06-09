const baseUrl = 'http://localhost:3005/api/users'


export const getAll = async () => {
     const response = await fetch(baseUrl)
     const result = await response.json()

     return result.users
}

export const getById = async (id) => {
    const response = await fetch(baseUrl + '/' + id)
    const result = await response.json()
    
    return result.user
}

export const create = async (userData) => {
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const result = await response.json()
    
    return result.user
}

export const deleteUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {method: 'DELETE'})

    const result = await response.json()
     
    return result.userId
}

export const updateUser = async (id, updatedUser) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })

    const result = await response.json()

    return result.user
}

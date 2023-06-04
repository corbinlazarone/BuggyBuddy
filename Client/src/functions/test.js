export const getTest = async () => { 
    try {
        const response = await fetch('http://localHost:8000/test', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        return await response.json()
    } catch (err) {
        console.log(`Error occuried ${err}`)
    }
}
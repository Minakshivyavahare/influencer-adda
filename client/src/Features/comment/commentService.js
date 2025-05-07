import axios from "axios"

const fetchComments = async(id, token) => {

    const options = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(`/api/booking/${id}/comment`, options)
    return response.data
}

const commentService = {fetchComments}
export default commentService
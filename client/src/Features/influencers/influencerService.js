import axios from "axios"

const fetchInfluencer = async(id) => {
    console.log(id)
    const response = await axios.get('/api/influencers/single/' + id)
    console.log(response.data)
    return response.data
}

const influncerService = {fetchInfluencer}
export default influncerService
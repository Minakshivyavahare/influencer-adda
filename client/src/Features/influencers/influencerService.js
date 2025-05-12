import axios from "axios"

const fetchInfluencer = async(id) => {
 
    const response = await axios.get('/api/influencers/single/' + id)
    
    return response.data
}

const influncerService = {fetchInfluencer}
export default influncerService
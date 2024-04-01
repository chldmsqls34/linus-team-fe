import AxiosConfig, { instance } from '@/redux/common/configs/axios-config'

export const fetchAllUsersAPI = async (page: number) => {
    try {
        const response = await instance.get('/all-users',{
            params: {page, limit: 10}
        })
        return response.data
    } catch (error) {
        console.log('fetchAllArticleAPI Error : '+error)
        return error
    }
}
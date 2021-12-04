import Mock from 'mockjs'
import categoryResponse from './data/category.json'
import resultResponse from './data/test_model_01.json'

Mock.mock(RegExp('/api/getResult'+'*'), 'get', (options) => {
    console.log(options);
    return resultResponse
})


Mock.mock('/api/getCategory', 'get', () => {
    return categoryResponse
})
Mock.mock('/api/users/login', 'post', () => {
    return {
        status:0,
        data:{
            accessToken:'123'
        }

    }
})
export default Mock
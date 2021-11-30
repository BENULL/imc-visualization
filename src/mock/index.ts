import Mock from 'mockjs'
import categoryResponse from './data/category.json'
import resultResponse from './data/test_model_01.json'

Mock.mock('/api/getResult', 'get', () => {
    return resultResponse
})


Mock.mock('/api/getCategory', 'get', () => {
    return categoryResponse
})

export default Mock
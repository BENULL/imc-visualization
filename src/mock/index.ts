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

export default Mock
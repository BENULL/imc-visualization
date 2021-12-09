import Mock from 'mockjs'
import categoryResponse from './data/category.json'
import resultResponse from './data/test_model_01.json'
import modelsResponse from './data/models-info.json'
import experimentsResponse from './data/experiments-info.json'

Mock.mock('/api/users/login', 'post', () => {
    return {
        status: 0,
        data: {
            accessToken: '123'
        }

    }
})


Mock.mock(RegExp('/api/result/fetchResult' + '*'), 'post', (options) => {
    console.log(options);
    return resultResponse
})
Mock.mock('/api/model/fetchCategory', 'get', (options) => {
    console.log(options);
    return categoryResponse
})

Mock.mock(RegExp('/api/model/fetchAll' + '*'), 'post', (options) => {
    console.log(options);
    return modelsResponse
})
Mock.mock('/api/model/add', 'post', (options) => {
    console.log(options);
    return {
        status: 0,
        msg: "添加成功"
    }
})
Mock.mock('/api/model/update', 'post', (options) => {
    console.log(options);
    return {
        status: 0,
        msg: "更新成功"
    }
})

Mock.mock(RegExp('/api/experiment/fetchAll' + '*'), 'post', (options) => {
    console.log(options);
    return experimentsResponse
})
Mock.mock('/api/experiment/add', 'post', (options) => {
    console.log(options);
    return {
        status: 0,
        msg: "添加成功"
    }
})
Mock.mock('/api/experiment/update', 'post', (options) => {
    console.log(options);
    return {
        status: 0,
        msg: "更新成功"
    }
})
export default Mock
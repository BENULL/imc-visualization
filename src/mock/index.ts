import Mock from 'mockjs'
import category from './data/category.json'

Mock.mock('/api/test', 'get', () => {
    return category
})

export default Mock
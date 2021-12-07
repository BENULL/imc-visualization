import service from "@/utils/request";

interface IResponse {
    status: number | string;
    data: any;
    msg: string;
}

interface IUserRequestData {
    username: string
    password: string
}

// 登录以后返回 token
export const accountLogin = async (data: IUserRequestData): Promise<IResponse> => {
    return await service.post('users/login', data, { loading: true });
}
// 获取用户详情
export const userInfoRequest = async (): Promise<IResponse> => {
    return await service.post('users/info', { loading: true });
}

// 获取模型和实验下拉框数据
export const fetchCategory = async (): Promise<IResponse> => {
    return await service.get('model/fetchCategory', { loading: true });
};

// 获取实验结果
export const fetchResult = async (params: any): Promise<IResponse> => {
    return await service.get('result/fetchResult', { params: params, loading: true });
};

// 获取模型数据
export const fetchModelsData = async (params: any): Promise<IResponse> => {
    return await service.get('model/fetchAll', { params: params,loading: true });
};

// 添加模型
export const addModel = async (data): Promise<IResponse> => {
    return await service.post('model/add', data, {loading: true });
};

// 更新模型
export const updateModel = async (data): Promise<IResponse> => {
    return await service.post('model/update', data, {loading: true });
};




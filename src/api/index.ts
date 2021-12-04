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
export const fetchCategory = async (): Promise<IResponse> => {
    return await service.get('getCategory', { loading: true });
};

export const fetchResult = async (params: any): Promise<IResponse> => {
    return await service.get('getResult', { params: params, loading: true });
};



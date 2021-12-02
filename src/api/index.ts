import service from "@/utils/request";

interface IResponse {
    status: number | string;
    data: any;
    msg: string;
}

export const fetchCategory = async (): Promise<IResponse> => {
    return await service.get('getCategory', { loading: true });
};

export const fetchResult = async (params: any): Promise<IResponse> => {
    return await service.get('getResult', { params:params,loading: true });
};



import service from "@/utils/request";

interface IResponse {
    status: number | string;
    data: any;
    msg: string;
}

export const test = async (): Promise<IResponse> => {
    return await service.get('test', { loading: true });
};


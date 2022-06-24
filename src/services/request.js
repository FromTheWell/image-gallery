import { axiosInstance } from './config';

export const getPhotos = (id) => {
    return axiosInstance.get(
        `https://picsum.photos/id/${id}/500/500.jpg`
    )
};
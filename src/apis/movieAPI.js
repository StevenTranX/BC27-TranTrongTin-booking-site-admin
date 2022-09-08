import axiosClient from './axiosClient';
const movieAPI = {
  getMovies: () => {
    return axiosClient.get('QuanLyPhim/LayDanhSachPhim', {
      params: {
        maNhom: 'GP01',
      },
    });
  },
};
export default movieAPI;

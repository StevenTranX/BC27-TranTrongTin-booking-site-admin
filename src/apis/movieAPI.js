import axiosClient from './axiosClient';
const movieAPI = {
  getMovies: () => {
    return axiosClient.get('QuanLyPhim/LayDanhSachPhim', {
      params: {
        maNhom: 'GP09',
      },
    });
  },
};
export default movieAPI;

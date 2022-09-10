import axiosClient from './axiosClient';
const movieAPI = {
  getMovies: () => {
    return axiosClient.get('QuanLyPhim/LayDanhSachPhim', {
      params: {
        maNhom: 'GP01',
      },
    });
  },
  addMovies: (movie) => {
    const formData = new FormData();
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append('maNhom', 'GP01');
    console.log(formData);
    return axiosClient.post('QuanLyPhim/ThemPhimUploadHinh', formData);
  },
};
export default movieAPI;

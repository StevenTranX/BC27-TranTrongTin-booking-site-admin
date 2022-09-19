import axiosClient from './axiosClient';
const userAPI = {
  getUsers: () => {
    return axiosClient.get('QuanLyNguoiDung/LayDanhSachNguoiDung', {
      params: {
        maNhom: 'GP01',
      },
    });
  },
//   addUser: (movie) => {
//     const formData = new FormData();
//     for (let key in movie) {
//       formData.append(key, movie[key]);
//     }
//     formData.append('maNhom', 'GP01');
//     console.log(formData);
//     return axiosClient.post('QuanLyPhim/ThemPhimUploadHinh', formData);
//   },
//   deleteMovies: (movieID) => {
//     return axiosClient.delete(`QuanLyPhim/XoaPhim?MaPhim=${movieID}`);
//   },
//   getMovieData : (movieID) => {
//     return axiosClient.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`)
//   }
};
export default userAPI;

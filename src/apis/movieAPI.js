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
  deleteMovies: (movieID) => {
    return axiosClient.delete(`QuanLyPhim/XoaPhim?MaPhim=${movieID}`);
  },
  getMovieData : (movieID) => {
    return axiosClient.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`)
  },
  updateMovie : (movie) => {
    const formData = new FormData();
    console.log(movie )
    for (let key in movie) {
      formData.append(key, movie[key])
    }
    formData.append('maNhom', 'GP01');
    // if(movie.hinhAnh !== null) formData.append('File', movie.hinhAnh, movie.hinhAnh.name)
    console.log(formData);
    return axiosClient.post(`QuanLyPhim/CapNhatPhimUpLoad` , formData)
  }
};
export default movieAPI;

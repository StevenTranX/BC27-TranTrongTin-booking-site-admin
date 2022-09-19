import axiosClient from './axiosClient';
const userAPI = {
  getUsers: () => {
    return axiosClient.get('QuanLyNguoiDung/LayDanhSachNguoiDung', {
      params: {
        maNhom: 'GP01',
      },
    });
  },
  addUser: (user) => {
    console.log(user);
    return axiosClient.post('QuanLyNguoiDung/ThemNguoiDung', user);
  },
  getUserData : (username) => {
    return axiosClient.post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${username}`)
  },
  updateUser : () => {
    return axiosClient.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`)
  }
};
export default userAPI;

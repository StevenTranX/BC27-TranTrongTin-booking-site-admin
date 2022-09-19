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
};
export default userAPI;

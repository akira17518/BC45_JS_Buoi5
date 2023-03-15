// Bài 1
document.getElementById('tinhToan').onclick = function () {
    tinhDiemThi('diemMon1', 'diemMon2', 'diemMon3', 'diemChuan', 'khuVuc', 'doiTuong', 'ket-qua-b1');
}
/**
 * 
 * @param {*} diem1:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diem2:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diem3:  là id của thẻ chứa điểm cần lấy 
 * @param {*} diemDau: là id của thẻ chứa điểm chuẩn cần lấy 
 * @param {*} diemKhuVuc là id của thẻ chứa điểm khu vực cần lấy
 * @param {*} diemDoiTuong là id của thẻ chứa điểm đổi tượng cần lấy
 * @param {*} idOutPut là id của thẻ sẽ chứa kết quả
 * @returns 
 */
function tinhDiemThi(diem1, diem2, diem3, diemDau, diemKhuVuc, diemDoiTuong, idOutPut) {
    var mon1 = +document.getElementById(diem1).value;
    var mon2 = +document.getElementById(diem2).value;
    var mon3 = +document.getElementById(diem3).value;
    var dChuan = +document.getElementById(diemDau).value;
    var dKhuVuc = +document.getElementById(diemKhuVuc).value;
    var dDoiTuong = +document.getElementById(diemDoiTuong).value;
    var tong = mon1 + mon2 + mon3 + dKhuVuc + dDoiTuong;
    var kQua = '';
    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        kQua = `Bạn đã trượt do có 1 môn bị điểm 0. Tổng điểm là ${tong}`;
    } else if (tong < dChuan) {
        kQua = `Bạn đã trượt do không đủ điểm. Tổng điểm là ${tong}`;
    } if (tong >= dChuan) {
        kQua = `Bạn đã trúng tuyển !!!. Tổng điểm là ${tong}`;
    }
    document.getElementById(idOutPut).innerHTML = kQua;
    return kQua;
}
// Bài 2
document.getElementById('tinhTienDien').onclick = function () {
    tinhTienDien('soDien', 'hoTen', 'ket-qua-b2');
}
/**
 * 
 * @param {*} dienSuDung id của thẻ input chứa số điện ng dùng nhập vào
 * @param {*} Ten id của thẻ input chứa tên do ng dùng nhập vào
 * @param {*} outPutTienVaTen  id của thẻ chứa kết quả bài 2
 * @returns 
 */
function tinhTienDien(dienSuDung, Ten, outPutTienVaTen) {
    var tien = 0;
    var hoTen = document.getElementById(Ten).value;
    var Dien = document.getElementById(dienSuDung).value; //Lấy số điện từ thẻ có id là dienSuDung
    if (Dien <= 50 && Dien >= 0) {
        tien = Dien * 500;
    }
    else if (Dien > 50 && Dien <= 100) {
        tien = 50 * 500 + (Dien - 50) * 650;
    }
    else if (Dien > 100 && Dien <= 200) {
        tien = 50 * 500 + 50 * 650 + (Dien - 100) * 850;
    }
    else if (Dien > 200 && Dien <= 350) {
        tien = 50 * (500 + 650) + 100 * 850 + (Dien - 200) * 1100;
    }
    else {
        tien = 50 * (500 + 650) + 100 * 850 + 150 * 1100 + (Dien - 350) * 1300;
    }
    tienDien = new Intl.NumberFormat('vn-VN').format(tien);
    document.getElementById(outPutTienVaTen).innerHTML = `Họ và tên là: ${hoTen} ; Số tiền điện là: ${tienDien} `;
    var kQuaB2 = document.getElementById(outPutTienVaTen).innerHTML;
    return kQuaB2;
}
// Bài 3 

document.getElementById('tinhTienThue').onclick = function () {
    tinhTienThue('tongThuNhap', 'soNguoiPhuThuoc', 'nhapHoTen', 'ket-qua-b3')
}
/**
 * 
 * @param {*} thuNhapThuc id của thẻ input chứa số thu nhập ng dùng nhập vào
 * @param {*} soNgPhuThuoc id của thẻ input chứa số người phụ thuộc do ng dùng nhập vào
 * @param {*} ten   id của thẻ input chứa tên do ng dùng nhập vào
 * @param {*} idOutPutB3 id của thẻ chứa kết quả b3
 * @returns 
 */
function tinhTienThue(thuNhapThuc, soNgPhuThuoc, ten, idOutPutB3) {
    var thuNhap = +document.getElementById(thuNhapThuc).value; //lấy thu nhập từ thẻ có id là thuNhapThuc
    var hoVaTen = document.getElementById(ten).value; //lấy họ và tên từ thẻ có id là ten
    var tienThue = 0;
    var phuthuoc = +document.getElementById(soNgPhuThuoc).value; //lấy số ng phụ thuộc từ thẻ có id là soNgPhuThuoc
    thuNhapThuc = thuNhap - 4e+6 - phuthuoc * 1.6e+6;
    if (thuNhapThuc <= 60e+6 && thuNhapThuc >= 0) {
        tienThue = thuNhapThuc * 0.05;
    }
    else if (thuNhapThuc > 60e+6 && thuNhapThuc <= 120e+6) {
        tienThue = (60e+6 * 0.05 + (thuNhapThuc - 60e+6) * 0.1);
    }
    else if (thuNhapThuc > 120e+6 & thuNhapThuc <= 210e+6) {
        tienThue = thuNhapThuc * 0.15;
    }
    else if (thuNhapThuc > 210e+6 && thuNhapThuc <= 384e+6) {
        tienThue = thuNhapThuc * 0.2;
    }
    else if (thuNhapThuc > 384e+6 && thuNhapThuc <= 624e+6) {
        tienThue = thuNhapThuc * 0.25;
    }
    else if (thuNhapThuc > 624e+6 && thuNhapThuc <= 960e+6) {
        tienThue = thuNhapThuc * 0.3;
    }
    else {
        tienThue = thuNhapThuc * 0.35;
    }
    tienThueFormat = new Intl.NumberFormat('vn-VN').format(tienThue);
    document.getElementById(idOutPutB3).innerHTML = `Họ và tên là: ${hoVaTen} ; Số tiền thuế là: ${tienThueFormat} VND`;
    var kQuaB3 = document.getElementById(idOutPutB3).innerHTML;
    return kQuaB3;
}
// Bài 4:
document.getElementById('soKetNoi').style.display = 'none'
document.getElementById('loaiKhachHang').onchange = function () {
    displayKetNoi('loaiKhachHang', 'soKetNoi');
}
/**
 * 
 * @param {*} loaiKhach id của thẻ select chứa loại hình khách hàng
 * @param {*} ketNoi id của thẻ cần ẩn
 */
function displayKetNoi(loaiKhach, ketNoi) {

    var loaiKH = document.getElementById(loaiKhach).value; //lấy loại hình khách hàng từ thẻ có id là loaiKhach
    if (loaiKH == 0) {
        document.getElementById(ketNoi).style.display = 'none';
    } else if (loaiKH == 1) {
        document.getElementById(ketNoi).style.display = 'none';
    } else if (loaiKH == 2) {
        document.getElementById(ketNoi).style.display = 'inline-block'
    }
}
document.getElementById('tinhTienCap').onclick = function () {
    tinhTienCap('loaiKhachHang', 'maKhachHang', 'soKenh', 'soKetNoi', 'ket-qua-b4');
}
/**
 * 
 * @param {*} loaiKhach id của thẻ select chứa loại hình khách hàng
 * @param {*} khachHang id của thẻ chứa mã khách hàng
 * @param {*} Kenh id của thẻ input chứa số kênh cao cấp
 * @param {*} ketNoi id của thẻ input chứa số kết nối
 * @param {*} idOutPutB4 id của thẻ chứa kết quả b4
 * @returns 
 */
function tinhTienCap(loaiKhach, khachHang, Kenh, ketNoi, idOutPutB4) {
    var loaiKH = document.getElementById(loaiKhach).value; //lấy loại hình KH từ thẻ có id là loaiKhach
    var maKH = document.getElementById(khachHang).value; // lấy mã khách hàng từ thẻ có id là khachHang
    var kenhCaoCap = +document.getElementById(Kenh).value; // lấy số kênh cao cấp từ thẻ có id là Kenh;
    var soLuongKetNoi = +document.getElementById(ketNoi).value; // lấy số lượng kết nối từ thẻ có id là ketNoi
    var tienCap = 0;
    if (loaiKH == 0) {
        alert('Hãy chọn loại hình khách hàng');
    } else if (loaiKH == 1) {
        tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap;
    } else if (loaiKH == 2 && soLuongKetNoi <= 10) {
        tienCap = 15 + 75 + 50 * kenhCaoCap;
    } else if (loaiKH == 2 && soLuongKetNoi > 10) {
        tienCap = 15 + 75 + (soLuongKetNoi - 10) * 5 + 50 * kenhCaoCap;
    }
    document.getElementById(idOutPutB4).innerHTML = `Mã khách hàng là: ${maKH} ; Số tiền cáp là: $${tienCap}`
    var kQuaB4 = document.getElementById(idOutPutB4).innerHTML;
    return kQuaB4;
}
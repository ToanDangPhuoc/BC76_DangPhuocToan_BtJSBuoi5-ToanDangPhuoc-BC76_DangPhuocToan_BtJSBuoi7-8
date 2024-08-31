// Khai báo mảng
let soN = [];
let mangDuocThem = Number(document.getElementById("soN").value * 1);

// sự kiện click
document.getElementById("nutXacNhan").onclick = function () {
  let mangDuocThem = document.getElementById("soN").value * 1;
  soN.push(mangDuocThem);
  console.log(soN);
  document.getElementById("hienThi").value = soN;
};
// Xử lý bài 1
let sum = 0;
document.getElementById("xacNhanBai1").onclick = function () {
  for (let i = 0; i < soN.length; i++) {
    sum += soN[i];
  }
  console.log(sum);
  document.getElementById(
    "ketQuaBai1"
  ).value = `Tổng các số trong mảng là ${sum}`;
};

// Xử lý bài 2
document.getElementById("xacNhanBai2").onclick = function () {
  let count = 0;

  for (let i = 0; i < soN.length; i++) {
    if (soN[i] > 0) {
      count++;
    }
  }

  document.getElementById(
    "ketQuaBai2"
  ).value = `Có ${count} số dương trong mảng`;
};

// xử lý bài 3

document.getElementById("xacNhanBai3").onclick = function () {
  // cách 1

  //     let min = Math.min(...soN);
  //     document.getElementById(
  //       "keQuaBai3"
  //     ).value = `Số nhỏ nhất trong mảng là ${min}`;
  // };

  // cách 2

  function findMin(array) {
    let min = array[0]; // Khởi tạo min bằng phần tử đầu tiên của mảng

    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    return min;
  }

  let min = findMin(soN);

  document.getElementById(
    "ketQuaBai3"
  ).value = `Số nhỏ nhất trong mảng là: ${min}`;
};

// xử lấy bài 4

document.getElementById("xacNhanBai4").onclick = function () {
  // sử dụng filter để lọc số dương
  let soDuongTrongMang = soN.filter((num) => num > 0);
  //  tìm số dương nhỏ nhất
  let soDuongNhoNhat = Math.min(...soDuongTrongMang);
  document.getElementById(
    "ketQuaBai4"
  ).value = `Số dương nhỏ nhất trong mảng là ${soDuongNhoNhat}`;
};

// xử lý bài 5
document.getElementById("xacNhanBai5").onclick = function () {
  let soChanCuoiCung = null;
  for (let i = soN.length - 1; i >= 0; i--) {
    if (soN[i] % 2 === 0) {
      soChanCuoiCung = soN[i];
      break;
    }
  }
  if (soChanCuoiCung === null) {
    document.getElementById("ketQuaBai5").value = "Không có số chẵn nào";
  } else {
    document.getElementById(
      "ketQuaBai5"
    ).value = `Số chẵn cuối cùng là ${soChanCuoiCung}`;
  }
};

// xử lý bài 6
function doiViTri(soN, viTri1, viTri2) {
  let viTriDauTien = soN.indexOf(viTri1);
  let viTriMuonDoi = soN.indexOf(viTri2);
  if (viTriDauTien != -1 && viTriMuonDoi != -1) {
    let temp = soN[viTriDauTien];
    soN[viTriDauTien] = soN[viTriMuonDoi];
    soN[viTriMuonDoi] = temp;
  } else {
    alert("Bạn vui nhập lại vị trí đúng cần đổi");
  }
}
document.getElementById("xacNhanBai6").onclick = function () {
  let viTri1 = document.getElementById("viTriDauTien").value * 1;
  let viTri2 = document.getElementById("viTriMuonDoi").value * 1;
  doiViTri(soN, viTri1, viTri2);
  document.getElementById(
    "ketQuaBai6"
  ).value = ` Vị trí trong mảng hiện tại là ${soN}`;
};

// xử lý bài 7

document.getElementById("xacNhanBai7").onclick = function () {
  let sapXepMang = soN.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "ketQuaBai7"
  ).value = `Thứ tự của mảng là ${sapXepMang}`;
};
// xử lý bài 8

document.getElementById("xacNhanBai8").onclick = function () {
  let soDuongTrongMang = [];
  soDuongTrongMang = soN.filter((num) => num > 0);
  let viTriSoNguyenDauTien = soDuongTrongMang[0];
  document.getElementById(
    "ketQuaBai8"
  ).value = `Số Nguyên đầu tiên trong mảng là ${viTriSoNguyenDauTien}`;
};

// xử lý bài 9
let mangBai9 = [];
document.getElementById("xacNhanBai9").onclick = function () {
  let soNhap = document.getElementById("soNhap").value * 1;
  mangBai9.push(soNhap);
  document.getElementById(
    "ketQuaMangBai9"
  ).value = `Số trong mảng là ${mangBai9}`;
};

document.getElementById("demSoNguyen").onclick = function () {
  console.log("tôi đã bị click");
  let soDuongTrongMang = mangBai9.filter((num) => num > 0);
  let count = 0;
  for (let i = 0; i < soDuongTrongMang.length; i++) {
    count++;
  }
  if (count > 0) {
    document.getElementById(
      "ketQuaBai9"
    ).value = `Trong mảng có ${count} số nguyên`;
  } else {
    document.getElementById(
      "ketQuaBai9"
    ).value = `Trong mảng không có số nguyên`;
  }
};

// xử lý bài 10
document.getElementById("xacNhanBai10").onclick = function () {
  let soDuongTrongMang = soN.filter((num) => num > 0);
  let soAmTrongMang = soN.filter((num) => num < 0);
  if (soDuongTrongMang.length > soAmTrongMang.length) {
    document.getElementById("ketQuaBai10").value = `Số dương > số âm`;
  } else if (soAmTrongMang.length > soDuongTrongMang.length) {
    document.getElementById("ketQuaBai10").value = `Số dương < số âm`;
  } else if (soDuongTrongMang.length == soAmTrongMang.length) {
    document.getElementById("ketQuaBai10").value = `Số dương = số âm`;
  }
};

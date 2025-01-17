function validatePhoneNumber() {
     const phoneNumber = document.getElementById("phoneNumber").value;
     const errorElement = document.getElementById("error");
     const phonePattern = /^[0-9]{10}$/; // Kiểm tra xem chuỗi chỉ chứa 10 chữ số hay không

     if (phoneNumber.match(phonePattern)) {
          errorElement.style.color = "green";
          const contentItems = document.querySelectorAll(".result-content");

          contentItems.forEach((item, index) => {
               item.innerHTML = "";

               // Lấy giá trị left, right và rating từ dataUser
               var leftValue = dataUser[0][Object.keys(dataUser[0])[index]].left;
               var rightValue = dataUser[0][Object.keys(dataUser[0])[index]].right;
               var rating = dataUser[0][Object.keys(dataUser[0])[index]].rating;

               // Gán giá trị left/right và thêm class màu nền tương ứng
               item.innerHTML = leftValue + "/" + rightValue;

               // Thêm màu dựa trên rating
               if (rating === "RT") {
                    item.classList.add("bg-danger");
               } else if (rating === "T") {
                    item.classList.add("bg-primary");
               } else if (rating === "X") {
                    item.classList.add("bg-secondary");
               }
          });

          errorElement.textContent = "";

          // Hiển thị btn xem kết quả
          const viewResultButton = document.querySelector(".btn-result");
          viewResultButton.classList.remove("d-none");
     } else {
          // Điều kiện không đúng, hiển thị thông báo lỗi
          errorElement.textContent =
               "Số điện thoại không hợp lệ. Xin vui lòng nhập 10 chữ số.";
          errorElement.style.color = "red";
     }
}

function showResults() {
     // Lấy đối tượng ngẫu nhiên từ mảng dataUser
     const randomIndex = Math.floor(Math.random() * dataUser.length);
     const randomObject = dataUser[randomIndex];

     // Cập nhật nội dung của các phần tử HTML
     const resultsDiv = document.getElementById("results");
     const nameElement = resultsDiv.querySelector(".data-name");
     const fiveElementElement = resultsDiv.querySelector(".data-five-element");
     const meanElement = resultsDiv.querySelector(".data-mean");

     if (randomObject) {
          nameElement.textContent = "Quẻ: " + randomObject.decryption.name;
          fiveElementElement.textContent =
               "Ngũ hành: " + randomObject.decryption.five_elements;
          meanElement.textContent = "Ý nghĩa: " + randomObject.decryption.mean;
     }

     // Hiển thị kết quả
     const resultSection = document.getElementById("resultSection");
     resultSection.style.display = "block";

     const viewResult = document.getElementById("results");
     viewResult.style.display = "block";

     // Hiển thị icon social
     const viewResultIconSocial = document.querySelector(".icon-container");
     viewResultIconSocial.classList.remove("d-none");
}

// menu mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
     /* Toggle active class */
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");

     let menuOpen = navMenu.classList.contains("active");
     console.log(menuOpen);
     let newMenuOpenStatus = menuOpen;
     hamburger.setAttribute("aria-expanded", newMenuOpenStatus);

     // Toggle body class to prevent scrolling
     document.body.classList.toggle("menu-open", newMenuOpenStatus);

     // Disable scrolling when the menu is open
     if (newMenuOpenStatus) {
          document.body.style.overflow = "hidden";
     } else {
          document.body.style.overflow = "";
     }
});

// close mobile menu
document.querySelectorAll(".nav-link").forEach((n) =>
     n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");

          // Remove body class and enable scrolling
          document.body.classList.remove("menu-open");
          document.body.style.overflow = "";
     })
);

// API phone number
const dataUser = [
     {
          than_menh: { left: "4", right: "1", rating: "RT" },
          nhan: { left: "2", right: "3", rating: "T" },
          duyen: { left: "1", right: "5", rating: "X" },
          qua: { left: "2", right: "4", rating: "T" },
          tien_thien: { left: "5", right: "1", rating: "X" },
          trung_thien: { left: "5", right: "5", rating: "T" },
          hau_thien: { left: "8", right: "8", rating: "T" },
          decryption: {
               name: "Trạch Hỏa Cách",
               five_elements: "Kim - Hỏa",
               mean: "Cải cách, biến đổi, cuộc cách mạng.",
          },
     },
     // thêm obj tại đây
];
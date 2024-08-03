// 36.11 JS DOMTutorial Truy cập Parent, Child, and Siblings
//  Truy Cập Phần Tử Cha, Con và Anh Em JS
// ví dụ
let ele = document.querySelector(".hero-content");
// 1. Truy cập vào phần tử cha (phần tử cha thì là duy nhất)
console.log(ele.parentElement);
// đổi màu nền của thẻ cha
// ele.parentElement.style.backgroundColor = "red";

// 2. Truy cập vào phần tử con (phần tử con có thể có nhiều)
console.log(ele.children);
// HTMLCollection(3) [h1.hero__title, p.hero__desc, div.hero-row]
console.log(ele.children[0]);
console.log(ele.children[1]);
console.log(ele.children[2]);

// 3. nextElementSibling : chọn phần tử ae kế tiếp
console.log(ele.children[0].nextElementSibling);

// 4. previousElementSibling: chọn phần tử ae trước đó
console.log(ele.children[1].previousElementSibling);

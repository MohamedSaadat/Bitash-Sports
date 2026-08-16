import memberData from "./data.json";

// 1- Search User
export function searchUser() {
  const searchValue = document.getElementById("Search").value;
  console.log(searchValue);
  if (
    searchValue === memberData.DATA[searchValue-1].كود ||
    searchValue === memberData.DATA[searchValue-1].الاسم ||
    searchValue === memberData.DATA[searchValue-1].تليفون
  ) {
    document.getElementById("fullName").value = memberData.DATA[searchValue-1].الاسم;
    document.getElementById("IDNumber").value = memberData.DATA[searchValue-1].كود;
    document.getElementById("BirthYear").value =
    memberData.DATA[searchValue-1].مواليد;
    document.getElementById("PhoneNumber").value =
    memberData.DATA[searchValue-1].تليفون;
    memberData.DATA[searchValue-1].ملاحظات
    ? (document.getElementById("notes").value =
    memberData.DATA[searchValue-1].ملاحظات)
    : (document.getElementById("notes").value = "");
  } else {
    alert("المشترك غير موجود");
  }
}

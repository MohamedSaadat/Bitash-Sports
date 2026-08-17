import membersData from "./data.json";

// 1- Search User Dashboard
export function searchUserDashboard() {
  const searchValue = document.getElementById("Search").value;
  let index;
  // اولا بتاكد انه مش فاضى
  if (searchValue == "") {
    alert("برجاء ادخال رقم العضوية او رقم التليفون او اسم المشترك");
    return;
  }
  // ثانيا بعمل بحث
  for (let i = 0; i < membersData.DATA.length; i++) {
    if (
      searchValue === membersData.DATA[i].كود ||
      searchValue === membersData.DATA[i].الاسم ||
      searchValue === membersData.DATA[i].تليفون
    ) {
      index = i;
      break;
    }
  }
  // ثالثا بعرض البيانات
  if (index || index == 0) {
    document.getElementById("Branch").value = membersData.DATA[index].فرع;
    document.getElementById("fullName").value = membersData.DATA[index].الاسم;
    document.getElementById("IDNumber").value = membersData.DATA[index].كود;
    document.getElementById("BirthYear").value = membersData.DATA[index].مواليد;
    document.getElementById("PhoneNumber").value =
      membersData.DATA[index].تليفون;
    membersData.DATA[index].ملاحظات
      ? (document.getElementById("notes").value =
          membersData.DATA[index].ملاحظات)
      : (document.getElementById("notes").value = "");
    if (membersData.DATA[index].رسوم == "") {
      document.getElementById("رسوم").type = "text";
      document.getElementById("رسوم").value = "مش مدفوعة";
    } else {
      document.getElementById("رسوم").type = "text";
      document.getElementById("رسوم").value = membersData.DATA[index].رسوم;
    }

    // جدول الدفع

    // سباحة
    var check = Object.values(
      membersData.DATA[index].payment?.["سباحة"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.سباحة[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.سباحة[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("سباحةtable").innerHTML = `
        <table>
          <thead>
            <tr><th>سباحة</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("سباحةtable").innerHTML = ``;
    }

    // جمباز
    var check = Object.values(
      membersData.DATA[index].payment?.["جمباز"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.جمباز[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.جمباز[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("جمبازtable").innerHTML = `
        <table>
          <thead>
            <tr><th>جمباز</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("جمبازtable").innerHTML = ``;
    }

    // كاراتيه
    var check = Object.values(
      membersData.DATA[index].payment?.["كاراتيه"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.كاراتيه[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.كاراتيه[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("كاراتيهtable").innerHTML = `
        <table>
          <thead>
            <tr><th>كاراتيه</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("كاراتيهtable").innerHTML = ``;
    }

    // كونج_فو
    var check = Object.values(
      membersData.DATA[index].payment?.["كونج_فو"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.كونج_فو[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.كونج_فو[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("كونج_فوtable").innerHTML = `
        <table>
          <thead>
            <tr><th>كونج_فو</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("كونج_فوtable").innerHTML = ``;
    }

    // تايكوندو
    var check = Object.values(
      membersData.DATA[index].payment?.["تايكوندو"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.تايكوندو[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.تايكوندو[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("تايكوندوtable").innerHTML = `
        <table>
          <thead>
            <tr><th>تايكوندو</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("تايكوندوtable").innerHTML = ``;
    }

    // كورة
    var check = Object.values(
      membersData.DATA[index].payment?.["كورة"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.كورة[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.كورة[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("كورةtable").innerHTML = `
        <table>
          <thead>
            <tr><th>كورة</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("كورةtable").innerHTML = ``;
    }

    // كيك_بوكس
    var check = Object.values(
      membersData.DATA[index].payment?.["كيك_بوكس"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.كيك_بوكس[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.كيك_بوكس[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("كيك_بوكسtable").innerHTML = `
        <table>
          <thead>
            <tr><th>كيك_بوكس</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("كيك_بوكسtable").innerHTML = ``;
    }

    // فتنس_جمباز
    var check = Object.values(
      membersData.DATA[index].payment?.["فتنس_جمباز"] || {},
    ).some((amount) => amount !== "" && amount !== "0");
    if (check) {
      let rows = "";
      for (let i = 1; i <= 12; i++) {
        if (membersData.DATA[index].payment.فتنس_جمباز[`m${i}`] == "") {
          rows += `<tr><td>0</td></tr>`;
        } else {
          rows += `<tr><td>${membersData.DATA[index].payment.فتنس_جمباز[`m${i}`]}</td></tr>`;
        }
      }
      document.getElementById("فتنس_جمبازtable").innerHTML = `
        <table>
          <thead>
            <tr><th>فتنس_جمباز</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>`;
    } else {
      document.getElementById("فتنس_جمبازtable").innerHTML = ``;
    }
  } else {
    alert("ممكن تكون كاتب حاجة غلط او المشترك مش موجود اصلا");
  }
}

// 2- Delete
export function Delete() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = input.defaultValue;
  });
  document.querySelectorAll("select").forEach((select) => {
    select.selectedIndex = 0;
  });
  document.getElementById("info").innerHTML = `
  <div className="الشهر">
          <table>
            <tr>
              <th>الشهر</th>
            </tr>
            <tbody>
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
              </tr>
              <tr>
                <td>11</td>
              </tr>
              <tr>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="سباحةtable"></div>
        <div id="جمبازtable"></div>
        <div id="كاراتيهtable"></div>
        <div id="كونج_فوtable"></div>
        <div id="تايكوندوtable"></div>
        <div id="كورةtable"></div>
        <div id="كيك_بوكسtable"></div>
        <div id="فتنس_جمبازtable"></div>
  `;
}

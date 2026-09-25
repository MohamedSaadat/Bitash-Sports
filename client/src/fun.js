export const DashboardHandleKeyDown = (e) => {
  if (e.key === "Enter") {
    searchUserDashboard();
  }
};

export const OverviewHandleKeyDown = (e) => {
  if (e.key === "Enter") {
    searchUserOverview();
  }
};

export const expensesHandleKeyDown = (e) => {
  if (e.key === "Enter") {
    searchUserExpenses();
  }
};

// 1- Search User Dashboard
export async function searchUserDashboard() {
  console.log("searchUserDashboard");
  const searchValue = document.getElementById("SearchDashboard").value.trim();

  if (!searchValue) {
    alert("برجاء إدخال رقم العضوية أو الاسم أو رقم التليفون");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/overview");
    const dataFromSql = await res.json();

    const member = dataFromSql.DATA.find(
      (item) =>
        String(item.id) === searchValue ||
        item.name === searchValue ||
        String(item.phone) === searchValue,
    );

    if (member) {
      document.getElementById("fullName").value = member.name || "";
      document.getElementById("IDNumber").value = member.id || "";
      document.getElementById("Branch").value = member.branch || "";
      document.getElementById("BirthYear").value =
        member.YearOfBirth || member.Year || "";
      document.getElementById("PhoneNumber").value = member.phone || "";
      document.getElementById("notes").value = member.notes || "";
    } else {
      alert("المشترك غير موجود في قاعدة البيانات");
    }
  } catch (err) {
    console.error("Error fetching database:", err);
    alert("حدث خطأ في الاتصال بقاعدة البيانات");
  }
}

// -----------------------------------------------------------

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

// -----------------------------------------------------------

// 3- Saerch User Overview
export function searchUserOverview() {
  console.log("searchUserOverview");
}

// -----------------------------------------------------------

// 4- Add New Member
export function AddNewMember() {
  console.log("Add New Member");
}

// -----------------------------------------------------------

// 5- Instapay M.Ahmed
export function instapayAhmed() {
  console.log("Instapay M.Ahmed");
}

// -----------------------------------------------------------

// 6- Instapay M.Mohamed
export function instapayMohamed() {
  console.log("Instapay M.Mohamed");
}

// -----------------------------------------------------------

// 7- Search User Expenses
export function searchUserExpenses() {
  console.log("searchUserExpenses");
}

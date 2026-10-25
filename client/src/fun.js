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
    searchExpenses();
  }
};

// -----------------------------------------------------------

// Search User Dashboard
export async function searchUserDashboard() {
  alert("searchUserDashboard");
  console.log("searchUserDashboard");
}

// -----------------------------------------------------------

// Clear
export function Clear(setFormData) {
  setFormData({
    branch: "",
    user: {
      name: "",
      id: "",
      phone: "",
      yearOfBirth: "",
    },
    notes: "",
    sports: {
      swimming: {
        amountPaid: "",
        additional: "",
        firstStar: "",
        secondStar: "",
        thirdStar: "",
        fourthStar: "",
        championship: "",
        federation: "",
        fitness: "",
      },
      gymnastics: {
        amountPaid: "",
        championship: "",
        federation: "",
        fitness: "",
      },
      karate: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      kungFu: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      taekwondo: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      kickboxing: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      football: {
        amountPaid: "",
        championship: "",
        federation: "",
      },
      medical: {
        amountPaid: "",
      },
      administrative: {
        amountPaid: "",
      },
    },
    forMonth: new Date().getMonth() + 1,
  });
}

// -----------------------------------------------------------

// Saerch User Overview
export function searchUserOverview() {
  alert("searchUserOverview");
  console.log("searchUserOverview");
}

// -----------------------------------------------------------

// Pay
export async function Pay(
  formData,
  paymentMethodType = "Cash",
  totalAmount,
  setShowError,
  setShowPhoneError,
  setShowyearOfBirthError,
  setShowTotalAmountError,
) {
  // required inputs
  if (
    !formData.branch ||
    !formData.user.name.trim() ||
    !formData.user.id ||
    !formData.user.phone.trim() ||
    !formData.user.yearOfBirth
  ) {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 1500);

    return;
  }

  // Birth year validation
  if (!/^\d{4}$/.test(String(formData.user.yearOfBirth))) {
    setShowyearOfBirthError(true);

    setTimeout(() => {
      setShowyearOfBirthError(false);
    }, 1500);

    return;
  }

  // phoneRegex
  const phone = formData.user.phone.trim();
  const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;

  if (!phoneRegex.test(phone)) {
    setShowPhoneError(true);

    setTimeout(() => {
      setShowPhoneError(false);
    }, 1500);

    return;
  }

  // Check totalAmount
  if (totalAmount === 0) {
    setShowTotalAmountError(true);

    setTimeout(() => {
      setShowTotalAmountError(false);
    }, 1500);

    return;
  }

  const receiptData = {
    branch: formData.branch,
    user: {
      name: formData.user.name,
      id: formData.user.id,
      yearOfBirth: formData.user.yearOfBirth,
      phone: formData.user.phone,
    },
    notes: formData.notes,
    sports: formData.sports,
    forMonth: formData.forMonth,
    paymentMethodType,
  };

  try {
    const response = await fetch(
      "http://localhost:3000/receipts/createReceipt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receiptData),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to create receipt");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { message: "receipt not added" };
  }
}

// -----------------------------------------------------------

// Search Expenses
export function searchExpenses() {
  alert("searchExpenses");
  console.log("searchExpenses");
}

// -----------------------------------------------------------

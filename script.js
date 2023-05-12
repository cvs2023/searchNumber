const entries = [
  {
    id: 1,
    phoneNumber: "9018001122",
  },
  {
    id: 2,
    phoneNumber: "9018001133",
  },
  {
    id: 3,
    phoneNumber: "9018001144",
  },
  {
    id: 4,
    phoneNumber: "9018001155",
  },
  {
    id: 5,
    phoneNumber: "9018001166",
  },
  {
    id: 6,
    phoneNumber: "9018001177",
  },
  {
    id: 7,
    phoneNumber: "9018001188",
  },
  {
    id: 8,
    phoneNumber: "9018001199",
  },
  {
    id: 9,
    phoneNumber: "9018001212",
  },
  {
    id: 10,
    phoneNumber: "9018001223",
  },
  {
    id: 11,
    phoneNumber: "9018001234",
  },
  {
    id: 12,
    phoneNumber: "9018001245",
  },
  {
    id: 13,
    phoneNumber: "9018001256",
  },
  {
    id: 14,
    phoneNumber: "9018001267",
  },
  {
    id: 15,
    phoneNumber: "9018001278",
  },
  {
    id: 16,
    phoneNumber: "9018001289",
  },
  {
    id: 17,
    phoneNumber: "9018001313",
  },
  {
    id: 18,
    phoneNumber: "9018001324",
  },
  {
    id: 19,
    phoneNumber: "9018001335",
  },
  {
    id: 20,
    phoneNumber: "9018001346",
  },
  {
    id: 21,
    phoneNumber: "9018001357",
  },
  {
    id: 22,
    phoneNumber: "9018001368",
  },
  {
    id: 23,
    phoneNumber: "9018001379",
  },
  {
    id: 24,
    phoneNumber: "9018001414",
  },
  {
    id: 25,
    phoneNumber: "9018001425",
  },
  {
    id: 26,
    phoneNumber: "9018001436",
  },
  {
    id: 27,
    phoneNumber: "9018001447",
  },
  {
    id: 28,
    phoneNumber: "9018001458",
  },
  {
    id: 29,
    phoneNumber: "9018001469",
  },
  {
    id: 30,
    phoneNumber: "9018001470",
  },
  {
    id: 31,
    phoneNumber: "9018001515",
  },
  {
    id: 32,
    phoneNumber: "9018001526",
  },
  {
    id: 33,
    phoneNumber: "9018001537",
  },
  {
    id: 34,
    phoneNumber: "9018001548",
  },
  {
    id: 35,
    phoneNumber: "9018001559",
  },
  {
    id: 36,
    phoneNumber: "9018001560",
  },
  {
    id: 37,
    phoneNumber: "9018001571",
  },
  {
    id: 38,
    phoneNumber: "9018001616",
  },
  {
    id: 39,
    phoneNumber: "9018001627",
  },
  {
    id: 40,
    phoneNumber: "9018001638",
  },
  {
    id: 41,
    phoneNumber: "9018001649",
  },
  {
    id: 42,
    phoneNumber: "9018001650",
  },
  {
    id: 43,
    phoneNumber: "9018001661",
  },
  {
    id: 44,
    phoneNumber: "9018001717",
  },
  {
    id: 45,
    phoneNumber: "9018001728",
  },
  {
    id: 46,
    phoneNumber: "9018001739",
  },
  {
    id: 47,
    phoneNumber: "9018001740",
  },
  {
    id: 48,
    phoneNumber: "9018001751",
  },
  {
    id: 49,
    phoneNumber: "9018001762",
  },
  {
    id: 50,
    phoneNumber: "9018001773",
  },
];

const inputNumber = document.getElementById("input-tag");
const error = document.getElementById("error-message");
const success = document.getElementById("success-message");
const showResults = document.getElementById("show-results");

//filter  data
function filterEntries(entries, search) {
  return entries.filter((i) => i.phoneNumber.includes(search));
}

//display only filtered number
function displayList(data) {
  showResults.innerHTML = "";

  if (data.length == 0) {
    showResults.innerHTML = "No Entry Found";
    return;
  }

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];

    const li = document.createElement("li");
    li.innerText = entry.phoneNumber;

    showResults.appendChild(li);
  }
}

inputNumber.addEventListener("input", (e) => {
  const search = e.target.value.toString();
  const multipleEntries = document.getElementById("multiple-entries");

  if (search.length == 2) {
    success.innerText = "Valid Search !";
    error.innerText = "";

    const filteredData = filterEntries(entries, search); //filter function invoked

    if (filteredData.length >= 2) {
      multipleEntries.innerText = "  Mutilple Entries";
    }
    displayList(filteredData); //display function invoked
  } else if (search.length > 2) {
    error.innerText = "Only two digits are allowed";
    success.innerText = "";
    showResults.innerText = "";
    multipleEntries.innerText = "";
  } else if (search.length < 2) {
    multipleEntries.innerText = "";
    success.innerText = "";
    error.innerText = "";
    showResults.innerText = "";
  }
});

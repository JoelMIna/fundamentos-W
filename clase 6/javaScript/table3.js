const tableBodyData = [
   {Numero: 1, Avatar: "images/avatar/1.jpg", ID: "#5469", Name: "Louis Stanley", Product: "iMax", Quantity: 231, Status: "Complete"},
   {Numero: 2, Avatar: "images/avatar/2.jpg", ID: "#5468", Name: "Gregory Dixon", Product: "iPad", Quantity: 250, Status: "Complete"},
   {Numero: 3, Avatar: "images/avatar/3.jpg", ID: "#5467", Name: "Doreen Steward", Product: "iPhone 6 Plus", Quantity: 90, Status: "Pending"},
   {Numero: 4, Avatar: "images/avatar/4.jpg", ID: "#5466", Name: "Bryan McKenzie", Product: "SSD", Quantity: 145, Status: "Complete"},
   {Numero: 5, Avatar: "images/avatar/5.jpg", ID: "#5465", Name: "Brenda Wallace", Product: "Magic Mouse", Quantity: 25, Status: "Incomplete"},
   {Numero: 6, Avatar: "images/avatar/6.jpg", ID: "#5464", Name: "Derek Robinson", Product: "Apple Watch", Quantity: 75, Status: "Complete"},
];

function loadTableData() {
    const tableBody = document.getElementById("tabledata2");
    tableBody.innerHTML = "";

    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="serial">${data.Numero}.</td>
            <td class="avatar">
                <div class="round-img">
                    <a href="#"><img class="rounded-circle" src="${data.Avatar}" alt=""></a>
                </div>
            </td>
            <td> <span class="name">${data.ID}</span> </td>
            <td> <span class="product">${data.Name}</span> </td>
            <td><span class="count">${data.Product}</span></td>
            <td><span class="count">${data.Quantity}</span></td>
            <td><span class="badge badge-complete">${data.Status}</span></td>
        `;
        tableBody.appendChild(row);
    })
}

loadTableData();
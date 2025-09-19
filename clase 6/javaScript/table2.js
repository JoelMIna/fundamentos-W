const tableBodyData = [
  { name: "Lael Greer", position: "Systems Administrator", office: "London", salary: "$103,500" },
  { name: "Jonas Alexander", position: "Developer", office: "San Francisco", salary: "$86,500" },
  { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", salary: "$183,000" },
  { name: "Michael Bruce", position: "Javascript Developer", office: "Singapore", salary: "$183,000" },
  { name: "Donna Snider", position: "Customer Support", office: "New York", salary: "$112,000" },
  { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", salary: "$357,650" }
    
    ];
    
    function loadTableData() {
        const tableBody = document.querySelector("tabledata1");
        tableBody.innerHTML = "";

        tableBodyData.forEach((row, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${row.name}</td>
                <td>${row.position}</td>
                <td>${row.office}</td>
                <td>${row.salary}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    loadTableData();
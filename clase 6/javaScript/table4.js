const tableBodyData = [
{numero:"1",First:"Mark",Last:"Otto",Handle:"@mdo"},
{numero:"2",First:"Jacob",Last:"Thornton",Handle:"@fat"},
{numero:"3",First:"Larry",Last:"the Bird",Handle:"@twitter"},
{numero:"4",First:"Jane",Last:"Smith",Handle:"@jsmith"},
{numero:"5",First:"Bob",Last:"Brown",Handle:"@bobb"},
{numero:"6",First:"Charlie",Last:"Davis",Handle:"@charlied"}

   
];

function loadTableData() {
    const tableBody = document.getElementById("table4");
    tableBody.innerHTML = "";

    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.numero}</td>
            <td>${data.First}</td>
            <td>${data.Last}</td>
            <td>${data.Handle}</td>
        `;
        tableBody.appendChild(row);
    })  
}
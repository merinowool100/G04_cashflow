// function createTable() {
//     const table = document.createElement("table");
//     table.style.border = "1px solid black";
//     table.style.borderCollapse = "collapse";
//     table.style.width = "500px";
//     table.style.tableLayout = "fixed";

//     const headerRow = document.createElement("tr");

//     const header1 =  document.createElement("td");
//     header1.textContent = "Year";
//     header1.style.width = "50px";
//     header1.style.border = "1px solid black";
//     headerRow.appendChild(header1);

//     const header2 =  document.createElement("td");
//     header2.textContent = "Month";
//     header2.style.width = "50px";
//     header2.style.border = "1px solid black";
//     headerRow.appendChild(header2);

//     const header3 =  document.createElement("td");
//     header3.textContent = "Day";
//     header3.style.width = "50px";
//     header3.style.border = "1px solid black";
//     headerRow.appendChild(header3);

//     const header4 =  document.createElement("td");
//     header4.textContent = "Item";
//     header4.style.width = "150px";
//     header4.style.border = "1px solid black";
//     headerRow.appendChild(header4);

//     const header5 =  document.createElement("td");
//     header5.textContent = "Type";
//     header5.style.width = "100px";
//     header5.style.border = "1px solid black";
//     headerRow.appendChild(header5);

//     const header6 =  document.createElement("td");
//     header6.textContent = "Amount";
//     header6.style.width = "100px";
//     header6.style.border = "1px solid black";
//     headerRow.appendChild(header6);

//     const header7 =  document.createElement("td");
//     header7.textContent = "Checking";
//     header7.style.width = "100px";
//     header7.style.border = "1px solid black";
//     headerRow.appendChild(header7);

//     const header8 =  document.createElement("td");
//     header8.textContent = "Saving";
//     header8.style.width = "100px";
//     header8.style.border = "1px solid black";
//     headerRow.appendChild(header8);

//     const header9 =  document.createElement("td");
//     header9.textContent = "Securities";
//     header9.style.width = "100px";
//     header9.style.border = "1px solid black";
//     headerRow.appendChild(header9);

//     const header10 =  document.createElement("td");
//     header10.textContent = "Curt. Asset";
//     header10.style.width = "100px";
//     header10.style.border = "1px solid black";
//     headerRow.appendChild(header10);

//     table.appendChild(headerRow);

//     for (let i = 0; i < 10; i++) {
//         const row = document.createElement("tr");
//         for (let j = 0; j < 10; j++) {
//             const cell = document.createElement("td");
//             cell.style.border = "1px solid black";
//             // cell.style.width = "100px";
//             cell.style.height = "20px";
//             cell.style.padding = "10px";
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
//     document.body.appendChild(table);

//     const totalRow = document.createElement("tr");

//     const total1 =  document.createElement("td");
//     total1.textContent = "Total";
//     total1.style.width = "300px";
//     total1.style.border = "1px solid black";
//     totalRow.appendChild(total1);

//     const total2 =  document.createElement("td");
//     total2.textContent = 0;
//     total2.style.width = "50px";
//     total2.style.border = "1px solid black";
//     totalRow.appendChild(total2);

//     const total3 =  document.createElement("td");
//     total3.textContent = 0;
//     total3.style.width = "50px";
//     total3.style.border = "1px solid black";
//     totalRow.appendChild(total3);

//     const total4 =  document.createElement("td");
//     total4.textContent = 0;
//     total4.style.width = "150px";
//     total4.style.border = "1px solid black";
//     totalRow.appendChild(total4);

//     const total5 =  document.createElement("td");
//     total5.textContent = 0;
//     total5.style.width = "100px";
//     total5.style.border = "1px solid black";
//     totalRow.appendChild(total5);

//     const total6 =  document.createElement("td");
//     total6.textContent = 0;
//     total6.style.width = "100px";
//     total6.style.border = "1px solid black";
//     totalRow.appendChild(total6);

//     const total7 =  document.createElement("td");
//     total7.textContent = 0;
//     total7.style.width = "100px";
//     total7.style.border = "1px solid black";
//     totalRow.appendChild(total7);

//     const total8 =  document.createElement("td");
//     total8.textContent = 0;
//     total8.style.width = "100px";
//     total8.style.border = "1px solid black";
//     totalRow.appendChild(total8);

//     const total9 =  document.createElement("td");
//     total9.textContent = 0;
//     total9.style.width = "100px";
//     total9.style.border = "1px solid black";
//     totalRow.appendChild(total9);

//     const total10 =  document.createElement("td");
//     total10.textContent = 0;
//     total10.style.width = "100px";
//     total10.style.border = "1px solid black";
//     totalRow.appendChild(total10);

//     table.appendChild(totalRow);

//     // 新しい行を追加する関数
//     function addRow(year, month, day, item, type, amount, balance) {
//         const newRow = document.createElement("tr");

//         const cell1 = document.createElement("td");
//         cell1.textContent = year;
//         cell1.style.border = "1px solid black";
//         newRow.appendChild(cell1);

//         const cell2 = document.createElement("td");
//         cell2.textContent = month;
//         cell2.style.border = "1px solid black";
//         newRow.appendChild(cell2);

//         const cell3 = document.createElement("td");
//         cell3.textContent = day;
//         cell3.style.border = "1px solid black";
//         newRow.appendChild(cell3);

//         const cell4 = document.createElement("td");
//         cell4.textContent = item;
//         cell4.style.border = "1px solid black";
//         newRow.appendChild(cell4);

//         const cell5 = document.createElement("td");
//         cell5.textContent = type;
//         cell5.style.border = "1px solid black";
//         newRow.appendChild(cell5);

//         const cell6 = document.createElement("td");
//         cell6.textContent = amount;
//         cell6.style.border = "1px solid black";
//         newRow.appendChild(cell6);

//         const cell7 = document.createElement("td");
//         cell7.textContent = amount;
//         cell7.style.border = "1px solid black";
//         newRow.appendChild(cell7);

//         const cell8 = document.createElement("td");
//         cell8.textContent = type;
//         cell8.style.border = "1px solid black";
//         newRow.appendChild(cell8);

//         const cell9 = document.createElement("td");
//         cell9.textContent = amount;
//         cell9.style.border = "1px solid black";
//         newRow.appendChild(cell9);

//         const cell10 = document.createElement("td");
//         cell10.textContent = amount;
//         cell10.style.border = "1px solid black";
//         newRow.appendChild(cell10);

//         const firstDataRow = table.rows[1];
//         const firstRowHeight = firstDataRow.offsetHeight;
//         newRow.style.height = `${firstRowHeight}px`;



//         table.insertBefore(newRow, totalRow);  // Total 行の前に新しい行を挿入
//     }


//     const addBtn = document.createElement("button");
//     addBtn.textContent = "Add";
//     addBtn.style.marginTop = "20px";
//     document.body.appendChild(addBtn);
//     addBtn.addEventListener("click",()=>{
//         addRow();
//     });

// }

// createTable();

let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// 行を追加する関数
function addRow() {
  let newRow = table.insertRow();

  // 各セルに入力フォームを追加
  newRow.innerHTML = `
    <td><input type="date" onchange="updateTable()"></td>
    <td><input type="text" onchange="updateTable()"></td>
    <td><input type="number" onchange="updateTable()"></td>
    <td>0</td>
  `;
  updateTable();  // テーブルを更新して並べ替えを行う
}

// テーブルを更新して並べ替え、合計を計算する関数
function updateTable() {
  let rows = Array.from(table.rows);
  
  // 行のデータを収集して並べ替え
  rows.forEach(row => {
    let date = row.cells[0].querySelector('input').value;
    let incomeExpense = parseFloat(row.cells[2].querySelector('input').value) || 0;
    let totalCell = row.cells[3];

    // 合計を計算
    let previousTotal = rows.indexOf(row) > 0 ? parseFloat(rows[rows.indexOf(row) - 1].cells[3].innerText) : 0;
    totalCell.innerText = previousTotal + incomeExpense;
  });

  // 日付順に並べ替え
  rows.sort((rowA, rowB) => {
    let dateA = new Date(rowA.cells[0].querySelector('input').value);
    let dateB = new Date(rowB.cells[0].querySelector('input').value);
    return dateB - dateA;  // 新しい日付を上にする
  });

  // 並べ替えた行をテーブルに再配置
  rows.forEach(row => table.appendChild(row));
}
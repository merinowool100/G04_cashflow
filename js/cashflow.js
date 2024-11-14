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



/////////////////////////////////////////////////////////////////////////////////


// let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// // 行を追加する関数
// function addRow() {
//   let newRow = table.insertRow();

//   // 各セルに入力フォームを追加
//   newRow.innerHTML = `
//     <td><input type="date" style="border:none;" onchange="updateTable()"></td>
//     <td><input type="text" style="border:none;" onchange="updateTable()"></td>
//     <td><input type="number" style="border:none;" onchange="updateTable()"></td>
//     <td>0</td>
//   `;
//   updateTable();  // テーブルを更新して並べ替えを行う
// }

// テーブルを更新して並べ替え、合計を計算する関数
// function updateTable() {
//   let rows = Array.from(table.rows);
  
//   // 行のデータを収集して並べ替え
//   rows.forEach(row => {
//     let date = row.cells[0].querySelector('input').value;
//     let incomeExpense = parseFloat(row.cells[2].querySelector('input').value) || 0;
//     let totalCell = row.cells[3];

//     // 合計を計算
//     let previousTotal = rows.indexOf(row) > 0 ? parseFloat(rows[rows.indexOf(row) - 1].cells[3].innerText) : 0;
//     totalCell.innerText = previousTotal + incomeExpense;
//   });

//   // 日付順に並べ替え
//   rows.sort((rowA, rowB) => {
//     let dateA = new Date(rowA.cells[0].querySelector('input').value);
//     let dateB = new Date(rowB.cells[0].querySelector('input').value);
//     return dateA - dateB;  // 新しい日付を上にする
//   });

//   // 並べ替えた行をテーブルに再配置
//   rows.forEach(row => table.appendChild(row));
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

        // 初期値設定
        let checkingBalance = 10000;
        let savingBalance = 5000;
        let securitiesBalance = 2000;
        let curAsset = checkingBalance + savingBalance + securitiesBalance;

        // ページロード時の設定
        document.addEventListener("DOMContentLoaded", () => {
            // 初期年月を設定
            const currentDate = new Date();
            const currentYearMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
            document.getElementById('year-month').value = currentYearMonth;

            // 初期残高を表示
            document.getElementById('cur-asset').textContent = curAsset;
            document.getElementById('initial-checking').textContent = checkingBalance;
            document.getElementById('initial-saving').textContent = savingBalance;
            document.getElementById('initial-securities').textContent = securitiesBalance;
            document.getElementById('initial-cur-asset').textContent = curAsset;

            makeCellsEditable();
        });

        // 残高の更新
        function updateBalances() {
            // 年月選択に基づいて残高を更新
            checkingBalance = parseFloat(document.getElementById('checking').value) || checkingBalance;
            savingBalance = parseFloat(document.getElementById('saving').value) || savingBalance;
            securitiesBalance = parseFloat(document.getElementById('securities').value) || securitiesBalance;
            curAsset = checkingBalance + savingBalance + securitiesBalance;

            // 更新された残高を表示
            document.getElementById('cur-asset').textContent = curAsset;
            document.getElementById('initial-checking').textContent = checkingBalance;
            document.getElementById('initial-saving').textContent = savingBalance;
            document.getElementById('initial-securities').textContent = securitiesBalance;
            document.getElementById('initial-cur-asset').textContent = curAsset;

            // 残高再計算（テーブルに反映）
            recalculateBalances();
        }

        // 取引をテーブルに追加
        document.getElementById('transaction-form').addEventListener("submit", function (e) {
            e.preventDefault();
            
            const date = parseInt(document.getElementById('date').value);
            const item = document.getElementById('item').value;
            const type = document.getElementById('type').value;
            const amount = parseFloat(document.getElementById('amount').value);

            // 取引処理
            let newChecking = checkingBalance;
            let newSaving = savingBalance;
            let newSecurities = securitiesBalance;

            switch (type) {
                case 'Checking':
                    newChecking += amount;
                    break;
                case 'Saving':
                    newSaving += amount;
                    break;
                case 'Securities':
                    newSecurities += amount;
                    break;
                case 'Checking >> Saving':
                    newChecking -= amount;
                    newSaving += amount;
                    break;
                case 'Checking >> Securities':
                    newChecking -= amount;
                    newSecurities += amount;
                    break;
                case 'Saving >> Checking':
                    newSaving -= amount;
                    newChecking += amount;
                    break;
                case 'Saving >> Securities':
                    newSaving -= amount;
                    newSecurities += amount;
                    break;
                case 'Securities >> Checking':
                    newSecurities -= amount;
                    newChecking += amount;
                    break;
                case 'Securities >> Saving':
                    newSecurities -= amount;
                    newSaving += amount;
                    break;
            }

            // 新しい残高を計算
            const newCurAsset = newChecking + newSaving + newSecurities;

            // 新しい行を作成
            const table = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            // 新しい行を日付順に挿入
            const rows = Array.from(table.rows);
            let insertAt = rows.findIndex(row => {
                const rowDate = parseInt(row.cells[0].textContent);
                return rowDate > date;
            });

            if (insertAt === -1) {
                insertAt = rows.length; // 最後に追加
            }

            // 挿入位置に新しい行を追加
            table.insertBefore(newRow, table.rows[insertAt]);

            // 新しい行にデータを挿入
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${item}</td>
                <td>${type}</td>
                <td>${amount}</td>
                <td>${newChecking}</td>
                <td>${newSaving}</td>
                <td>${newSecurities}</td>
                <td>${newCurAsset}</td>
            `;

            // 残高を再計算
            recalculateBalances();
        });

        // 残高の再計算
        function recalculateBalances() {
            let checkingTotal = checkingBalance;
            let savingTotal = savingBalance;
            let securitiesTotal = securitiesBalance;

            const rows = document.querySelectorAll("#transaction-table tbody tr:not(#initial-row)");
            rows.forEach(row => {
                const amount = parseFloat(row.cells[3].textContent);
                const type = row.cells[2].textContent;

                switch (type) {
                    case 'Checking':
                        checkingTotal += amount;
                        break;
                    case 'Saving':
                        savingTotal += amount;
                        break;
                    case 'Securities':
                        securitiesTotal += amount;
                        break;
                    case 'Checking >> Saving':
                        checkingTotal -= amount;
                        savingTotal += amount;
                        break;
                    case 'Checking >> Securities':
                        checkingTotal -= amount;
                        securitiesTotal += amount;
                        break;
                    case 'Saving >> Checking':
                        savingTotal -= amount;
                        checkingTotal += amount;
                        break;
                    case 'Saving >> Securities':
                        savingTotal -= amount;
                        securitiesTotal += amount;
                        break;
                    case 'Securities >> Checking':
                        securitiesTotal -= amount;
                        checkingTotal += amount;
                        break;
                    case 'Securities >> Saving':
                        securitiesTotal -= amount;
                        savingTotal += amount;
                        break;
                }

                // Cur. Asset再計算
                const curAssetTotal = checkingTotal + savingTotal + securitiesTotal;
                document.getElementById("cur-asset").textContent = curAssetTotal;
                document.getElementById("initial-checking").textContent = checkingTotal;
                document.getElementById("initial-saving").textContent = savingTotal;
                document.getElementById("initial-securities").textContent = securitiesTotal;
            });
        }

        // セルを編集可能にする
        function makeCellsEditable() {
            const editableCells = document.querySelectorAll('.editable');
            editableCells.forEach(cell => {
                cell.addEventListener('click', function() {
                    this.contentEditable = true;
                });
                cell.addEventListener('blur', function() {
                    this.contentEditable = false;
                    recalculateBalances();
                });
            });
        }
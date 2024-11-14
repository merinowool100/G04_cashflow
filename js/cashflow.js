document.addEventListener('DOMContentLoaded', function() {
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let checkingTotal = 0;  // checkingの合計を保持する変数

    // 入力ボタンが押されたときに行を追加する処理
    document.getElementById('addRowBtn').addEventListener('click', function() {
        let date = document.getElementById('inputDate').value;
        let transactionName = document.getElementById('inputTransactionName').value;
        let transactionType = document.getElementById('inputTransactionType').value;
        let amount = parseFloat(document.getElementById('inputAmount').value) || 0;

        if (!date || !transactionName || amount <= 0) {
            alert('すべてのフィールドを正しく入力してください');
            return;
        }

        // 1. Tableに新しい行を追加
        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${transactionName}</td>
            <td>${transactionType}</td>
            <td>${amount}</td>
            <td><input type="number" class="checkingAmount" disabled></td>
            <td><input type="number" class="savingAmount" disabled></td>
            <td><input type="number" class="securitiesAmount" disabled></td>
            <td><input type="number" class="curAssetAmount" disabled></td>
            <td><button class="updateBtn">更新</button></td>
        `;

        // 2. 行に更新ボタンのイベントリスナーを追加
        newRow.querySelector('.updateBtn').addEventListener('click', function() {
            updateRow(newRow);
        });

        // 3. 入力後、テーブルの計算と並べ替えを実行
        updateTable();

        // 4. 入力フォームをリセット
        document.getElementById('inputDate').value = '';
        document.getElementById('inputTransactionName').value = '';
        document.getElementById('inputTransactionType').value = 'Checking';
        document.getElementById('inputAmount').value = '';
    });

    // テーブルを更新し、並べ替え、再計算する関数
    function updateTable() {
        let rows = Array.from(table.rows);
        checkingTotal = 0;  // checkingTotalをリセット

        // 5. すべての行について計算
        rows.forEach((row, index) => {
            let amount = parseFloat(row.cells[3].textContent) || 0;
            let transactionType = row.cells[2].textContent;
            let checkingCell = row.cells[4].querySelector('input');
            let savingCell = row.cells[5].querySelector('input');
            let securitiesCell = row.cells[6].querySelector('input');
            let curAssetCell = row.cells[7].querySelector('input');

            // 初期の金額を設定
            let checkingAmount = checkingTotal;
            let savingAmount = 1000;  // 仮の初期値
            let securitiesAmount = 1000;  // 仮の初期値

            // トランザクションタイプに応じて金額を更新
            if (transactionType === "Saving >> Checking") {
                checkingAmount += amount;
                savingAmount -= amount;
            } else if (transactionType === "Saving >> Securities") {
                savingAmount -= amount;
                securitiesAmount += amount;
            } else if (transactionType === "Checking >> Saving") {
                checkingAmount -= amount;
                savingAmount += amount;
            } else if (transactionType === "Checking >> Securities") {
                checkingAmount -= amount;
                securitiesAmount += amount;
            } else if (transactionType === "Securities >> Saving") {
                securitiesAmount -= amount;
                savingAmount += amount;
            } else if (transactionType === "Securities >> Checking") {
                securitiesAmount -= amount;
                checkingAmount += amount;
            } else if (transactionType === "Checking") {
                checkingAmount += amount;
            }

            // セルに計算結果を表示
            checkingCell.value = checkingAmount;
            savingCell.value = savingAmount;
            securitiesCell.value = securitiesAmount;

            // 合計金額を表示
            let curAsset = checkingAmount + savingAmount + securitiesAmount;
            curAssetCell.value = curAsset;

            // checkingTotalを次の行に引き継ぐ
            checkingTotal = checkingAmount;
        });

        // 6. テーブルを日付順に並べ替え
        rows.sort((rowA, rowB) => {
            let dateA = new Date(rowA.cells[0].textContent);
            let dateB = new Date(rowB.cells[0].textContent);
            return dateA - dateB; // 昇順に並べる
        });

        // 並べ替えた行をテーブルに再配置
        rows.forEach(row => table.appendChild(row));
    }

    // 行を更新する処理
    function updateRow(row) {
        let date = prompt('新しい日付:', row.cells[0].textContent);
        let transactionName = prompt('新しい取引名:', row.cells[1].textContent);
        let transactionType = prompt('新しい取引タイプ:', row.cells[2].textContent);
        let amount = parseFloat(prompt('新しい金額:', row.cells[3].textContent));

        if (!date || !transactionName || !transactionType || isNaN(amount)) {
            alert('すべてのフィールドを正しく入力してください');
            return;
        }

        row.cells[0].textContent = date;
        row.cells[1].textContent = transactionName;
        row.cells[2].textContent = transactionType;
        row.cells[3].textContent = amount;
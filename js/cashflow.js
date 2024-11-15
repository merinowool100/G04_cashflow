let records = [];

let initialDate, endDate, initialBalance, initialSaving, initialSecurities, initialAsset;

// localStorage からレコードを読み込む
const savedRecords = localStorage.getItem("records");
if (savedRecords) {
    records = JSON.parse(savedRecords);
}

displayRecords();

const savedSetup = localStorage.getItem("setup");
if(savedSetup){
    const setupData = JSON.parse(savedSetup);
    initialDate = setupData.initialDate;
    endDate = setupData.endDate;
    initialBalance = setupData.initialBalance;
    initialSaving = setupData.initialSaving || 0;  // default 0
    initialSecurities = setupData.initialSecurities || 0;  // default 0
    initialAsset = initialBalance + initialSaving + initialSecurities;

    document.getElementById("initialDate").value = initialDate;
    document.getElementById("endDate").value = endDate;
    document.getElementById("initialBalance").value = initialBalance;
    document.getElementById("initialSaving").value = initialSaving;
    document.getElementById("initialSecurities").value = initialSecurities;
    document.getElementById("dateShownStart").value = initialDate;
    document.getElementById("dateShownEnd").value = endDate;
}


// 表示期間の開始日と終了日の変更を監視
document.getElementById("dateShownStart").addEventListener("change", displayRecords);
document.getElementById("dateShownEnd").addEventListener("change", displayRecords);



// 表示を更新
displayRecords();

// 記録を表示する関数
function displayRecords() {
    const recordsTableBody = document.querySelector("table tbody");
    recordsTableBody.innerHTML = "";

    const dateShownStart = document.getElementById("dateShownStart").value;
    const dateShownEnd = document.getElementById("dateShownEnd").value;

    const filteredRecords = records.filter(record => {
        return record.date >= dateShownStart && record.date <= dateShownEnd;
    })

    let balance = 0;
    let saving = 0;
    let securities = 0
    let asset = 0;

    filteredRecords.forEach((record,i) => {
        const row = document.createElement("tr");

        const tdDate = document.createElement("td");
        tdDate.style.width = "110px";
        const tdItem = document.createElement("td");
        tdItem.style.width = "120px";
        tdItem.style.whiteSpace = "normal";
        const tdAmount = document.createElement("td");
        tdAmount.style.width = "100px";
        tdAmount.style.textAlign = "end";
        tdAmount.style.paddingRight = "5px";
        const tdType = document.createElement("td");
        tdType.style.width = "80px";
        tdType.style.textAlign = "end";
        tdType.style.paddingRight = "5px";
        const tdBalance = document.createElement("td");
        tdBalance.style.width = "110px";
        tdBalance.style.textAlign = "end";
        tdBalance.style.paddingRight = "5px";
        tdBalance.style.backgroundColor = "rgba(230,230,230,0.3)";
        tdBalance.style.fontWeight = "bold";
        const tdSaving = document.createElement("td");
        tdSaving.style.width = "110px";
        tdSaving.style.textAlign = "end";
        tdSaving.style.paddingRight = "5px";
        // tdSaving.style.backgroundColor = "rgba(255,200,120,0.3)";
        const tdSecurities = document.createElement("td");
        tdSecurities.style.width = "110px";
        tdSecurities.style.textAlign = "end";
        tdSecurities.style.paddingRight = "5px";
        // tdSecurities.style.backgroundColor = "rgba(255,200,120,0.3)";
        const tdAsset = document.createElement("td");
        tdAsset.style.width = "110px";
        tdAsset.style.textAlign = "end";
        tdAsset.style.paddingRight = "5px";
        tdAsset.style.backgroundColor = "rgba(230,230,230,0.3)";
        tdAsset.style.fontWeight = "bold";
        const tdDelete = document.createElement("td");
        tdDelete.style.width = "50px";
        tdDelete.style.textAlign = "center";

        const amount = record.amount ?? 0;

        console.log(record);

        tdDate.textContent = record.date;
        tdItem.textContent = record.item;
        tdAmount.textContent = amount.toLocaleString();
        tdType.textContent = record.type;

        switch (record.type) {
            case "CHE":
                balance += record.amount;
                break;
            case "SAV":
                saving += record.amount;
                break;
            case "SEC":
                securities += record.amount;
                break;
            case "CHEtSAV":
                balance -= record.amount;  // 現金から預金へ移動
                saving += record.amount;
                break;
            case "CHEtSEC":
                balance -= record.amount;  // 現金から証券へ移動
                securities += record.amount;
                break;
            case "SAVtCHE":
                saving -= record.amount;  // 預金から現金へ移動
                balance += record.amount;
                break;
            case "SAVtSEC":
                saving -= record.amount;  // 預金から証券へ移動
                securities += record.amount;
                break;
            case "SECtCHE":
                securities -= record.amount;  // 証券から現金へ移動
                balance += record.amount;
                break;
            case "SECtSAV":
                securities -= record.amount;  // 証券から預金へ移動
                saving += record.amount;
                break;
            default:
                break;
        }
    
        // 資産の合計を計算
        asset = balance + saving + securities;
    
        // checking, saving, securities, asset の各値に対して色を設定
        const applyColor = (tdElement, value) => {
            if (value < 0) {
                tdElement.style.color = "rgb(200,0,0)";  // マイナス値は赤
            } else {
                tdElement.style.color = "black";  // プラス値は黒
            }
        };
    
        tdBalance.textContent = balance.toLocaleString();
        tdSaving.textContent = saving.toLocaleString();
        tdSecurities.textContent = securities.toLocaleString();
        tdAsset.textContent = asset.toLocaleString();
    
        // 各セルに色を適用
        applyColor(tdBalance, balance);
        applyColor(tdSaving, saving);
        applyColor(tdSecurities, securities);
        applyColor(tdAsset, asset);


    //     switch (record.type) {
    //     case "CHE":
    //         balance += record.amount;
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SAV":
    //         saving += record.amount;
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SEC":
    //         securities += record.amount;
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "CHEtSAV":
    //         balance -= record.amount;  // 現金から預金へ移動
    //         saving += record.amount;   // 預金に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "CHEtSEC":
    //         balance -= record.amount;  // 現金から証券へ移動
    //         securities += record.amount; // 証券に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SAVtCHE":
    //         saving -= record.amount;  // 預金から現金へ移動
    //         balance += record.amount; // 現金に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SAVtSEC":
    //         saving -= record.amount;  // 預金から証券へ移動
    //         securities += record.amount; // 証券に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SECtCHE":
    //         securities -= record.amount;  // 証券から現金へ移動
    //         balance += record.amount;     // 現金に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     case "SECtSAV":
    //         securities -= record.amount;  // 証券から預金へ移動
    //         saving += record.amount;      // 預金に加算
    //         tdBalance.textContent = balance.toLocaleString();
    //         tdSaving.textContent = saving.toLocaleString();
    //         tdSecurities.textContent = securities.toLocaleString();
    //         break;
    //     default:
    //         // 不明なタイプの場合は何もしない
    //         break;
    // }

    // // 資産の合計を計算
    // asset = balance + saving + securities;
    // tdAsset.textContent = asset.toLocaleString();

    // if(balance < 0){
    //     tdBalance.style.color = "rgb(200,0,0)";
    // }
    // if(saving < 0){
    //     tdSaving.style.color = "rgb(200,0,0)";
    // }
    // if(securities < 0){
    //     tdSecurities.style.color = "rgb(200,0,0)";
    // }
    // if(asset < 0){
    //     tdSecurities.style.color = "rgb(200,0,0)";
    // }



        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.classList.add("delete-button");
        deleteBtn.style.fontSize = "10px";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.border = "0.5px solid black"
        deleteBtn.addEventListener("click", ()=> deleteRecord(i));

        tdDelete.appendChild(deleteBtn);

        row.appendChild(tdDate);
        row.appendChild(tdItem);
        row.appendChild(tdAmount);
        row.appendChild(tdType);
        row.appendChild(tdBalance);
        row.appendChild(tdSaving);
        row.appendChild(tdSecurities);
        row.appendChild(tdAsset);
        row.appendChild(tdDelete);

        recordsTableBody.appendChild(row);
        // console.log(row);
    })
    // console.log(records);

}

// レコード削除
function deleteRecord(index){
    const recordToDelete = records[index];
    records = records.filter(record => record !== recordToDelete);
    localStorage.setItem("records", JSON.stringify(records));
    displayRecords();
}



// チェックボックスをどちらか一方だけ選択できるようにする
document.getElementById("monthly").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("yearly").checked = false;  // 毎月が選ばれたら毎年を解除
    }
});

document.getElementById("yearly").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("monthly").checked = false;  // 毎年が選ばれたら毎月を解除
    }
    });



// 記録をフォームに追加する処理
document.getElementById("inputForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const item = document.getElementById("item").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)){
        alert("数値を入力してください");
        return;
    }
    const type = document.getElementById("type").value;
    const flag = "none";

    let startDate = new Date(date);
    let endDateInput = document.getElementById("endDate").value;

    if(!endDateInput){
        alert("終了日が設定されていません");
        return;
    }

    let endDate = new Date(endDateInput);


    if (document.getElementById("monthly").checked){
        while (startDate <= endDate){
            records.push({date: startDate.toISOString().split("T")[0],item, amount,type, flag});
            startDate.setMonth(startDate.getMonth() +1);
        }
    }
    else if (document.getElementById("yearly").checked){
        while (startDate <= endDate){
            records.push({date: startDate.toISOString().split("T")[0],item, amount,type, flag});
            startDate.setFullYear(startDate.getFullYear() +1);
        }
    } else{
        records.push({ date, item, amount, type, flag });
    }

    // 日付順に並べ替え
    records.sort((a, b) => new Date(a.date) - new Date(b.date));

    // localStorage に保存
    localStorage.setItem("records", JSON.stringify(records));

    // フォームをリセット
    document.getElementById("inputForm").reset();

    // 表示を更新
    displayRecords();
});

// 初期化ボタン（localStorage を消去する）
document.getElementById("clearLocalStorageBtn").addEventListener("click", () => {
    localStorage.clear();
    location.reload(); // ページをリロードして変更を反映
});

// 初期設定ウィンドウの表示/非表示を切り替える
document.getElementById("initialSetupBtn").addEventListener("click", function() {
    const setupWindow = document.getElementById("setup");
    if (setupWindow.style.display === "none" || setupWindow.style.display === "") {
        setupWindow.style.display = "block";  // 表示
    } else {
        setupWindow.style.display = "none";   // 非表示
    }
});

// 設定保存ボタン
document.getElementById("saveSetup").addEventListener("click", () => {
    initialDate = document.getElementById("initialDate").value;
    initialBalance = parseFloat(document.getElementById("initialBalance").value)||0;
    initialSaving = parseFloat(document.getElementById("initialSaving").value) || 0;
    initialSecurities = parseFloat(document.getElementById("initialSecurities").value) || 0;
    endDate =  document.getElementById("endDate").value;

    // "init" フラグがついているレコードを削除して新しいレコードを追加
    records = records.filter(record => record.flag !== "init");
    records.push({ date: initialDate, item: "初期残高（決済）", amount: initialBalance, type: "CHE", flag: "init" });
    records.push({ date: initialDate, item: "初期残高（預金）", amount: initialSaving, type: "SAV", flag: "init" });
    records.push({ date: initialDate, item: "初期残高（証券）", amount: initialSecurities, type: "SEC", flag: "init" });


    records.sort((a, b) => new Date(a.date) - new Date(b.date));

   // localStorage に保存
   localStorage.setItem("records", JSON.stringify(records));

    localStorage.setItem("setup",JSON.stringify({
        initialDate,
        endDate,
        initialBalance,
        initialSaving,  // 新たに追加
        initialSecurities,  // 新たに追加
        initialAsset: initialBalance + initialSaving + initialSecurities
    }));

    // 表示期間を初期設定で設定
    document.getElementById("dateShownStart").value = initialDate;
    document.getElementById("dateShownEnd").value = endDate;

    // 設定ウィンドウを非表示にする
    document.getElementById("setup").style.display = "none";

    // 表示を更新
    displayRecords();
});

console.log(records);
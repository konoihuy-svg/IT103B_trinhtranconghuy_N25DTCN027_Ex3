let subscriptions = [
    { id: "SUB01", name: "Nguyen Van A", plan: "Standard", price: 120000, devices: 2 },
    { id: "SUB02", name: "Tran Thi B", plan: "Family", price: 250000, devices: 5 }
];

function listSubs() {
    console.log("\n--- DANH SÁCH THUÊ BAO RIKKEISTREAM ---");
    if (subscriptions.length === 0) {
        console.log("Danh sách trống!");
    } else {
        console.table(subscriptions);
    }
}

function addSub() {
    console.log("\n--- THÊM THUÊ BAO MỚI ---");
    let id = prompt("Nhập mã thuê bao (VD: SUB03):");
    let name = prompt("Nhập tên khách hàng:");
    let plan = prompt("Nhập tên gói cước (Standard/Family):");
    let price = parseFloat(prompt("Nhập đơn giá (VNĐ):"));
    let devices = parseInt(prompt("Nhập số thiết bị tối đa:"));

    let newSub = {
        id: id,
        name: name,
        plan: plan,
        price: price,
        devices: devices
    };
    
    subscriptions.push(newSub);
    console.log(`[Thành công] Đã thêm thuê bao ${name}!`);
}

function upgradeSub() {
    console.log("\n--- NÂNG CẤP GÓI CƯỚC ---");
    let targetId = prompt("Nhập mã thuê bao cần nâng cấp (VD: SUB01):");
    
    let subIndex = subscriptions.findIndex(sub => sub.id === targetId);
    
    if (subIndex !== -1) {
        subscriptions[subIndex].plan = "Family";
        subscriptions[subIndex].price = 250000;
        subscriptions[subIndex].devices = 5;
        console.log(`[Thành công] Thuê bao ${targetId} đã được nâng cấp lên gói Family!`);
    } else {
        console.log(`[Lỗi] Không tìm thấy mã thuê bao ${targetId}!`);
    }
}

function startApp() {
    let choice;
    do {
        let menu = "\n===== QUẢN TRỊ RIKKEISTREAM =====\n" +
                   "1. Thêm thuê bao mới\n" +
                   "2. Hiển thị danh sách thuê bao\n" +
                   "3. Nâng cấp gói cước\n" +
                   "4. Thoát chương trình\n" +
                   "=================================\n" +
                   "Mời bạn nhập lựa chọn (1-4): ";
                   
        choice = prompt(menu);

        switch (choice) {
            case "1":
                addSub();
                break;
            case "2":
                listSubs();
                break;
            case "3":
                upgradeSub();
                break;
            case "4":
                console.log("Cảm ơn bạn đã sử dụng hệ thống. Tạm biệt!");
                break;
            default:
                console.log("[Lỗi] Lựa chọn không hợp lệ, vui lòng chọn lại (1-4).");
                break;
        }
    } while (choice !== "4");
}

startApp();
// Toggle Sidebar
    let sidebarOpen = false;
    const sidebar = document.getElementById('sidebar');

    function openSidebar() {
        if (!sidebarOpen) {
            sidebar.classList.add('sidebar-responsive');
            sidebarOpen = true;
        }
    }
    function closeSidebar() {
        if (sidebarOpen) {
            sidebar.classList.remove('sidebar-responsive');
            sidebarOpen = false;
        }
    }



// Initialize Charts
const salesChart = new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Sales ($)",
            data: [5000, 7000, 8000, 6500, 9000],
            background: "#00FFFF",
            color: "#eee9e9"
        }]
    }
});

const revenueChart = new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Revenue ($)",
            data: [20000, 25000, 28000, 24000, 30000],
            borderColor: "#77AAAA",
            color: "#eee9e9",
            fill: false
        }]
    }
});

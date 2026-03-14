// ... 前方代碼保持不變 ...
        // --- 修正 scrollToDate 的位移 (增加到 145 確保不被遮擋) ---
        scrollToDate: (d) => { 
            selectedDate.value = d; 
            const id = d === 'summary' ? 'expense-summary' : (currentTab.value === 'expense' ? 'expense-date-' : 'date-') + d.replace('/', '-'); 
            const el = document.getElementById(id); 
            if(el) window.scrollTo({ top: el.offsetTop - 145, behavior: 'smooth' }); 
        },
// ... 後方代碼保持不變 (包含 getDateTheme 函數) ...

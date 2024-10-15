// تحميل فهرس البحث
let searchIndex;

fetch('searchIndex.json')
    .then(response => response.json())
    .then(data => {
        searchIndex = data;

        // إعداد Fuse.js
        const options = {
            keys: ['title', 'keywords'], // البحث في العنوان والكلمات المفتاحية
            threshold: 0.4 // درجة الحساسية (كلما قل الرقم زادت الدقة)
        };
        window.fuse = new Fuse(searchIndex, options);
    })
    .catch(error => console.error('Error loading search index:', error));

// دالة البحث
function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';  // تفريغ النتائج السابقة

    // البحث باستخدام Fuse.js
    const results = window.fuse.search(query);

    // عرض النتائج
    results.forEach(result => {
        const page = result.item;
        const resultItem = document.createElement('p');
        resultItem.textContent = page.title;
        resultItem.onclick = () => {
            window.location.href = page.url; // الانتقال إلى الصفحة عند النقر
        };
        resultsContainer.appendChild(resultItem);
    });

    // إظهار أو إخفاء نتائج البحث
    resultsContainer.style.display = results.length > 0 ? 'block' : 'none';
}

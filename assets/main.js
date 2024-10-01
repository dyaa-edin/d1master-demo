    // تعطيل التمرير عند بدء الـ Preloader
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // إخفاء الـ Preloader وإعادة التمرير بعد تحميل المحتوى
    window.addEventListener("load", () => {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
            
            // إعادة التمرير
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';

            // عرض المحتوى المخفي مع الأنيميشن عند تحميل الصفحة
            const elements = document.querySelectorAll('.animate-on-load');
            elements.forEach(element => {
                element.style.display = 'block';
                element.classList.add('animate__animated', 'animate__bounceInLeft');
            });

            // بعد انتهاء الـ Preloader، تفعيل الأنيميشن عند التمرير
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'visible'); 
                        observer.unobserve(entry.target); // إيقاف المراقبة بعد تشغيل الأنيميشن
                    }
                });
            });

        }, 1500); // تأخير زمني 1.5 ثانية لعرض الـ Preloader
    });

    /*=============== DARK LIGHT THEME ===============*/ 
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-fill';

    // التحقق من التفضيلات السابقة للمستخدم
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme);
    }

    // التبديل بين الثيمات
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });

    /*=============== SHOW SIDEBAR ===============*/
    const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
      const toggle = document.getElementById(toggleId),
            sidebar = document.getElementById(sidebarId),
            header = document.getElementById(headerId),
            main = document.getElementById(mainId);

      if (toggle && sidebar && header && main) {
        toggle.addEventListener('click', () => {
          sidebar.classList.toggle('show-sidebar');
          header.classList.toggle('left-pd');
          main.classList.toggle('left-pd');
        });
      }
    };
    showSidebar('header-toggle', 'sidebar', 'header', 'main');

    // التعامل مع زر الهامبرجر والأزرار الإضافية
    const toggleButton = document.getElementById('header-toggle');
    const openSidebarButton = document.getElementById('open-sidebar-btn');
    const newOpenSidebarButton = document.getElementById('open-sidebar-btn2');

    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('open');
    });

    const toggleSidebar = () => {
      if (!sidebar.classList.contains('show-sidebar')) {
        toggleButton.click();
      }
    };

    openSidebarButton.addEventListener('click', toggleSidebar);
    newOpenSidebarButton.addEventListener('click', toggleSidebar);


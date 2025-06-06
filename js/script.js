// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('Seed Networks 网站已加载');
    
    // 导航功能
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
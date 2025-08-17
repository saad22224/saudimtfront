// Language Management
let currentLanguage = 'ar';

const translations = {
    ar: {
        // Navigation
        home: 'الرئيسية',
        about: 'من نحن',
        conference: 'المؤتمر',
        sponsors: 'الشركاء والرعاة',
        media: 'الإعلام',
        hospitality: 'الضيافة',
        contact: 'اتصل بنا',
        
        // About submenu
        aboutAssociation: 'عن الجمعية',
        aboutTaif: 'عن الطائف',
        aboutConference: 'عن المؤتمر',
        committee: 'اللجنة العلمية',
        
        // Conference submenu
        program: 'برنامج المؤتمر',
        speakers: 'المتحدثون',
        attendees: 'من يجب أن يحضر',
        registration: 'سجل الآن',
        
        // Sponsors submenu
        sponsorsList: 'الرعاة',
        sponsorship: 'احجز رعايتك',
        
        // Media submenu
        mediaCoverage: 'تغطية إعلامية',
        exhibition: 'المعرض',
        
        // Hospitality submenu
        accommodation: 'الإقامة',
        visa: 'متطلبات التأشيرة',
        flights: 'الرحلات الجوية',
        
        // Hero section
        // heroTitle: 'المؤتمر السنوي للسياحة العلاجية',
        heroSubtitle: 'نحو مستقبل أفضل للسياحة العلاجية في المملكة العربية السعودية',
        july2025: 'يوليو 2025',
        taifSaudi: 'الطائف، المملكة العربية السعودية',
        participants: 'أكثر من 500 مشارك',
        registerNow: 'سجل الآن',
        learnMore: 'تعرف على المزيد',
        
        // About section
        aboutUs: 'من نحن',
        vision: 'رؤيتنا',
        mission: 'رسالتنا',
        values: 'قيمنا',
        impact: 'تأثيرنا',
        
        // Stats
        days: 'أيام',
        participant: 'مشارك',
        speaker: 'متحدث',
        session: 'جلسة'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About Us',
        conference: 'Conference',
        sponsors: 'Partners & Sponsors',
        media: 'Media',
        hospitality: 'Hospitality',
        contact: 'Contact Us',
        
        // About submenu
        aboutAssociation: 'About Association',
        aboutTaif: 'About Taif',
        aboutConference: 'About Conference',
        committee: 'Scientific Committee',
        
        // Conference submenu
        program: 'Conference Program',
        speakers: 'Speakers',
        attendees: 'Who Should Attend',
        registration: 'Register Now',
        
        // Sponsors submenu
        sponsorsList: 'Sponsors',
        sponsorship: 'Book Your Sponsorship',
        
        // Media submenu
        mediaCoverage: 'Media Coverage',
        exhibition: 'Exhibition',
        
        // Hospitality submenu
        accommodation: 'Accommodation',
        visa: 'Visa Requirements',
        flights: 'Flights',
        
        // Hero section
        heroTitle: 'Annual Medical Tourism Conference',
        heroSubtitle: 'Towards a Better Future for Medical Tourism in Saudi Arabia',
        july2025: 'July 2025',
        taifSaudi: 'Taif, Saudi Arabia',
        participants: 'More than 500 participants',
        registerNow: 'Register Now',
        learnMore: 'Learn More',
        
        // About section
        aboutUs: 'About Us',
        vision: 'Our Vision',
        mission: 'Our Mission',
        values: 'Our Values',
        impact: 'Our Impact',
        
        // Stats
        days: 'Days',
        participant: 'Participants',
        speaker: 'Speakers',
        session: 'Sessions'
    }
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll to top button
    createScrollToTopButton();
    
    // Initialize form handlers
    initializeForms();
    
    // Initialize animations
    initializeAnimations();
    
    // Set default language
    switchLanguage(currentLanguage);
    
    // Show home page by default
    showPage('home');
});

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    const html = document.documentElement;
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="switchLanguage('${lang}')"]`).classList.add('active');
    
    // Update navigation text
    updateNavigationText(lang);
    
    // Update page content
    updatePageContent(lang);
}

function updateNavigationText(lang) {
    const t = translations[lang];
    
    // Update main navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        if (key && t[key]) {
            link.textContent = t[key];
        }
    });
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && t.heroTitle) {
        heroTitle.textContent = t.heroTitle;
    }
    if (heroSubtitle && t.heroSubtitle) {
        heroSubtitle.textContent = t.heroSubtitle;
    }
    
    // Update buttons
    const buttons = document.querySelectorAll('[data-text-key]');
    buttons.forEach(button => {
        const key = button.getAttribute('data-text-key');
        if (key && t[key]) {
            button.textContent = t[key];
        }
    });
}

// Page navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        
        // Update active nav link
        updateActiveNavLink(pageId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Trigger animations
        triggerPageAnimations(selectedPage);
    }
}

function updateActiveNavLink(pageId) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    const pageMap = {
        'home': 'الرئيسية',
        'about': 'من نحن',
        'taif': 'من نحن',
        'conference-about': 'من نحن',
        'committee': 'من نحن',
        'program': 'المؤتمر',
        'speakers': 'المؤتمر',
        'attendees': 'المؤتمر',
        'registration': 'المؤتمر',
        'sponsors': 'الشركاء والرعاة',
        'sponsorship': 'الشركاء والرعاة',
        'media': 'الإعلام',
        'exhibition': 'الإعلام',
        'accommodation': 'الضيافة',
        'visa': 'الضيافة',
        'flights': 'الضيافة',
        'contact': 'اتصل بنا'
    };
    
    const mainSection = pageMap[pageId];
    if (mainSection) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.textContent.includes(mainSection)) {
                link.classList.add('active');
            }
        });
    }
}

// Animation functionality
function initializeAnimations() {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements for animation
    document.querySelectorAll('.about-card, .stat-card, .content-card').forEach(el => {
        observer.observe(el);
    });
}

function triggerPageAnimations(page) {
    // Add animation classes to page elements
    const animatedElements = page.querySelectorAll('.about-card, .stat-card, .content-card, .expert-card, .speaker-card');
    
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-slide-up');
        }, index * 100);
    });
}

// Form handling
function initializeForms() {
    // Registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }
    
    // Contact form
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactSubmit);
    });
}

function handleRegistrationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'attendeeType'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
        return;
    }
    
    // Validate terms acceptance
    if (!data.terms) {
        showNotification('يجب الموافقة على الشروط والأحكام', 'error');
        return;
    }
    
    // Show loading
    const submitBtn = e.target.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('تم إرسال طلب التسجيل بنجاح! سنتواصل معكم قريباً.', 'success');
        e.target.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required fields
    const requiredFields = ['contactName', 'contactEmail', 'contactMessage'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // Show loading
    const submitBtn = e.target.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('تم إرسال رسالتكم بنجاح! سنرد عليكم في أقرب وقت.', 'success');
        e.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    const styles = `
        .notification {
            position: fixed;
            top: 120px;
            right: 30px;
            z-index: 10000;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            border-left: 4px solid;
            min-width: 350px;
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success {
            border-left-color: #10B981;
        }
        
        .notification-error {
            border-left-color: #EF4444;
        }
        
        .notification-info {
            border-left-color: #3B82F6;
        }
        
        .notification-content {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .notification-content i:first-child {
            font-size: 1.2rem;
        }
        
        .notification-success .notification-content i:first-child {
            color: #10B981;
        }
        
        .notification-error .notification-content i:first-child {
            color: #EF4444;
        }
        
        .notification-info .notification-content i:first-child {
            color: #3B82F6;
        }
        
        .notification-content span {
            flex: 1;
            color: #333;
            font-weight: 500;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
            font-size: 1rem;
            padding: 5px;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            background: #f0f0f0;
            color: #333;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    // Add styles to head if not already present
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    // Add to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Dropdown functionality for mobile
function setupMobileDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'البحث...';
    searchInput.className = 'search-input';
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchContent(query);
    });
}

function searchContent(query) {
    if (query.length < 2) return;
    
    const results = [];
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        const content = page.textContent.toLowerCase();
        if (content.includes(query)) {
            results.push({
                id: page.id,
                title: page.querySelector('h1')?.textContent || 'صفحة',
                snippet: extractSnippet(content, query)
            });
        }
    });
    
    displaySearchResults(results);
}

function extractSnippet(content, query) {
    const index = content.indexOf(query);
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + 150);
    return content.substring(start, end) + '...';
}

function displaySearchResults(results) {
    console.log('Search results:', results);
    // Implementation for search results display
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization
// const optimizedScroll = throttle(() => {
//     // Handle scroll events efficiently
//     const scrolled = window.pageYOffset;
//     const navbar = document.querySelector('.navbar');
    
//     if (scrolled > 100) {
//         navbar.style.background = 'linear-gradient(135deg, rgba(45, 143, 143, 0.95) 0%, rgba(30, 107, 107, 0.95) 100%)';
//         navbar.style.backdropFilter = 'blur(20px)';
//     } else {
//         navbar.style.background = 'linear-gradient(135deg, #2D8F8F 0%, #1e6b6b 100%)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     }
// }, 16);

window.addEventListener('scroll', optimizedScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Could implement user-friendly error messages here
});

// Initialize responsive behavior
window.addEventListener('resize', debounce(() => {
    // Handle responsive layout changes
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile optimizations
        setupMobileDropdowns();
    }
}, 250));

// Accessibility improvements
function initializeAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add focus indicators for keyboard users
    const focusableElements = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    document.querySelectorAll(focusableElements).forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid #2D8F8F';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = 'none';
        });
    });
}

// Initialize accessibility on load
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for global access
window.showPage = showPage;
window.switchLanguage = switchLanguage;
window.showNotification = showNotification;
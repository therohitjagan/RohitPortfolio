import portfolioData from './data.js';

class PortfolioApp {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        // Wait for DOM content to be loaded before initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        // Initialize only if elements exist
        this.renderEducation();
        this.renderProjects();
        this.renderSkills();
        this.setupScrollAnimation();
        this.setupMobileNav();
        this.setupThemeToggle();
        this.setupProjectFilters();
    }

    renderEducation() {
        const educationContainer = document.querySelector('#education .max-w-4xl');
        if (!educationContainer) return;

        educationContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="glass rounded-xl p-6 mb-6 fade-in hover:scale-105 transition-transform">
                <div class="flex items-center mb-4">
                    <div class="text-3xl text-indigo-600 dark:text-indigo-400 mr-4">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold gradient-text">${edu.degree}</h3>
                        <p class="text-gray-600 dark:text-gray-300">${edu.institution}</p>
                    </div>
                </div>
                <div class="ml-12">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${edu.description}</p>
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <i class="far fa-calendar-alt mr-2"></i>
                        <span>${edu.years}</span>
                    </div>
                    <div class="mt-4">
                        <h4 class="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                            Key Achievements
                        </h4>
                        <ul class="space-y-2">
                            ${edu.achievements.map(achievement => `
                                <li class="flex items-center">
                                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                    <span class="text-gray-600 dark:text-gray-300">${achievement}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProjects() {
        const projectsContainer = document.querySelector('#projects .grid');
        if (!projectsContainer) return;

        projectsContainer.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card rounded-xl overflow-hidden fade-in glass" 
                 data-featured="${project.featured}">
                <div class="relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-56 object-cover transition-transform duration-500">
                    <div class="absolute top-0 right-0 p-4">
                        ${project.featured ? 
                            `<span class="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                                <i class="fas fa-star mr-1"></i>Featured
                            </span>` : ''
                        }
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-3 gradient-text">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 
                                       dark:text-indigo-300 rounded-full text-sm hover:scale-105 
                                       transition-transform cursor-default">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <a href="${project.demo}" class="text-indigo-600 hover:text-indigo-800 
                                                       transition-colors duration-300">
                            <i class="fas fa-play-circle mr-2"></i>Live Demo
                        </a>
                        <a href="${project.github}" class="text-gray-600 hover:text-gray-800 
                                                         transition-colors duration-300">
                            <i class="fab fa-github mr-2"></i>Source Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderSkills() {
        const skillsContainer = document.querySelector('#skills .grid');
        if (!skillsContainer) return;

        const skillIcons = {
            'Frontend': 'fas fa-code',
            'Backend': 'fas fa-server',
            'Database': 'fas fa-database',
            'DevOps': 'fas fa-cloud',
            'Mobile': 'fas fa-mobile-alt',
            'UI/UX': 'fas fa-paint-brush',
            'Testing': 'fas fa-vial',
            'Security': 'fas fa-shield-alt'
        };

        skillsContainer.innerHTML = portfolioData.skills.map(skill => `
            <div class="skill-card rounded-xl p-6 text-center fade-in floating glass">
                <div class="skill-icon text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
                    <i class="${skillIcons[skill.category] || 'fas fa-star'}"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 gradient-text">${skill.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${skill.description}</p>
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div class="text-xs font-semibold inline-block py-1 px-2 uppercase 
                                    rounded-full text-indigo-600 bg-indigo-200">
                            Proficiency
                        </div>
                        <div class="text-xs font-semibold inline-block text-indigo-600">
                            ${skill.proficiency}%
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div style="width:${skill.proficiency}%" 
                             class="shadow-none flex flex-col text-center whitespace-nowrap 
                                    text-white justify-center bg-indigo-500">
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap gap-2 justify-center">
                    ${skill.tools.map(tool => `
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            ${tool}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    setupScrollAnimation() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(element => {
            observer.observe(element);
        });
    }

    setupMobileNav() {
        const nav = document.querySelector('nav .container > div');
        if (!nav) return;

        // Create mobile menu button if it doesn't exist
        if (!nav.querySelector('.mobile-menu-btn')) {
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn md:hidden p-2 text-gray-600 dark:text-gray-300';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            nav.appendChild(mobileMenuBtn);

            const mobileMenu = nav.querySelector('.hidden');
            if (mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                    mobileMenu.classList.toggle('flex');
                    mobileMenu.classList.toggle('flex-col');
                    mobileMenu.classList.toggle('absolute');
                    mobileMenu.classList.toggle('top-full');
                    mobileMenu.classList.toggle('left-0');
                    mobileMenu.classList.toggle('right-0');
                    mobileMenu.classList.toggle('bg-white');
                    mobileMenu.classList.toggle('dark:bg-gray-800');
                    mobileMenu.classList.toggle('shadow-md');
                });
            }
        }
    }

    setupThemeToggle() {
        let themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) {
            themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            document.body.appendChild(themeToggle);
        }

        themeToggle.innerHTML = this.theme === 'dark' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';

        document.documentElement.setAttribute('data-theme', this.theme);

        themeToggle.addEventListener('click', () => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);
            themeToggle.innerHTML = this.theme === 'dark' ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        });
    }

    setupProjectFilters() {
        const projectsSection = document.querySelector('#projects');
        if (!projectsSection) return;

        const filterContainer = document.createElement('div');
        filterContainer.className = 'flex justify-center gap-4 mb-8';
        filterContainer.innerHTML = `
            <button class="px-4 py-2 rounded-full bg-indigo-600 text-white active" data-filter="all">
                <i class="fas fa-th-large mr-2"></i>All
            </button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300" data-filter="featured">
                <i class="fas fa-star mr-2"></i>Featured
            </button>
        `;

        const projectsGrid = projectsSection.querySelector('.grid');
        if (projectsGrid) {
            projectsGrid.parentNode.insertBefore(filterContainer, projectsGrid);

            filterContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    // Update active state
                    filterContainer.querySelectorAll('button').forEach(btn => {
                        btn.classList.remove('bg-indigo-600', 'text-white');
                        btn.classList.add('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
                    });
                    e.target.classList.remove('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
                    e.target.classList.add('bg-indigo-600', 'text-white');

                    // Filter projects
                    const filter = e.target.dataset.filter;
                    const projects = document.querySelectorAll('.project-card');
                    projects.forEach(project => {
                        if (filter === 'all' || project.dataset.featured === (filter === 'featured').toString()) {
                            project.style.display = 'block';
                        } else {
                            project.style.display = 'none';
                        }
                    });
                }
            });
        }
    }
}

export default PortfolioApp;
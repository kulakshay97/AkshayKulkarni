// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Populate Content from data.js
    if (typeof websiteData !== 'undefined') {
        renderHero();
        renderStats();
        renderAbout();
        renderSkills();
        renderProjects();
        renderExperience();
        renderContact();
    }

    function renderHero() {
        const heroContent = document.getElementById('hero-content');
        const heroImageContainer = document.querySelector('.hero-image');

        if (heroContent) {
            heroContent.innerHTML = `
                <span class="greeting">${websiteData.hero.greeting}</span>
                <h1>${websiteData.hero.name}</h1>
                <p class="tagline">${websiteData.hero.tagline}</p>
                <div class="hero-btns">
                    <a href="${websiteData.hero.btnPrimary.link}" class="btn-primary">${websiteData.hero.btnPrimary.text}</a>
                    <a href="${websiteData.hero.btnSecondary.link}" class="btn-secondary">${websiteData.hero.btnSecondary.text}</a>
                </div>
            `;
        }

        if (heroImageContainer && websiteData.hero.profileImage) {
            heroImageContainer.innerHTML = `
                <div class="img-container">
                    <img src="${websiteData.hero.profileImage}" alt="${websiteData.hero.name}" class="profile-img">
                </div>
            `;
        }
    }

    function renderStats() {
        const heroStats = document.getElementById('hero-stats');
        if (heroStats && websiteData.about.stats) {
            heroStats.innerHTML = websiteData.about.stats.map((stat, index) => `
                <div class="stat-item fade-in-up" style="animation-delay: ${0.5 + (index * 0.1)}s">
                    <h3>${stat.value}</h3>
                    <p>${stat.label}</p>
                </div>
            `).join('');
        }
    }

    function renderAbout() {
        const aboutTitle = document.getElementById('about-title');
        const aboutContent = document.getElementById('about-content');

        if (aboutTitle) aboutTitle.innerText = websiteData.about.title;

        if (aboutContent) {
            aboutContent.innerHTML = `
                <p>${websiteData.about.bio}</p>
            `;
        }
    }

    function renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        if (skillsGrid) {
            skillsGrid.className = 'skills-marquee';

            // Split skills into 3 chunks
            const chunkSize = Math.ceil(websiteData.skills.length / 3);
            const rows = [
                websiteData.skills.slice(0, chunkSize),
                websiteData.skills.slice(chunkSize, chunkSize * 2),
                websiteData.skills.slice(chunkSize * 2)
            ];

            let allRowsHtml = '';

            rows.forEach((rowSkills, rowIndex) => {
                // Duplicate skills multiple times to ensure enough content for 6+ visible and smooth loop
                // 4x duplication should be plenty
                const skillsList = [...rowSkills, ...rowSkills, ...rowSkills, ...rowSkills];

                const trackHtml = skillsList.map((skill) => {
                    const iconHtml = skill.image
                        ? `<img src="${skill.image}" alt="${skill.name}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 0.5rem;">`
                        : `<i class="${skill.icon}" style="color: ${skill.color || 'var(--primary-color)'}; font-size: 2rem; margin-bottom: 0.5rem;"></i>`;

                    return `
                    <div class="skill-card" style="--skill-color: ${skill.color || 'var(--primary-color)'}">
                        ${iconHtml}
                        <h3>${skill.name}</h3>
                    </div>
                `;
                }).join('');

                // Add animation delay/duration variation for visual interest
                const duration = 30 + (rowIndex * 5); // 30s, 35s, 40s

                allRowsHtml += `<div class="skills-track" style="animation-duration: ${duration}s">${trackHtml}</div>`;
            });

            skillsGrid.innerHTML = allRowsHtml;
        }
    }

    function renderProjects() {
        const track = document.getElementById('projects-track');
        const carouselNav = document.getElementById('carousel-nav');
        const carouselContainer = document.querySelector('.carousel-container');

        if (!track || !websiteData.projects) return;

        // Clear existing content
        track.innerHTML = '';
        carouselNav.innerHTML = '';

        websiteData.projects.forEach((project, index) => {
            // Create Slide
            const slide = document.createElement('li');
            slide.classList.add('carousel-slide');

            const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

            slide.innerHTML = `
                <div class="project-card">
                    <div class="project-img">
                        ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : `<div class="img-placeholder-rect"></div>`}
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <div class="tags">${tagsHtml}</div>
                        <p>${project.description}</p>
                        ${project.link ? `<a href="${project.link}" class="btn-secondary">View Project</a>` : ''}
                    </div>
                </div>
            `;

            track.appendChild(slide);

            // Create Dot
            const dot = document.createElement('button');
            dot.classList.add('carousel-indicator');
            if (index === 0) dot.classList.add('current-slide');
            dot.addEventListener('click', () => {
                moveToSlide(track, currentSlide, slide);
                updateDots(currentDot, dot);
                currentSlide = slide;
                currentDot = dot;
                startAutoPlay(); // Reset timer on interaction
            });
            carouselNav.appendChild(dot);
        });

        // Carousel Logic
        const slides = Array.from(track.children);
        const dots = Array.from(carouselNav.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');

        let currentSlide = slides[0];
        let currentDot = dots[0];
        let autoPlayInterval;

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.offsetLeft + 'px)';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        const updateDots = (currentDot, targetDot) => {
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
        };

        const moveToNextSlide = () => {
            const currentSlideIndex = slides.indexOf(currentSlide);
            const nextSlide = slides[currentSlideIndex + 1] || slides[0];
            const nextDot = dots[currentSlideIndex + 1] || dots[0];

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            currentSlide = nextSlide;
            currentDot = nextDot;
        };

        const moveToPrevSlide = () => {
            const currentSlideIndex = slides.indexOf(currentSlide);
            const prevSlide = slides[currentSlideIndex - 1] || slides[slides.length - 1];
            const prevDot = dots[currentSlideIndex - 1] || dots[dots.length - 1];

            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            currentSlide = prevSlide;
            currentDot = prevDot;
        };

        const startAutoPlay = () => {
            stopAutoPlay(); // Clear any existing interval
            autoPlayInterval = setInterval(moveToNextSlide, 5000); // 5 seconds
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        nextButton.addEventListener('click', () => {
            moveToNextSlide();
            startAutoPlay(); // Reset timer on manual interaction
        });

        prevButton.addEventListener('click', () => {
            moveToPrevSlide();
            startAutoPlay(); // Reset timer on manual interaction
        });

        // Pause on hover
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }

        // Start Auto-play
        startAutoPlay();
    }

    function renderExperience() {
        const experienceList = document.getElementById('experience-list');
        const educationList = document.getElementById('education-list');

        if (experienceList && websiteData.experience) {
            experienceList.innerHTML = websiteData.experience.map(job => `
                <div class="timeline-item fade-in-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${job.date}</div>
                    <div class="timeline-content">
                        <h3>${job.role}</h3>
                        <h4>${job.company}</h4>
                        <div class="job-description">${job.description}</div>
                    </div>
                </div>
            `).join('');
        }

        if (educationList && websiteData.education) {
            educationList.innerHTML = websiteData.education.map(edu => `
                <div class="timeline-item fade-in-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${edu.date}</div>
                    <div class="timeline-content">
                        <h3>${edu.degree}</h3>
                        <h4>${edu.school}</h4>
                        <div class="job-description">${edu.description}</div>
                    </div>
                </div>
            `).join('');
        }

        // Tab Switching Logic
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active to clicked
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
    }

    function renderContact() {
        const contactTitle = document.getElementById('contact-title');
        const contactInfo = document.getElementById('contact-info');

        if (contactTitle) contactTitle.innerText = websiteData.contact.title;

        if (contactInfo) {
            const socialsHtml = websiteData.contact.socials.map(social => `
                <a href="${social.link}" target="_blank"><i class="${social.icon}"></i></a>
            `).join('');

            contactInfo.innerHTML = `
                <h3>${websiteData.contact.subtitle}</h3>
                <p>${websiteData.contact.text}</p>
                <div class="contact-details">
                    <div class="detail-item">
                        <i class="fa-solid fa-envelope"></i>
                        <span>${websiteData.contact.email}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${websiteData.contact.location}</span>
                    </div>
                </div>
                <div class="social-links">
                    ${socialsHtml}
                </div>
            `;
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

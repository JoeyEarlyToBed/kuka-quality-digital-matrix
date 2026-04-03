// ==================================
// KUKA Quality Digital Matrix
// Interactive JavaScript
// ==================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =============================
    // 1. Smooth Scroll for Navigation
    // =============================
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // =============================
    // 2. Orchestrator Tab Switching
    // =============================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const orchPanels = document.querySelectorAll('.orch-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all panels
            orchPanels.forEach(panel => {
                panel.classList.remove('active');
            });
            
            // Show target panel
            const targetPanel = document.querySelector(`[data-panel="${targetTab}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // =============================
    // 3. Process Card Hover Animation
    // =============================
    const processCards = document.querySelectorAll('.process-card');
    
    processCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // =============================
    // 4. Architecture Layer Scroll Animation
    // =============================
    const archLayers = document.querySelectorAll('.arch-layer');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const layerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);
    
    archLayers.forEach((layer, index) => {
        layer.style.opacity = '0';
        layer.style.transform = 'translateX(-50px)';
        layer.style.transition = `all 0.6s ease ${index * 0.1}s`;
        layerObserver.observe(layer);
    });
    
    // =============================
    // 5. Timeline Item Animation
    // =============================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        timelineObserver.observe(item);
    });
    
    // =============================
    // 6. Workflow Step Hover Effect
    // =============================
    const workflowSteps = document.querySelectorAll('.workflow-step');
    
    workflowSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            // Highlight this step
            this.style.borderColor = 'var(--kuka-orange)';
            this.style.boxShadow = '0 10px 30px rgba(255, 102, 0, 0.3)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--industrial-gray-light)';
            this.style.boxShadow = 'none';
        });
    });
    
    // =============================
    // 7. Navbar Background on Scroll
    // =============================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // =============================
    // 8. Section Active State Detection
    // =============================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // =============================
    // 9. Stats Counter Animation
    // =============================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const finalText = stat.textContent;
            const isNumeric = /^\d+$/.test(finalText);
            
            if (isNumeric) {
                const finalNumber = parseInt(finalText);
                let currentNumber = 0;
                const increment = Math.ceil(finalNumber / 30);
                
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        stat.textContent = finalNumber;
                        clearInterval(timer);
                    } else {
                        stat.textContent = currentNumber;
                    }
                }, 50);
            }
        });
    }
    
    // =============================
    // 10. Value Card Pulse Animation
    // =============================
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s ease-in-out infinite';
            }
        });
    }, { threshold: 0.5 });
    
    valueCards.forEach(card => {
        valueObserver.observe(card);
    });
    
    // Add pulse keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .active-link {
            color: var(--kuka-orange) !important;
        }
        
        .active-link::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);
    
    // =============================
    // 11. Smooth Reveal for Comparison Table
    // =============================
    const comparisonTable = document.querySelector('.comparison-table');
    
    if (comparisonTable) {
        const tableObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const rows = entry.target.querySelectorAll('tr');
                    rows.forEach((row, index) => {
                        setTimeout(() => {
                            row.style.opacity = '1';
                            row.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        tableObserver.observe(comparisonTable);
        
        // Initial state
        const rows = comparisonTable.querySelectorAll('tr');
        rows.forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'all 0.5s ease';
        });
    }
    
    // =============================
    // 12. Mobile Menu Toggle (if needed)
    // =============================
    const createMobileMenuToggle = () => {
        if (window.innerWidth <= 768) {
            const navMenu = document.querySelector('.nav-menu');
            const navbar = document.querySelector('.navbar .container');
            
            // Check if toggle button already exists
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'mobile-menu-toggle';
                toggleBtn.innerHTML = '☰';
                toggleBtn.style.cssText = `
                    background: var(--kuka-orange);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-size: 1.5rem;
                    border-radius: 6px;
                    cursor: pointer;
                `;
                
                toggleBtn.addEventListener('click', () => {
                    navMenu.classList.toggle('mobile-active');
                });
                
                navbar.appendChild(toggleBtn);
                
                // Add mobile menu styles
                const mobileStyle = document.createElement('style');
                mobileStyle.textContent = `
                    @media (max-width: 768px) {
                        .nav-menu {
                            display: none;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background: var(--bg-secondary);
                            padding: var(--spacing-sm);
                            flex-direction: column;
                        }
                        
                        .nav-menu.mobile-active {
                            display: flex;
                        }
                    }
                `;
                document.head.appendChild(mobileStyle);
            }
        }
    };
    
    createMobileMenuToggle();
    window.addEventListener('resize', createMobileMenuToggle);
    
    // =============================
    // 13. Console Welcome Message
    // =============================
    console.log('%c🤖 KUKA 质量数字员工矩阵', 'color: #FF6600; font-size: 20px; font-weight: bold;');
    console.log('%c基于 Harness 工程理念设计', 'color: #0066CC; font-size: 14px;');
    console.log('%c5大业务场景 × 15+ AI Agent = 24/7质量守护', 'color: #CBD5E1; font-size: 12px;');
    
        // =============================
    // End of Interactive Script
    // =============================
    
    // =============================
    // 14. Dynamic Metrics Charts
    // =============================
    function createMiniChart(canvasId, data, color) {
        const canvas = document.querySelector(`#${canvasId} canvas`);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.offsetWidth * 2;
        const height = canvas.height = canvas.offsetHeight * 2;
        
        ctx.scale(2, 2);
        const w = width / 2;
        const h = height / 2;
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, `${color}40`);
        gradient.addColorStop(1, `${color}00`);
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min || 1;
        const step = w / (data.length - 1);
        
        ctx.beginPath();
        data.forEach((value, i) => {
            const x = i * step;
            const y = h - ((value - min) / range) * (h - 20) - 10;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // Fill area under curve
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
    }
    
    // Create charts with sample data
    setTimeout(() => {
        createMiniChart('cq-chart', [18, 15, 20, 12, 14, 10, 12], '#FF6600');
        createMiniChart('sq-chart', [94.5, 95.2, 96.1, 95.8, 96.5, 96.3, 96.8], '#0066CC');
        createMiniChart('dq-chart', [15, 12, 14, 10, 9, 10, 8], '#FF6600');
        createMiniChart('pq-chart', [1.45, 1.52, 1.58, 1.61, 1.65, 1.64, 1.67], '#0066CC');
    }, 500);
    
    // =============================
    // 15. Agent Activity Heatmap
    // =============================
    function generateHeatmap() {
        const heatmapRows = document.querySelectorAll('.heatmap-cells');
        
        heatmapRows.forEach(row => {
            const agent = row.getAttribute('data-agent');
            row.innerHTML = '';
            
            // Generate 24 cells for 24 hours
            for (let i = 0; i < 24; i++) {
                const cell = document.createElement('div');
                cell.className = 'heatmap-cell';
                
                // Simulate activity levels based on agent type
                let level = 0;
                if (agent === 'pq') {
                    // PQ is most active during work hours (8-18)
                    level = (i >= 8 && i <= 18) ? Math.floor(Math.random() * 4) + 2 : Math.floor(Math.random() * 2);
                } else if (agent === 'cq') {
                    // CQ has sporadic activity
                    level = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
                } else if (agent === 'sq') {
                    // SQ active during receiving hours
                    level = (i >= 9 && i <= 15) ? Math.floor(Math.random() * 3) + 1 : 0;
                } else if (agent === 'dq') {
                    // DQ has moderate consistent activity
                    level = Math.floor(Math.random() * 3);
                } else {
                    // External has random activity
                    level = Math.random() > 0.8 ? Math.floor(Math.random() * 3) + 1 : 0;
                }
                
                cell.classList.add(`level-${Math.min(level, 5)}`);
                cell.title = `${23-i}:00 - ${24-i}:00 (${level} 活动)`;
                
                row.appendChild(cell);
            }
        });
    }
    
    generateHeatmap();
    
    // Regenerate heatmap every 30 seconds for demo
    setInterval(generateHeatmap, 30000);
    
    // =============================
    // 16. Real-time Metric Updates
    // =============================
    function updateMetrics() {
        // Simulate real-time data updates
        const metrics = [
            { id: 'cq', trend: '↓ 15%', color: '#22c55e' },
            { id: 'sq', trend: '↑ 3.5%', color: '#22c55e' },
            { id: 'dq', trend: '↓ 22%', color: '#22c55e' },
            { id: 'pq', trend: '↑ 0.15', color: '#22c55e' }
        ];
        
        metrics.forEach(metric => {
            const trendElement = document.querySelector(`#${metric.id}-chart`)
                ?.closest('.metric-card')
                ?.querySelector('.metric-trend');
            
            if (trendElement) {
                trendElement.style.color = metric.color;
            }
        });
    }
    
    updateMetrics();
    setInterval(updateMetrics, 10000);
});


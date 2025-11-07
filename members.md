---
layout: page
title: Laboratory Members
description: "AIoT Laboratory Members"
---

<!-- # Laboratory Members

Meet the researchers and students of AIoT Laboratory. -->

<style>
.members-intro {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 0;
    margin-bottom: 40px;
    border-radius: 10px;
    text-align: center;
}

.members-intro h1 {
    margin-bottom: 15px;
    font-weight: 700;
}

.members-intro p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 0;
}

.member-filters {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.member-filters h3 {
    color: #495057;
    margin-bottom: 15px;
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-tag {
    background-color: white;
    border: 2px solid #e9ecef;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 0.9rem;
    color: #495057;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

.filter-tag:hover,
.filter-tag.active {
    background-color: #667eea;
    border-color: #667eea;
    color: white;
    transform: translateY(-2px);
}

/* メンバーグリッドのスタイル */
.members-section {
    margin-bottom: 50px;
}

.section-title {
    color: #333;
    border-bottom: 3px solid #667eea;
    padding-bottom: 10px;
    margin-bottom: 30px;
    font-weight: 700;
}

.members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.member-card {
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid #f0f0f0;
    position: relative;
}

.member-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.member-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.member-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    border: 4px solid white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    flex-shrink: 0;
}

.member-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.member-info {
    flex: 1;
}

.member-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
}

.member-japanese-name {
    font-size: 1rem;
    color: #666;
    margin-bottom: 8px;
    font-style: italic;
}

.member-role {
    color: #667eea;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 1rem;
}

.member-position {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.4;
}

.member-period {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.member-research {
    color: #666;
    line-height: 1.5;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.member-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.member-tag {
    background: #f8f9fa;
    color: #495057;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid #e9ecef;
}

.member-links {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.member-link {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
    font-size: 0.9rem;
}

.member-link:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
}

.member-details {
    border-top: 1px solid #f0f0f0;
    padding-top: 15px;
    margin-top: 15px;
}

.detail-section {
    margin-bottom: 15px;
}

.detail-section h4 {
    color: #333;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 600;
}

.detail-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.detail-list li {
    padding: 2px 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
}

/* 研究室統計 */
.lab-stats {
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 40px;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-top: 20px;
}

.stat-item {
    padding: 20px;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #667eea;
    display: block;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 1rem;
    color: #6c757d;
    font-weight: 500;
}

@media (max-width: 768px) {
    .members-intro {
        padding: 30px 0;
    }
    
    .members-intro h1 {
        font-size: 2rem;
    }
    
    .members-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .member-card {
        padding: 20px;
    }
    
    .member-header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .filter-tags {
        justify-content: center;
    }
}
</style>

<div class="members-intro">
    <h1>Laboratory Members</h1>
    <p>Meet the researchers and students of AIoT Laboratory</p>
</div>

<!-- 教員メンバー -->
<div class="members-section">
    <h2 class="section-title">👨‍🏫 Faculty Members</h2>
    <div class="members-grid">
        {% for member in site.data.members.faculty %}
        <div class="member-card">
            <div class="member-header">
                <div class="member-avatar">
                    {% if member.avatar and member.avatar != "" %}
                        <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
                    {% else %}
                        👨‍🏫
                    {% endif %}
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    {% if member.japanese_name %}
                    <div class="member-japanese-name">{{ member.japanese_name }}</div>
                    {% endif %}
                    <div class="member-role">{{ member.role }}</div>
                    {% if member.position %}
                    <div class="member-position">{{ member.position }}</div>
                    {% endif %}
                    <div class="member-period">{{ member.period }}</div>
                </div>
            </div>
            
            <div class="member-research">
                <strong>Research:</strong> {{ member.research }}
            </div>
            
            {% if member.tags %}
            <div class="member-tags">
                {% for tag in member.tags %}
                <span class="member-tag">{{ tag }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            <div class="member-links">
                {% if member.email %}
                <a href="mailto:{{ member.email }}" class="member-link" title="Email">📧</a>
                {% endif %}
                {% if member.researchmap and member.researchmap != "#" %}
                <a href="{{ member.researchmap }}" class="member-link" title="ResearchMap" target="_blank">🔬</a>
                {% endif %}
                {% if member.website and member.website != "#" %}
                <a href="{{ member.website }}" class="member-link" title="Website" target="_blank">🌐</a>
                {% endif %}
            </div>
            
            <div class="member-details">
                {% if member.education %}
                <div class="detail-section">
                    <h4>Education</h4>
                    <ul class="detail-list">
                        {% for edu in member.education %}
                        <li>{{ edu }}</li>
                        {% endfor %}
                    </ul>
                </div>
                {% endif %}
                
                {% if member.achievements %}
                <div class="detail-section">
                    <h4>Achievements</h4>
                    <ul class="detail-list">
                        {% for achievement in member.achievements %}
                        <li>{{ achievement }}</li>
                        {% endfor %}
                    </ul>
                </div>
                {% endif %}
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<!-- 博士課程学生 -->
{% if site.data.members.phd_students %}
<div class="members-section">
    <h2 class="section-title">👨‍🎓 PhD Students</h2>
    <div class="members-grid">
        {% for member in site.data.members.phd_students %}
        <div class="member-card">
            <div class="member-header">
                <div class="member-avatar">
                    {% if member.avatar and member.avatar != "" %}
                        <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
                    {% else %}
                        👨‍🎓
                    {% endif %}
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    {% if member.japanese_name %}
                    <div class="member-japanese-name">{{ member.japanese_name }}</div>
                    {% endif %}
                    <div class="member-role">{{ member.role }}</div>
                    <div class="member-period">{{ member.period }}</div>
                </div>
            </div>
            
            <div class="member-research">
                <strong>Research:</strong> {{ member.research }}
            </div>
            
            {% if member.tags %}
            <div class="member-tags">
                {% for tag in member.tags %}
                <span class="member-tag">{{ tag }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            {% if member.email or member.achievements %}
            <div class="member-details">
                {% if member.email %}
                <div class="member-links">
                    <a href="mailto:{{ member.email }}" class="member-link" title="Email">📧</a>
                </div>
                {% endif %}
                
                {% if member.achievements %}
                <div class="detail-section">
                    <h4>Achievements</h4>
                    <ul class="detail-list">
                        {% for achievement in member.achievements %}
                        <li>{{ achievement }}</li>
                        {% endfor %}
                    </ul>
                </div>
                {% endif %}
            </div>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</div>
{% endif %}

<!-- 修士課程学生 -->
{% if site.data.members.master_students %}
<div class="members-section">
    <h2 class="section-title">👩‍🎓 Master Students</h2>
    <div class="members-grid">
        {% for member in site.data.members.master_students %}
        <div class="member-card">
            <div class="member-header">
                <div class="member-avatar">
                    {% if member.avatar and member.avatar != "" %}
                        <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
                    {% else %}
                        👩‍🎓
                    {% endif %}
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    {% if member.japanese_name %}
                    <div class="member-japanese-name">{{ member.japanese_name }}</div>
                    {% endif %}
                    <div class="member-role">{{ member.role }}</div>
                    <div class="member-period">{{ member.period }}</div>
                </div>
            </div>
            
            <div class="member-research">
                <strong>Research:</strong> {{ member.research }}
            </div>
            
            {% if member.tags %}
            <div class="member-tags">
                {% for tag in member.tags %}
                <span class="member-tag">{{ tag }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            {% if member.email or member.achievements %}
            <div class="member-details">
                {% if member.email %}
                <div class="member-links">
                    <a href="mailto:{{ member.email }}" class="member-link" title="Email">📧</a>
                </div>
                {% endif %}
                
                {% if member.achievements %}
                <div class="detail-section">
                    <h4>Achievements</h4>
                    <ul class="detail-list">
                        {% for achievement in member.achievements %}
                        <li>{{ achievement }}</li>
                        {% endfor %}
                    </ul>
                </div>
                {% endif %}
            </div>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</div>
{% endif %}

<!-- 学部生 -->
{% if site.data.members.bachelor_students %}
<div class="members-section">
    <h2 class="section-title">👨‍💻 Undergraduate Students</h2>
    <div class="members-grid">
        {% for member in site.data.members.bachelor_students %}
        <div class="member-card">
            <div class="member-header">
                <div class="member-avatar">
                    {% if member.avatar and member.avatar != "" %}
                        <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
                    {% else %}
                        👨‍💻
                    {% endif %}
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    {% if member.japanese_name %}
                    <div class="member-japanese-name">{{ member.japanese_name }}</div>
                    {% endif %}
                    <div class="member-role">{{ member.role }}</div>
                    <div class="member-period">{{ member.period }}</div>
                </div>
            </div>
            
            <div class="member-research">
                <strong>Research:</strong> {{ member.research }}
            </div>
            
            {% if member.tags %}
            <div class="member-tags">
                {% for tag in member.tags %}
                <span class="member-tag">{{ tag }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            {% if member.email %}
            <div class="member-links">
                <a href="mailto:{{ member.email }}" class="member-link" title="Email">📧</a>
            </div>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</div>
{% endif %}

<!-- 卒業生 -->
{% if site.data.members.alumni %}
<div class="members-section">
    <h2 class="section-title">🎓 Alumni</h2>
    <div class="members-grid">
        {% for member in site.data.members.alumni %}
        <div class="member-card">
            <div class="member-header">
                <div class="member-avatar">
                    {% if member.avatar and member.avatar != "" %}
                        <img src="{{ member.avatar | relative_url }}" alt="{{ member.name }}">
                    {% else %}
                        👨‍💼
                    {% endif %}
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    {% if member.japanese_name %}
                    <div class="member-japanese-name">{{ member.japanese_name }}</div>
                    {% endif %}
                    <div class="member-role">{{ member.role }}</div>
                    <div class="member-period">{{ member.period }}</div>
                </div>
            </div>
            
            <div class="member-research">
                <strong>Research:</strong> {{ member.research }}
            </div>
            
            {% if member.current %}
            <div class="member-period">
                <strong>Current:</strong> {{ member.current }}
            </div>
            {% endif %}
            
            {% if member.tags %}
            <div class="member-tags">
                {% for tag in member.tags %}
                <span class="member-tag">{{ tag }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            {% if member.email %}
            <div class="member-links">
                <a href="mailto:{{ member.email }}" class="member-link" title="Email">📧</a>
            </div>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</div>
{% endif %}

<!-- 研究室統計 -->
<div class="lab-stats">
    <h3>📊 Laboratory Statistics</h3>
    <div class="stats-grid">
        <div class="stat-item">
            <span class="stat-number">{{ site.data.members.faculty | size }}</span>
            <span class="stat-label">Faculty Members</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">
                {% assign total_students = 0 %}
                {% if site.data.members.phd_students %}{% assign total_students = total_students | plus: site.data.members.phd_students.size %}{% endif %}
                {% if site.data.members.master_students %}{% assign total_students = total_students | plus: site.data.members.master_students.size %}{% endif %}
                {% if site.data.members.bachelor_students %}{% assign total_students = total_students | plus: site.data.members.bachelor_students.size %}{% endif %}
                {{ total_students }}
            </span>
            <span class="stat-label">Students</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">
                {% if site.data.members.alumni %}{{ site.data.members.alumni.size }}{% else %}0{% endif %}
            </span>
            <span class="stat-label">Alumni</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">
                {% assign total_members = site.data.members.faculty | size | plus: total_students %}
                {% if site.data.members.alumni %}{% assign total_members = total_members | plus: site.data.members.alumni.size %}{% endif %}
                {{ total_members }}
            </span>
            <span class="stat-label">Total Members</span>
        </div>
    </div>
</div>

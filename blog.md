---
layout: page
title: 研究室ニュース
description: "AIoT研究室からの最新情報"
---

# 研究室ニュース

当研究室の最新の研究成果、受賞情報、イベントなどをご紹介します。定期的にチェックしてください！

<!-- Beautiful Jekyll will automatically list blog posts here -->

<style>
.news-page-intro {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 0;
    margin-bottom: 40px;
    border-radius: 10px;
    text-align: center;
}

.news-page-intro h1 {
    margin-bottom: 15px;
    font-weight: 700;
}

.news-page-intro p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 0;
}

.news-categories {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.news-categories h3 {
    color: #495057;
    margin-bottom: 15px;
}

.category-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.category-tag {
    background-color: white;
    border: 2px solid #e9ecef;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 0.9rem;
    color: #495057;
    text-decoration: none;
    transition: all 0.3s ease;
}

.category-tag:hover {
    border-color: #667eea;
    color: #667eea;
    text-decoration: none;
    transform: translateY(-2px);
}

.news-stats {
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 15px;
}

.stat-item {
    padding: 15px;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #667eea;
    display: block;
}

.stat-label {
    font-size: 0.9rem;
    color: #6c757d;
}

@media (max-width: 768px) {
    .news-page-intro {
        padding: 30px 0;
    }
    
    .news-page-intro h1 {
        font-size: 2rem;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="news-page-intro">
    <h1>研究室ニュース</h1>
    <p>AIoT研究室の最新動向をお届けします</p>
</div>

<div class="news-categories">
    <h3>📁 カテゴリから探す</h3>
    <div class="category-tags">
        <a href="#" class="category-tag">🏆 受賞情報</a>
        <a href="#" class="category-tag">📝 論文発表</a>
        <a href="#" class="category-tag">🎤 学会発表</a>
        <a href="#" class="category-tag">👥 メンバー情報</a>
        <a href="#" class="category-tag">🏫 イベント</a>
        <a href="#" class="category-tag">🤝 共同研究</a>
        <a href="#" class="category-tag">💼 インターンシップ</a>
        <a href="#" class="category-tag">🌐 国際交流</a>
    </div>
</div>

<div class="news-stats">
    <h3>📊 ニュース統計</h3>
    <div class="stats-grid">
        <div class="stat-item">
            <span class="stat-number">{{ site.posts | size }}</span>
            <span class="stat-label">総投稿数</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">{{ site.posts | where: "categories", "Awards" | size }}</span>
            <span class="stat-label">受賞情報</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">{{ site.posts | where: "categories", "Research" | size }}</span>
            <span class="stat-label">研究成果</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">{{ site.posts | where: "categories", "Events" | size }}</span>
            <span class="stat-label">イベント</span>
        </div>
    </div>
</div>

<!-- Beautiful Jekyll will automatically list blog posts here -->
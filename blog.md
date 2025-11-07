---
layout: page
title: 研究室ニュース
description: "AIoT研究室からの最新情報"
---

# 研究室ニュース

当研究室の最新の研究成果、受賞情報、イベントなどをご紹介します。定期的にチェックしてください！

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

/* ニュースリストのスタイル */
.news-list {
    margin-top: 40px;
}

.news-item {
    border-left: 4px solid #667eea;
    padding: 20px;
    margin-bottom: 25px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.news-item:hover {
    transform: translateX(5px);
}

.news-date {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.news-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.news-title a {
    color: #333;
    text-decoration: none;
}

.news-title a:hover {
    color: #667eea;
}

.news-excerpt {
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
}

/* 改良したタグスタイル */
.news-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
}

.news-tag {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.3s ease;
}

.news-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.tag-icon {
    margin-right: 4px;
    font-size: 0.7rem;
}

/* 画像のレスポンシブスタイル */
.news-page-intro img,
.news-list img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 15px auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 画像の中央揃え用クラス */
.image-container {
    text-align: center;
    margin: 20px 0;
}

.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
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
    
    .news-tags {
        gap: 6px;
    }
    
    .news-tag {
        padding: 3px 10px;
        font-size: 0.7rem;
    }
}
</style>

<div class="news-page-intro">
    <h1>研究室ニュース</h1>
    <p>AIoT研究室の最新動向をお届けします</p>
</div>


<!-- ニュースリストの表示 -->
<div class="news-list">
    <h2>最新ニュース</h2>
    
    {% if site.posts.size > 0 %}
        {% for post in site.posts %}
        <div class="news-item">
            <div class="news-date">
                📅 {{ post.date | date: "%Y年%m月%d日" }}
            </div>
            <h3 class="news-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            
            <!-- 投稿内の画像をレスポンシブ表示 -->
            {% if post.image %}
            <div class="image-container">
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
            </div>
            {% endif %}
            
            {% if post.excerpt %}
            <div class="news-excerpt">
                {{ post.excerpt }}
            </div>
            {% endif %}
            
            <!-- 改良したタグ表示（最大4個） -->
            {% if post.categories %}
            <div class="news-tags">
                {% assign display_categories = post.categories | slice: 0, 4 %}
                {% for category in display_categories %}
                    {% assign icon = "" %}
                    {% case category %}
                        {% when "Awards" %}{% assign icon = "🏆" %}
                        {% when "Research" %}{% assign icon = "📝" %}
                        {% when "Events" %}{% assign icon = "🎤" %}
                        {% when "Members" %}{% assign icon = "👥" %}
                        {% when "Collaboration" %}{% assign icon = "🤝" %}
                        {% when "Internship" %}{% assign icon = "💼" %}
                        {% when "International" %}{% assign icon = "🌐" %}
                        {% else %}{% assign icon = "📌" %}
                    {% endcase %}
                    <span class="news-tag">
                        <span class="tag-icon">{{ icon }}</span>{{ category }}
                    </span>
                {% endfor %}
                
                <!-- タグが4個以上ある場合の表示 -->
                {% if post.categories.size > 4 %}
                <span class="news-tag" style="background: #6c757d;">
                    +{{ post.categories.size | minus: 4 }}
                </span>
                {% endif %}
            </div>
            {% endif %}
        </div>
        {% endfor %}
    {% else %}
        <div class="no-news">
            <p>現在、ニュースはありません。</p>
        </div>
    {% endif %}
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


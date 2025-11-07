---
layout: page
title: Publications
description: "Research publications from AIoT Laboratory"
---

<!-- # Publications -->

<div class="publications-intro">
    <p>Our research contributions in Artificial Intelligence of Things, wireless security, edge computing, intelligent systems, and radio frequency fingerprinting.</p>
</div>

<!-- ## By Year -->

{% assign all_publications = site.data.publications | sort: "year" %}
{% assign publication_count = 1 %}
{% assign publications_by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}

{% for year_group in publications_by_year %}

### {{ year_group.name }}

{% for pub in year_group.items %}
{% for sorted_pub in all_publications %}
{% if sorted_pub.title == pub.title and sorted_pub.authors == pub.authors %}
<div class="publication-item {% if pub.category contains 'japanese' %}japanese{% endif %} {% if pub.awards.size > 0 %}has-award{% endif %}">
    <div class="pub-number">{{ publication_count }}</div>
    <div class="pub-content">
        <div class="pub-header">
            <h4 class="pub-title">
                {{ pub.title }}
                {% if pub.links.pdf or pub.links.doi or pub.links.code %}
                <span class="title-links">
                    {% if pub.links.pdf %}[<a href="{{ pub.links.pdf }}" target="_blank">PDF</a>]{% endif %}
                    {% if pub.links.doi %}[<a href="{{ pub.links.doi }}" target="_blank">DOI</a>]{% endif %}
                    {% if pub.links.code %}[<a href="{{ pub.links.code }}" target="_blank">Code</a>]{% endif %}
                    {% if pub.links.slides %}[<a href="{{ pub.links.slides }}" target="_blank">Slides</a>]{% endif %}
                    {% if pub.links.video %}[<a href="{{ pub.links.video }}" target="_blank">Video</a>]{% endif %}
                    {% if pub.links.poster %}[<a href="{{ pub.links.poster }}" target="_blank">Poster</a>]{% endif %}
                    {% if pub.links.demo %}[<a href="{{ pub.links.demo }}" target="_blank">Demo</a>]{% endif %}
                </span>
                {% endif %}
            </h4>
            {% if pub.awards.size > 0 %}
            <div class="pub-awards">
                {% for award in pub.awards %}
                <span class="award-badge {% if award contains '招待' %}invited{% endif %}">{{ award }}</span>
                {% endfor %}
            </div>
            {% endif %}
        </div>
        
        <div class="pub-meta">
            <span class="pub-authors">{{ pub.authors }}</span>
            <span class="pub-venue">{{ pub.venue }}</span>
            {% if pub.status == "accepted" %}
            <span class="status-badge accepted">Accepted</span>
            {% elsif pub.status == "forthcoming" %}
            <span class="status-badge forthcoming">Forthcoming</span>
            {% endif %}
        </div>
        
        {% if pub.note %}
        <div class="pub-note">
            <small>{{ pub.note }}</small>
        </div>
        {% endif %}
    </div>
</div>
{% assign publication_count = publication_count | plus: 1 %}
{% endif %}
{% endfor %}
{% endfor %}

{% endfor %}

<!-- ---

## By Category

### Journal Papers
{% assign journal_papers = site.data.publications | where: "category", "journal" %}
{% assign journal_japanese = site.data.publications | where: "category", "journal_japanese" %}
{% assign all_journals = journal_papers | concat: journal_japanese | sort: "year" %}
{% assign journal_count = 1 %}
{% for pub in all_journals %}
<div class="publication-item compact {% if pub.category contains 'japanese' %}japanese{% endif %}">
    <span class="pub-number-small">[J{{ journal_count }}]</span>
    <strong>{{ pub.title }}</strong>
    {% if pub.links.pdf or pub.links.doi %}
    <span class="title-links">
        {% if pub.links.pdf %}[<a href="{{ pub.links.pdf }}">PDF</a>]{% endif %}
        {% if pub.links.doi %}[<a href="{{ pub.links.doi }}">DOI</a>]{% endif %}
    </span>
    {% endif %}
    <br>
    <span class="pub-meta-compact">
        {{ pub.authors }} | <em>{{ pub.venue_short }}</em>, {{ pub.year }}
    </span>
</div>
{% assign journal_count = journal_count | plus: 1 %}
{% endfor %}

### Conference Papers
{% assign conference_papers = site.data.publications | where: "category", "conference" %}
{% assign conference_japanese = site.data.publications | where: "category", "conference_japanese" %}
{% assign all_conferences = conference_papers | concat: conference_japanese | sort: "year" %}
{% assign conference_count = 1 %}
{% for pub in all_conferences %}
<div class="publication-item compact {% if pub.category contains 'japanese' %}japanese{% endif %}">
    <span class="pub-number-small">[C{{ conference_count }}]</span>
    <strong>{{ pub.title }}</strong>
    {% if pub.links.pdf or pub.links.doi %}
    <span class="title-links">
        {% if pub.links.pdf %}[<a href="{{ pub.links.pdf }}">PDF</a>]{% endif %}
        {% if pub.links.doi %}[<a href="{{ pub.links.doi }}">DOI</a>]{% endif %}
    </span>
    {% endif %}
    <br>
    <span class="pub-meta-compact">
        {{ pub.authors }} | <em>{{ pub.venue_short }}</em>, {{ pub.year }}
    </span>
</div>
{% assign conference_count = conference_count | plus: 1 %}
{% endfor %}

### Workshop & Symposium Papers
{% assign workshop_papers = site.data.publications | where: "category", "workshop" %}
{% assign workshop_japanese = site.data.publications | where: "category", "workshop_japanese" %}
{% assign all_workshops = workshop_papers | concat: workshop_japanese | sort: "year" %}
{% assign workshop_count = 1 %}
{% for pub in all_workshops %}
<div class="publication-item compact {% if pub.category contains 'japanese' %}japanese{% endif %}">
    <span class="pub-number-small">[W{{ workshop_count }}]</span>
    <strong>{{ pub.title }}</strong>
    {% if pub.links.pdf %}[<a href="{{ pub.links.pdf }}">PDF</a>]{% endif %}
    <br>
    <span class="pub-meta-compact">
        {{ pub.authors }} | <em>{{ pub.venue_short }}</em>, {{ pub.year }}
        {% if pub.awards.size > 0 %}
        <span class="award-badge-small">
            {% for award in pub.awards %}{{ award }}{% unless forloop.last %}, {% endunless %}{% endfor %}
        </span>
        {% endif %}
    </span>
</div>
{% assign workshop_count = workshop_count | plus: 1 %}
{% endfor %}

### Theses
{% assign theses = site.data.publications | where: "category", "thesis" | sort: "year" %}
{% assign thesis_count = 1 %}
{% for pub in theses %}
<div class="publication-item compact">
    <span class="pub-number-small">[T{{ thesis_count }}]</span>
    <strong>{{ pub.title }}</strong>
    {% if pub.links.pdf %}[<a href="{{ pub.links.pdf }}">PDF</a>]{% endif %}
    <br>
    <span class="pub-meta-compact">
        {{ pub.authors }} | <em>{{ pub.venue_short }}</em>, {{ pub.year }}
    </span>
</div>
{% assign thesis_count = thesis_count | plus: 1 %}
{% endfor %}

--- -->

<div class="publications-footer">
    <p><small>For pre-prints and additional materials, please visit our <a href="https://github.com/aiot-lab-yin" target="_blank">GitHub repository</a> or contact the authors directly.</small></p>
</div>
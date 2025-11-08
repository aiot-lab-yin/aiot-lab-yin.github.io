---
layout: page
---

<div class="publications-intro">
  <p>Our research contributions in Artificial Intelligence of Things, wireless security, edge computing, intelligent systems, and radio frequency fingerprinting.</p>
</div>

{% assign publications_by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% assign total_count = 0 %}
{% for year_group in publications_by_year %}
  {% assign total_count = total_count | plus: year_group.items | size %}
{% endfor %}
{% assign current_count = total_count %}

{% include publication-stats.html total=total_count %}

{% for year_group in publications_by_year %}
  <h3>{{ year_group.name }}</h3>

  {% for pub in year_group.items %}
    {% include publication-item.html publication=pub number=current_count %}
    {% assign current_count = current_count | minus: 1 %}
  {% endfor %}
{% endfor %}

<div class="publications-footer">
  <p><small>For pre-prints and additional materials, please visit our <a href="https://github.com/aiot-lab-yin" target="_blank" rel="noopener">GitHub repository</a> or contact the authors directly.</small></p>
</div>
---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<ul>
{% assign sorted_projects = site.projects | sort: 'date' | reverse %}
{% for project in sorted_projects %}
<li>
   <h3>{{ project.title }} <small>({{ project.date | date: "%B %Y" }})</small></h3>
   <p>{{ project.description }}</p>
   {% if project.code_url %}
      <a href="{{ project.code_url }}" class="btn">Code</a>
   {% endif %}
   {% if project.report_url %}
      <a href="{{ project.report_url }}" class="btn">Report</a>
   {% endif %}
   {% if project.presentation_url %}
      <a href="{{ project.presentation_url }}" class="btn">Presentation</a>
   {% endif %}
</li>
{% endfor %}
</ul>

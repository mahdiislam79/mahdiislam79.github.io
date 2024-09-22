---
layout: archive
title: "Poster Presentations"
permalink: /posters/
author_profile: true
---

<ul>
{% assign sorted_posters = site.posters | sort: 'date' | reverse %}
{% for poster in sorted_posters %}
<li>
   <h3>{{ poster.title }} <small>({{ poster.date | date: "%B %Y" }})</small></h3>
   <p>{{ poster.description }}</p>

   {% if poster.poster_url %}
     <p><strong>Poster:</strong></p>
     <iframe src="{{ poster.poster_url }}" style="width:100%; height:900px; border:none;" allowfullscreen="true" loading="lazy">
       Your browser does not support embedded PDFs. You can download the PDF file <a href="{{ poster.poster_url }}">here</a>.
     </iframe>
   {% endif %}
</li>
{% endfor %}
</ul>

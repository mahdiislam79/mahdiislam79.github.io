---
layout: archive
title: "Poster Presentations"
permalink: /posters/
author_profile: true
---
<style>
iframe {
  width: 100%;
  height: 1000px;
  border: none;
}
</style>
<ul>
{% assign sorted_posters = site.posters | sort: 'date' | reverse %}
{% for poster in sorted_posters %}
<li>
   <h3>{{ poster.title }} <small>({{ poster.date | date: "%B %Y" }})</small></h3>
   <p>{{ poster.description }}</p>

   {% if poster.poster_url %}
     <p><strong>Poster:</strong></p>
     {% if poster.poster_url contains ".png" or poster.poster_url contains ".jpg" or poster.poster_url contains ".jpeg" %}
       <img src="{{ poster.poster_url }}" alt="{{ poster.title }}" style="max-width:100%; height:auto; display:block; margin:0 auto;" loading="lazy">
     {% else %}
       <iframe src="{{ poster.poster_url }}" style="width:100%; height:900px; border:none;" allowfullscreen="true" loading="lazy">
         Your browser does not support embedded PDFs. You can download the PDF file <a href="{{ poster.poster_url }}">here</a>.
       </iframe>
     {% endif %}
   {% endif %}
</li>
{% endfor %}
</ul>




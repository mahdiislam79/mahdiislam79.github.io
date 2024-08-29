---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on my <a href="{{site.author.googlescholar}}"> Google Scholar </a> profile.</div>
{% endif %}

{% include base_path %}

<ul>
{% assign sorted_publications = site.publications | sort: 'date' | reverse %}
{% for publication in sorted_publications %}
<li>
   <h3>{{ publication.title }} <small>({{ publication.date | date: "%B %Y" }})</small></h3>
   <p>{{ publication.excerpt }}</p>
   <p><strong>Authors:</strong> {{ publication.authors }}</p>
   <p><strong>Conference:</strong> {{ publication.venue }}</p>
   <p><strong>Publisher:</strong> {{ publication.publisher }}</p>
   <p><strong>Total Citations:</strong> {{ publication.citations }}</p>
   
   {% if publication.paper_url %}
      <a href="{{ publication.paper_url }}" class="btn">Read Paper</a>
   {% endif %}
   {% if publication.presentation_url %}
      <a href="{{ publication.presentation_url }}" class="btn">View Presentation</a>
   {% endif %}
   {% if publication.citation %}
      <p><strong>Recommended Citation:</strong> {{ publication.citation }}</p>
   {% endif %}
</li>
{% endfor %}
</ul>

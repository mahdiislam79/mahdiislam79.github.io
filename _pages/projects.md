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
   {% if project.keywords %}
     <p><strong>Keywords:</strong> {{ project.keywords }}</p>
   {% endif %}
   {% if project.images %}
     <div class="project-images-wrapper images-wrapper"> <!-- Reusing shared wrapper class -->
       <div class="project-images images"> <!-- Reusing shared images class -->
         {% for image in project.images %}
           <div class="project-image-container image-container"> <!-- Reusing shared image-container class -->
             <img src="{{ image }}" alt="Image for {{ project.title }}" class="project-image image" loading="lazy"> <!-- Lazy loading and descriptive alt -->
           </div>
         {% endfor %}
       </div>
       <!-- Navigation Arrows -->
       <div class="carousel-nav">
         <button class="prev">❮</button>
         <button class="next">❯</button>
       </div>
     </div>
     <!-- Scroll Indicators -->
     <div class="scroll-indicators">
       {% for image in project.images %}
         <span class="indicator"></span>
       {% endfor %}
     </div>
   {% endif %}
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

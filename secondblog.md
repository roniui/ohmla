---
layout: home
title: Second Blog
permalink: /secondblog/
pagination:
  enabled: true
  collection: secondposts
---

{% for post in site.secondposts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.excerpt }}</p>
{% endfor %}

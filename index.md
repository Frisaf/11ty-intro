---
layout: layout.html
---
# Startsida
<p>Kallt ovälkommen, och ovänliga hälsningar!</p>

## Alla inlägg

{% for post in collections.posts %}
    <li>
        <time>
            <a href="{{ post.url }}"> {{ post.data.title | capitalize }}</a>
        </time>
        {% if post.data.summary %}
            <p><em>{{ post.data.summary }}</em></p>
        {% else %}
            <p><em>Utan sammanfattning</em></p>
        {% endif %}
    </li>
{% endfor %}
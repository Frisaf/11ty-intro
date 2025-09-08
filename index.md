---
layout: layout.html
---
# Startsida
<p>Kallt ovälkommen, och ovänliga hälsningar!</p>

## Alla inlägg
<ul>
    {% for post in collections.posts %}
        <li class=postItem>
            <h3><a href="{{ post.url }}"> {{ post.data.title | capitalize }}</a></h3>
            {% if post.data.summary %}
                <p><em>{{ post.data.summary }}</em></p>
            {% else %}
                <p><em>Utan sammanfattning</em></p>
            {% endif %}
            <time class="timeText">{% formatDate post.date %}</time>
        </li>
    {% endfor %}
</ul>
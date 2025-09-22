---
title: Kontakt
layout: layout.html
summary: Kontakta oss!
---
## Kontakt

Nå INTE ut till oss är ni snälla! :D

<ul>
    {%- for employee in employees.items -%}
        <li>
            <h3>{{ employee.name }}</h3>
            <p>{{ employee.position }}</p>
            <img src="/img/{{ employee.img }}" alt="{{ employee.alt }}">
        </li>
    {%- endfor -%}
</ul>

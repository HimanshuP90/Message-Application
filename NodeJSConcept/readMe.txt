How can I protect against XSS?
XSS, or Cross-Site Scripting, is a technique that enables attackers to run externally injected JavaScript in the context of the attacked page. Once the attackers manage to do so, it can access the full range of Web APIs.

The simplest XSS attack may look the following:

The attacker finds input fields on the webpage
The attacker starts inputting simple HTML and JavaScript to see if the page vulnerable, like <script>alert('ops!')</script>
Once the attacker finds such an input that is vulnerable, the attacker crafts a link that will inject a give snipper into the page, and sends it to the attacked person
After the link is opened, it is up to injected script and the attacker on what’s going to happen next
The reason why XSS attacks rank in the top 10 OWASP security risks, is that using this exploit, attackers can easily get access to secrets stored in LocalStorage, SessionStorage or even cookies. This is the main reason why OWASP recommends never to store sensitive information in these storages. Once the attackers manage to read them, they can potentially impersonate the attacked user accounts.


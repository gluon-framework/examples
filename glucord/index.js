import * as Gluon from '@gluon-framework/gluon';

Gluon.open('https://discord.com/app', {
  onLoad: () => {
    setTimeout(() => {
      document.title = 'Glucord';
      Object.defineProperty(document, 'title', {
        get() {
          return this._title;
        },

        set(original) {
          if (original === 'Discord') original = 'Glucord';

          // web style title -> desktop style title
          this._title = original.replace('Discord | ', '');
          if (this._title !== 'Glucord') this._title += ' - Glucord';

          document.getElementsByTagName('title')[0].textContent = this._title; // actually set title
          return this._title;
        }
      });

      // set icon to Glucord icon
      const iconEl = document.querySelector("link[rel~='icon']");
      iconEl.href = `https://media.discordapp.net/attachments/1051941471365910608/1089240980542205962/logo.png`;

      iconEl.setAttribute = () => {}; // stop Discord overwriting our icon

      document.head.appendChild(document.createElement("style")).innerHTML = `
.socialLinks-3ywLUf + .info-3pQQBb {
  position: relative;
}

.socialLinks-3ywLUf + .info-3pQQBb::after {
  content: 'Glucord 0.1.1 \\a Gluon ${Gluon.versions.gluon} ${Gluon.versions.builder !== 'nothing' ? `(${Gluon.versions.builder})` : ''} \\a ${Gluon.versions.browserType[0].toUpperCase() + Gluon.versions.browserType.slice(1)} ${Gluon.versions.browser} (${Gluon.versions.product}) \\a Node ${Gluon.versions.node}';
  white-space: pre-wrap;
  text-transform: none;
  color: var(--text-muted);
  font-weight: 400;
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  padding: 8px 0;
  margin: 8px 0;
  display: inline-block;
  border-top: 1px solid var(--background-modifier-accent);
}`;
    }, 200);
  }
});
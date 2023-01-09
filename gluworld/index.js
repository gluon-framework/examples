import * as Gluon from '@gluon-framework/gluon';

(async () => {
  const browsers = process.argv.slice(2).filter(x => !x.startsWith('-'));

  if (browsers.length > 0) { // use argv as browsers to use
    for (const forceBrowser of browsers) {
      await Gluon.open('index.html', {
        windowSize: [ 800, 500 ],
        forceBrowser
      });
    }

    return;
  }

  await Gluon.open('index.html', {
    windowSize: [ 800, 500 ]
  });
})();
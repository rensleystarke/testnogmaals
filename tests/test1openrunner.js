'Openrunner-Script: v1';
const expect = await include('expect');
const tabs = await include('tabs');
await include('contentEvents');
await include('httpEvents');
await include('wait');
await include('eventSimulation');
const screenshot = await include('screenshot');
const requestBlocking = await include('requestBlocking');
const tab = await tabs.create();

await requestBlocking.block([
    '*://*.google-analytics.com/*',
]);

await transaction('HomePage', async t => {
    t.title = '00 HomePage';
    await tab.navigate('http://localhost:7888/', {timeout: '10s'});
    await tab.wait(async () => {
        await wait.documentComplete().selector('#layerslider_1 p.slider-text').isDisplayed();
    });
});

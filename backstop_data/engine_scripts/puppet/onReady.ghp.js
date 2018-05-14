module.exports = async (page, scenario, vp) => {
    console.log('going places:  > ' + scenario.label);

    const fck = 'xxxxxxxxxxxxxxxx';
    
    const searchfield = '#lst-ib';
    const button = '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)';
    const results = '#pnnext > span.csb.ch';

    async function setvalue(sel, val) {
        page.evaluate((data) => {
            return document.querySelector(data.sel).value = data.val
        }, {sel, val})
    }

    await setvalue(searchfield, fck)

    await page.waitFor(button);
    //    await page.click(button);
    await page.keyboard.press('Enter')
    await page.waitFor(3000);
};

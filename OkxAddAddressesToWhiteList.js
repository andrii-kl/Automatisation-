(function() {
    const wallets = `
0x50567bb4528361d80d818aa3c6173a172f0519fc5ab96e734c439c1674c675a
0x5f0480f1b8f52f4a887e037392b20064fe40592b0c4486f0b1e0978b3258bd7
0x7ffa92713257244cfa5e844c1570ce3c25092f3b55fca4f182e6a0aa4551d07
0x1264a58fe6637144660f00ef9c86ec640e992ffd13770063bae390afc48b06e
0x329f8636545fa53c744f489e80e19d5be12d6426a9c68e46ce2eb8547059c3f
     `.split("\n").filter(element => element);
    
    const walletSelectors = [];

    for (let i = 3; i <= 98; i += 5) {
        if(i === 3){
            walletSelectors.push(
            `.withdraw-book-list > div:nth-child(${i}) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)`
            );
        } else {
            walletSelectors.push(
                `div.okui-form-item-md:nth-child(${i}) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)`
            );
        }
    }

    const addButtonSelector = ".add-address-form-btn"

    function fillInput(input, value) {
        input.setAttribute('value', value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    async function addWallets() {
        for (let i = 0; i < wallets.length; i++) {
            console.log(`Adding wallet ${i + 1} from ${wallets.length}`);

            const addressInput = document.querySelector(walletSelectors[i]);

            fillInput(addressInput, wallets[i]);
            await new Promise((resolve) => setTimeout(resolve, 300));

            if (i < wallets.length - 1) {
                const button = document.querySelector(addButtonSelector);
                button.click();
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
        console.log('Finish');
    }

    addWallets();
})();

(function() {
    const wallets = [
        '0x....',
        '0x....',
        '0x....',
    ];
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

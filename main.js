import {
    createApp,
    ref
} from "https://unpkg.com/vue@3.0.11/dist/vue.esm-browser.prod.js"
const app = createApp({
    setup() {
        const quote = ref('');
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                quote.value = data
            })

        return {
            quote
        }
    },
})

app.mount("#app")
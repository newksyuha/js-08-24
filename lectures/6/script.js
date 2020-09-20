Vue.component('v-header', {
    template: `
        <h1>Hello World!</h1>
    `,
});

Vue.component('v-body', {
    data() {
        return {
            items: [
                'Catalog Item 1',
                'Catalog Item 2',
                'Catalog Item 3',
                'Catalog Item 4',
            ]
        };
    },
    created() {
        this.fetchData();
    },
    template: `
        <div class="body">
            <catalog-item v-for="item in items">
                {{ item }}
            </catalog-item>
        </div>
    `,
    methods: {
        fetchData() {
            fetch('/api/goods')
                .then((res) => res.json())
                .then((data) => this.items = data);
        }
    }
});

Vue.component('catalog-item', {
    template: `
        <div class="item">
            <h3>
                <slot />
            </h3>
        </div>
    `,
});

const app = new Vue({
    el: '#app',
});


const app = new Vue({
    
        el: '#app',
        data: {
          name: 'Frodo'
        },
        computed: {
          upperCaseName() {
            return this.name.toUpperCase();
          }
        },
        methods: {
            clickHandler() {
              console.log('click');
            }
          },
      });
      



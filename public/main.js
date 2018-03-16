

var vm = new Vue({
    el: '#app',
    template: '#main-page',
    computed: {
        loadSource: () => {
            const req = new XMLHttpRequest();
            req.open('GET', './api', false);
            req.send(null);
            if(req.status == 200) {
                let resJson = JSON.parse(req.responseText);
                let data = new Array;

                for (let a=0; a<resJson.length; a++) {
                    data.push(resJson[a].menu)
                }
                
                return data;
            }
        }
    }
});
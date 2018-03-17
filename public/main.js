

var vm = new Vue({
    el: '#app',
    template: '#main-page',
    computed: {
        loadSource: () => {
            const req = new XMLHttpRequest();
            req.open('GET', './api', false);
            req.send(null);
            if(req.status == 200 ) {
                if (req.responseText) {
                    let resJson = JSON.parse(req.responseText);
                    let data = new Array;

                    for (let a=0; a<resJson.length; a++) {
                        data.push(resJson[a].menu)
                    }
                
                    return data;
                } else {
                    return {menu: "오늘은 급식이 없습니다."};
                }
            }
        }
    }
});
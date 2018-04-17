

var vm = new Vue({
    el: '#app',
    template: '#main-page',
    methods: {
        loadSource: number => {
            const req = new XMLHttpRequest()
            let d = new Date()
            req.open('GET', './api/'+number+'/'+d.getMonth()+'/'+d.getDate(), false)
            req.send(null)
            if(req.status == 200 ) {
                if (req.responseText) {
                    let resJson = JSON.parse(req.responseText)
                    let data = new Array

                    for (let a=0; a<resJson.length; a++) {
                        data.push(resJson[a].menu)
                    }
                
                    return data
                } else {
                    if (number == 2)
                        return {menu: "오늘은 중식이 없습니다."}
                    else
                        return {menu: "오늘은 석식이 없습니다."}
                }
            }
        }
    }
});
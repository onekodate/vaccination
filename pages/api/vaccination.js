const elem=(id)=>document.getElementById(id);
const prefectures=[{"pref":"合計","Both":{"all":126654244,"65-":35768503,"-64":90885683},"M":{"all":126654244,"65-":35768503,"-64":90885683},"F":{"all":61797907,"65-":15567512,"-64":46230380}},{"pref":"北海道","Both":{"all":5228732,"65-":1668858,"-64":3557745},"M":{"all":5228732,"65-":1668858,"-64":3557745},"F":{"all":2471013,"65-":698835,"-64":1771437}},{"pref":"青森県","Both":{"all":1260067,"65-":420569,"-64":839046},"M":{"all":1260067,"65-":420569,"-64":839046},"F":{"all":597036,"65-":173526,"-64":423420}},{"pref":"岩手県","Both":{"all":1221205,"65-":407949,"-64":812874},"M":{"all":1221205,"65-":407949,"-64":812874},"F":{"all":588436,"65-":172754,"-64":415562}},{"pref":"宮城県","Both":{"all":2282106,"65-":644431,"-64":1637558},"M":{"all":2282106,"65-":644431,"-64":1637558},"F":{"all":1113109,"65-":281702,"-64":831364}},{"pref":"秋田県","Both":{"all":971604,"65-":361729,"-64":609559},"M":{"all":971604,"65-":361729,"-64":609559},"F":{"all":458937,"65-":149996,"-64":308878}},{"pref":"山形県","Both":{"all":1070017,"65-":359986,"-64":709576},"M":{"all":1070017,"65-":359986,"-64":709576},"F":{"all":517251,"65-":155716,"-64":361464}},{"pref":"福島県","Both":{"all":1862777,"65-":582543,"-64":1279516},"M":{"all":1862777,"65-":582543,"-64":1279516},"F":{"all":914498,"65-":254543,"-64":659728}},{"pref":"茨城県","Both":{"all":2907678,"65-":850637,"-64":2057038},"M":{"all":2907678,"65-":850637,"-64":2057038},"F":{"all":1458519,"65-":384998,"-64":1073520}},{"pref":"栃木県","Both":{"all":1955402,"65-":563031,"-64":1392370},"M":{"all":1955402,"65-":563031,"-64":1392370},"F":{"all":978577,"65-":253014,"-64":725563}},{"pref":"群馬県","Both":{"all":1958185,"65-":582192,"-64":1375909},"M":{"all":1958185,"65-":582192,"-64":1375909},"F":{"all":971459,"65-":259028,"-64":712402}},{"pref":"埼玉県","Both":{"all":7393849,"65-":1959702,"-64":5434097},"M":{"all":7393849,"65-":1959702,"-64":5434097},"F":{"all":3696693,"65-":887119,"-64":2809549}},{"pref":"千葉県","Both":{"all":6322897,"65-":1721801,"-64":4601091},"M":{"all":6322897,"65-":1721801,"-64":4601091},"F":{"all":3153052,"65-":774697,"-64":2378355}},{"pref":"東京都","Both":{"all":13843525,"65-":3138535,"-64":10704794},"M":{"all":13843525,"65-":3138535,"-64":10704794},"F":{"all":6805319,"65-":1363592,"-64":5441682}},{"pref":"神奈川県","Both":{"all":9220245,"65-":2327286,"-64":6892920},"M":{"all":9220245,"65-":2327286,"-64":6892920},"F":{"all":4597371,"65-":1039059,"-64":3558300}},{"pref":"新潟県","Both":{"all":2213353,"65-":720258,"-64":1492916},"M":{"all":2213353,"65-":720258,"-64":1492916},"F":{"all":1075668,"65-":311563,"-64":764049}},{"pref":"富山県","Both":{"all":1047713,"65-":336402,"-64":711272},"M":{"all":1047713,"65-":336402,"-64":711272},"F":{"all":509223,"65-":143269,"-64":365925}},{"pref":"石川県","Both":{"all":1132656,"65-":335351,"-64":797305},"M":{"all":1132656,"65-":335351,"-64":797305},"F":{"all":549362,"65-":143783,"-64":405579}},{"pref":"福井県","Both":{"all":774596,"65-":234043,"-64":540540},"M":{"all":774596,"65-":234043,"-64":540540},"F":{"all":376740,"65-":101517,"-64":275211}},{"pref":"山梨県","Both":{"all":821094,"65-":251396,"-64":569601},"M":{"all":821094,"65-":251396,"-64":569601},"F":{"all":402993,"65-":110489,"-64":292454}},{"pref":"長野県","Both":{"all":2072219,"65-":654507,"-64":1417230},"M":{"all":2072219,"65-":654507,"-64":1417230},"F":{"all":1013022,"65-":288024,"-64":724822}},{"pref":"岐阜県","Both":{"all":2016868,"65-":604537,"-64":1412254},"M":{"all":2016868,"65-":604537,"-64":1412254},"F":{"all":983307,"65-":265529,"-64":717760}},{"pref":"静岡県","Both":{"all":3686335,"65-":1096727,"-64":2589533},"M":{"all":3686335,"65-":1096727,"-64":2589533},"F":{"all":1823189,"65-":485853,"-64":1337311}},{"pref":"愛知県","Both":{"all":7558872,"65-":1887186,"-64":5671616},"M":{"all":7558872,"65-":1887186,"-64":5671616},"F":{"all":3786852,"65-":843149,"-64":2943674}},{"pref":"三重県","Both":{"all":1800756,"65-":532230,"-64":1268327},"M":{"all":1800756,"65-":532230,"-64":1268327},"F":{"all":882675,"65-":232819,"-64":649838}},{"pref":"滋賀県","Both":{"all":1418886,"65-":370322,"-64":1048521},"M":{"all":1418886,"65-":370322,"-64":1048521},"F":{"all":701072,"65-":165256,"-64":535800}},{"pref":"京都府","Both":{"all":2530609,"65-":739767,"-64":1790775},"M":{"all":2530609,"65-":739767,"-64":1790775},"F":{"all":1212541,"65-":317147,"-64":895362}},{"pref":"大阪府","Both":{"all":8839532,"65-":2385612,"-64":6453899},"M":{"all":8839532,"65-":2385612,"-64":6453899},"F":{"all":4261993,"65-":1029473,"-64":3232511}},{"pref":"兵庫県","Both":{"all":5523627,"65-":1576432,"-64":3947193},"M":{"all":5523627,"65-":1576432,"-64":3947193},"F":{"all":2646646,"65-":678992,"-64":1967652}},{"pref":"奈良県","Both":{"all":1344952,"65-":420147,"-64":924592},"M":{"all":1344952,"65-":420147,"-64":924592},"F":{"all":638190,"65-":182532,"-64":455558}},{"pref":"和歌山県","Both":{"all":944750,"65-":309785,"-64":634647},"M":{"all":944750,"65-":309785,"-64":634647},"F":{"all":447493,"65-":130927,"-64":316403}},{"pref":"鳥取県","Both":{"all":556959,"65-":178268,"-64":378520},"M":{"all":556959,"65-":178268,"-64":378520},"F":{"all":266681,"65-":75255,"-64":191376}},{"pref":"島根県","Both":{"all":672979,"65-":229535,"-64":443280},"M":{"all":672979,"65-":229535,"-64":443280},"F":{"all":323755,"65-":97774,"-64":225937}},{"pref":"岡山県","Both":{"all":1893874,"65-":568499,"-64":1325292},"M":{"all":1893874,"65-":568499,"-64":1325292},"F":{"all":915535,"65-":244886,"-64":670612}},{"pref":"広島県","Both":{"all":2812477,"65-":821897,"-64":1990536},"M":{"all":2812477,"65-":821897,"-64":1990536},"F":{"all":1366170,"65-":354897,"-64":1011262}},{"pref":"山口県","Both":{"all":1356144,"65-":465780,"-64":890330},"M":{"all":1356144,"65-":465780,"-64":890330},"F":{"all":645033,"65-":195496,"-64":449530}},{"pref":"徳島県","Both":{"all":735070,"65-":244807,"-64":490142},"M":{"all":735070,"65-":244807,"-64":490142},"F":{"all":351726,"65-":105488,"-64":246192}},{"pref":"香川県","Both":{"all":973922,"65-":302859,"-64":671037},"M":{"all":973922,"65-":302859,"-64":671037},"F":{"all":471476,"65-":130988,"-64":340477}},{"pref":"愛媛県","Both":{"all":1356343,"65-":443466,"-64":912753},"M":{"all":1356343,"65-":443466,"-64":912753},"F":{"all":644546,"65-":186736,"-64":457783}},{"pref":"高知県","Both":{"all":701531,"65-":246331,"-64":454836},"M":{"all":701531,"65-":246331,"-64":454836},"F":{"all":331622,"65-":102959,"-64":228510}},{"pref":"福岡県","Both":{"all":5124259,"65-":1412467,"-64":3711703},"M":{"all":5124259,"65-":1412467,"-64":3711703},"F":{"all":2438939,"65-":593220,"-64":1845683}},{"pref":"佐賀県","Both":{"all":818251,"65-":247594,"-64":570628},"M":{"all":818251,"65-":247594,"-64":570628},"F":{"all":389236,"65-":104578,"-64":284650}},{"pref":"長崎県","Both":{"all":1336023,"65-":437517,"-64":898421},"M":{"all":1336023,"65-":437517,"-64":898421},"F":{"all":630044,"65-":183762,"-64":446244}},{"pref":"熊本県","Both":{"all":1758815,"65-":548676,"-64":1209969},"M":{"all":1758815,"65-":548676,"-64":1209969},"F":{"all":834752,"65-":232831,"-64":601844}},{"pref":"大分県","Both":{"all":1141784,"65-":375244,"-64":766497},"M":{"all":1141784,"65-":375244,"-64":766497},"F":{"all":543747,"65-":158525,"-64":385205}},{"pref":"宮崎県","Both":{"all":1087372,"65-":350624,"-64":736617},"M":{"all":1087372,"65-":350624,"-64":736617},"F":{"all":514993,"65-":149058,"-64":365876}},{"pref":"鹿児島県","Both":{"all":1617850,"65-":518506,"-64":1099011},"M":{"all":1617850,"65-":518506,"-64":1099011},"F":{"all":764241,"65-":222189,"-64":541962}},{"pref":"沖縄県","Both":{"all":1485484,"65-":331973,"-64":1153145},"M":{"all":1485484,"65-":331973,"-64":1153145},"F":{"all":733175,"65-":149769,"-64":583216}}];
var result,dates;
const loadFile=()=>{
    const reader=new FileReader();
    reader.onload=(event)=>{
        if(event.target.result.includes("{")){
            result=event.target.result.split("\n").join(",");
            result=JSON.parse("["+result.substr(0,result.length-1)+"]").map(val=>{
                val.pref=Number(val.prefecture);
                return val;
            });
            dates=(()=>{
                dates=[result[0].date];
                while(dates[dates.length-1]!=result[result.length-1].date){
                    let a=new Date(dates[dates.length-1]);
                    a.setDate(a.getDate()+1);
                    const bi=(str)=>{
                        if(str<10) str="0"+str;
                        return str;
                    };
                    dates.push(a.getFullYear()+"-"+bi(a.getMonth()+1)+"-"+bi(a.getDate()));
                }
                return dates;
            })();
            ranking();
            map2();
        }else result=event.target.result;
    };
    reader.readAsText(elem("file").files[0],"utf-8");
};
var setting={
    count:false,
    density:false,
    gender:"Both",
    age:"all",
    status:2,
    popup:"age",
    ranking:false,
    pref:0,
};
const button=(arr)=>{
    setting[arr[0]]=arr[1];
    if(result){
        if(["popup","pref"].includes(arr[0])){
            popup();
        }else if(arr[0]=="ranking"){
            map2();
        }else{
            ranking();
            map2();
        }
        if(elem("popup").className=="popup") popup();
    }else console.log(setting);
}
const popup=()=>{
    const num=setting.pref;
    if(elem("popup").className="invisible") elem("popup").className="popup";
    elem("popup_pref").innerText=prefectures[num].pref;
    const data=dates.map((date,idx)=>{
        let a;
        if(setting.popup=="gender") a={date:0,M:0,F:0,U:0};
        else if(setting.popup=="age") a={date:0,"65-":0,"-64":0,"UNK":0};
        else if(setting.popup=="status") a={date:0,1:0,2:0};
        a.date=new Date(date);
        let countdata=result;
        if(setting.density) countdata=result.filter(val=>val.date==date);
        else countdata=result.slice(0,result.map(val=>val.date).indexOf(dates[idx+1]));
        if(num!=0) countdata=countdata.filter(val=>val.pref==num);
        const mum=(setting.count?100:prefectures[num].Both.all);
        countdata.forEach((val)=>{
            a[val[setting.popup]]+=val.count/mum*100;
        });
        return a;
    });
    data.y="Counts";
    data.columns=Object.keys(data[0]).filter(val=>val!="date");
    data.columns.unshift("date");
    d3.select("#map1").select("svg").remove();
    const charts=(()=>{
        const height=300,width=600;
        const margin={
            top:20,
            right:30,
            bottom:30,
            left:55,
        };
        const series=d3.stack().keys(data.columns.slice(1))(data);
        const x=d3.scaleUtc()
            .domain(d3.extent(data,d=>d.date))
            .range([margin.left,width-margin.right]);
        const y=d3.scaleLinear()
            .domain([0,d3.max(series,d=>d3.max(d,d=>d[1]))]).nice()
            .range([height-margin.bottom,margin.top]);
        const xAxis=g=>g
            .attr("transform","translate(0,"+String(height-margin.bottom)+")")
            .call(d3.axisBottom(x).ticks(width/80).tickSizeOuter(0));
        const yAxis=g=>g
            .attr("transform","translate("+String(margin.left)+",0)")
            .call(d3.axisLeft(y))
            .call(g=>g.select(".domain").remove())
            .call(g=>g.select(".tick:last-of-type text").clone()
                .attr("x",3)
                .attr("text-anchor","start")
                .attr("font-weight","bold")
                .text(data.y)
            );
        const area=d3.area()
            .x(d=>x(d.data.date))
            .y0(d=>y(d[0]))
            .y1(d=>y(d[1]));            
        const color=d3.scaleOrdinal()
            .domain(data.columns.slice(1))
            .range(d3.schemeCategory10);
        const hover=(svg,path)=>{
            const moved=(event)=>{
                event.preventDefault();
                const pointer=d3.pointer(event);
                const xm=x.invert(pointer[0]);
                const ym=y.invert(pointer[1]);
                const i=d3.bisectCenter(data.map(val=>val.date),xm);
                const range=series.map(val=>val[i][0]);
                range.push(series[series.length-1][i][1]);
                const s=d3.bisectRight(range,ym)-1;
                line.attr("transform","translate("+x(xm)+",0)");
                if(s==range.length-1){
                    line.select("text").text("Total: "+String(series[s-2][i][1]-series[0][i][0]));
                }else if(s!==-1){
                    line.select("text").text(series[s].key+": "+String(series[s][i][1]-series[s][i][0]));
                }
            } 
            const entered=()=>{
                path.style("mix-blend-mode",null).attr("stroke","#ddd");
                line.attr("display",null);
            }
            const left=()=>{
                path.style("mix-blend-mode","multiply").attr("stroke",null);
                line.attr("display","none");
            }
            if("ontouchstart" in document) svg
                .style("-webkit-tap-highlight-color","transparent")
                .on("touchmove",moved)
                .on("touchstart",entered)
                .on("touchend",left);
            else svg
                .on("mousemove",moved)
                .on("mouseenter",entered)
                .on("mouseleave",left);
            const line=svg.append("g")
            //    .attr("display","none");
            line.append("line")
                .attr("y1",height)
                .attr("y2",0)
                .attr("stroke","black");
            line.append("text")
                .attr("font-family","sans-serif")
                .attr("font-size",30)
                .attr("text-anchor","right")
                .attr("y",30)
                .attr("x",-160);
        };
        const svg=d3.select("#map1")
            .append("svg")
            .attr("viewBox",[0,0,width,height]);
        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);
        const path=svg.append("g")
            .selectAll("path")
            .data(series)
            .join("path")
                .attr("fill",(key)=>color(key))
                .attr("d",area)
            .append("title")
                .text(key=>key);
        svg.call(hover,path);
        return svg.node();
    })();
};
const ranking=()=>{
    if(!dates){
        dates=(()=>{
            dates=[result[0].date];
            while(dates[dates.length-1]!=result[result.length-1].date){
                const a=new Date(dates[dates.length-1]);
                a.setDate(a.getDate()+1);
                const bi=(str)=>{
                    if(str<10) str="0"+str;
                    return str;
                };
                dates.push(a.getFullYear()+"-"+bi(a.getMonth()+1)+"-"+bi(a.getDate()));
            }
            return dates;
        })();
    }
    const counter=(countdata)=>{
        if(setting.density) countdata=countdata.filter(val=>val.date==countdata[countdata.length-1].date);
        if(setting.gender!="Both") countdata=countdata.filter(val=>val.gender==setting.gender);
        if(setting.age!="all") countdata=countdata.filter(val=>val.age==setting.age);
        if(setting.status!=0) countdata=countdata.filter(val=>val.status==setting.status);
        const counts=prefectures.map((val,idx)=>{
            let pref=countdata;
            if(idx!=0) pref=countdata.filter(v=>v.pref==idx);
            val.count=pref.reduce((acc,cur)=>acc+cur.count,0);
            val.ratio=val.count/val[setting.gender][setting.age]*100;
            return val;
        });
        /*
        if(setting.age=="all"){
            counts.forEach(val=>{
                val.ratio=val.count/val.all*100;
            });
        }else if(setting.age=="65-"){
            counts.forEach(val=>{
                val.ratio=val.count/val.plus65*100;
            });
        }else if(setting.age=="-64"){
            counts.forEach(val=>{
                val.ratio=val.count/(val.all-val.plus65)*100;
            });
        }
        */
        if(setting.count) counts.sort((a,b)=>b.count-a.count);
        else counts.sort((a,b)=>b.ratio-a.ratio);
        return counts.map(val=>{
            return {
                pref:val.pref,
                count:val.count,
                ratio:val.ratio,
            };
        });
    };
    const count1=counter(result);
    const count2=counter(result.slice(0,result.map(val=>val.date).indexOf(result[result.length-1].date)));
    const count2_pref=count2.filter(v=>v.pref!="全国");
    count1.filter(val=>val.pref!="全国").forEach((val,idx)=>{
        val.rank=count2_pref.map(v=>v.pref).indexOf(val.pref)-idx;
    });
    if(setting.density) count1.forEach(val=>val.ratio=val.ratio.toFixed(3)+"%");
    else count1.forEach(val=>val.ratio=val.ratio.toFixed(1)+"%");
    count1.forEach(val=>val.count=String(val.count)+" 回");
    const zenkoku=count1.map(val=>val.pref).indexOf("全国");
    elem("table").innerHTML=count1.map((val,idx)=>{
        let rank=idx;
        let div="<div class=stay></div>";
        if(idx==zenkoku){
            rank="";
            val.rank=0;
            div="";
        }
        else if(idx<zenkoku) rank=idx+1;
        if(val.rank<0) div="<div class=Arrow-Bottom></div>";
        else if(val.rank>0) div="<div class=Arrow-Top></div>";
        const num=prefectures.map(v=>v.pref).indexOf(val.pref);
        return "<tr onclick=button(['pref',"+String(num)+"]); align=right><td>"+[rank,div].join("</td><td>")+"</td><td class=lefter>"+[Math.abs(val.rank),val.pref,val.count,val.ratio].join("</td><td>")+"</td></tr>";
    }).join("");
};
const map2=()=>{
    let countdata=result;
    if(setting.gender!="Both") countdata=countdata.filter(val=>val.gender==setting.gender);
    if(setting.age!="all") countdata=countdata.filter(val=>val.age==setting.age);
    if(setting.status!=0) countdata=countdata.filter(val=>val.status==setting.status);
    const counts=prefectures.map((val,idx)=>{
        return {
            pref:val.pref,
            values:dates.map(date=> countdata.filter(v=>v.date==date&&v.pref==idx).reduce((acc,cur)=>acc+cur.count,0)),
        };
    }).slice(1,);
    if(!setting.density){
        counts.forEach(val=>{
            val.values=val.values.map((v,idx,arr)=>arr.slice(0,idx+1).reduce((acc,cur)=>cur+acc,0));
        });
    } 
    if(!setting.count){
        counts.forEach((val,idx)=>{
            val.values=val.values.map(v=>v/prefectures[idx+1][setting.gender][setting.age]*100);
        });
    }
    if(setting.ranking){
        dates.forEach((key,idx)=>{
            counts.forEach(val=>{
                val.value=val.values[idx];
            });
            counts.sort((a,b)=>b.value-a.value);
            counts.forEach((val,i)=>{
                val.values[idx]=i+1;
            });
        });
    }
    const data={
        y:"Vaccination",
        series:counts,
        dates:dates.map(d3.utcParse("%Y-%m-%d")),
    };
    const chart=(()=>{
        d3.select("#map2").select("svg").remove();
        const height=600,width=800;
        const margin={
            top:20,
            right:20,
            bottom:30,
            left:40,
        };
        const x=d3.scaleUtc()
            .domain(d3.extent(data.dates))
            .range([margin.left,width-margin.right]);
        let y;
        if(setting.ranking) y=d3.scaleLinear()
            .domain([47,1]).nice()
            .range([height-margin.bottom,margin.top]);
        else y=d3.scaleLinear()
            .domain([0,d3.max(data.series,d=>d3.max(d.values))]).nice()
            .range([height-margin.bottom,margin.top]);
        const xAxis=(g)=>g
            .attr("transform","translate(0,"+String(height-margin.bottom)+")")
            .call(d3.axisBottom(x).ticks(width/80).tickSizeOuter(0));
        const yAxis=(g)=>g
            .attr("transform","translate("+String(margin.left)+",0)")
            .call(d3.axisLeft(y))
            .call(g=>g.select(".domain").remove())
            .call(g=>g.select(".tick:last-of-type text").clone()
                .attr("x",3)
                .attr("text-anchor","start")
                .attr("font-weight","bold")
                .text(data.y)
            );
        const line=d3.line()
            .defined(d=>!isNaN(d))
            .x((d,i)=>x(data.dates[i]))
            .y(d=>y(d));
        const hover=(svg,path)=>{
            const moved=(event)=>{
                event.preventDefault();
                const pointer=d3.pointer(event);
                const xm=x.invert(pointer[0]);
                const ym=y.invert(pointer[1]);
                const i=d3.bisectCenter(data.dates,xm);
                const s=d3.least(data.series,d=>Math.abs(d.values[i]-ym));
                path
                    .attr("stroke",d=>d===s?null:"#ddd")
                    .filter(d=>d===s).raise();
                dot
                    .attr("transform","translate("+x(data.dates[i])+","+y(s.values[i])+")");
                dot.select("text").text(s.pref+": "+String(s.values[i]));
            } 
            const entered=()=>{
                path.style("mix-blend-mode",null).attr("stroke","#ddd");
                dot.attr("display",null);
            }
            const left=()=>{
                path.style("mix-blend-mode","multiply").attr("stroke",null);
                dot.attr("display","none");
            }
            if("ontouchstart" in document) svg
                .style("-webkit-tap-highlight-color","transparent")
                .on("touchmove",moved)
                .on("touchstart",entered)
                .on("touchend",left);
            else svg
                .on("mousemove",moved)
                .on("mouseenter",entered)
                .on("mouseleave",left);
            const dot=svg.append("g")
                .attr("display","none");
            dot.append("circle")
                .attr("r",2.5);
            dot.append("text")
                .attr("font-family","sans-serif")
                .attr("font-size",10)
                .attr("text-anchor","middle")
                .attr("y",-8);
        };
        const svg=d3.select("#map2")
            .append("svg")
            .attr("viewBox",[0,0,width,height])
            .style("overflow","visible");
        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);
        const path=svg.append("g")
                .attr("fill","none")
                .attr("stroke","steelblue")
                .attr("stroke-width",1.5)
                .attr("stroke-linejoin","round")
                .attr("stroke-linecap","round")
                .selectAll("path")
            .data(data.series)
            .join("path")
                .style("mix-blend-mode","multiply")
                .attr("d",d=>line(d.values));
        svg.call(hover,path);
        return svg.node();
    })();
};

const start=()=>{
    elem("count").checked="checked";
    elem("density").checked="checked";
    elem("gender").checked="checked";
    elem("age").checked="checked";
    elem("status").checked="checked";
    elem("ranking").checked="checked";
    elem("popupradio").checked="checked";
    ranking();
    map2();
    elem("up_date").innerText="("+dates[dates.length-1]+")";
}
const download=(file)=>{
    const downloadLink=elem("download");
    const blob=new Blob([JSON.stringify(file)],{type:"application/json"});
    downloadLink.href=URL.createObjectURL(blob);
    downloadLink.download="sample.json";
    downloadLink.click();
};
const parse=()=>{
    a=result.split("\r\n").map((val,idx)=>val.split(",").map((v,i)=>{
        if(idx>1&i>2) v=Number(v);
        return v;
    })).slice(2,146).map(val=>{
        const gender=(str)=>{
            if(str=="男") return "M";
            else if(str=="女") return "F";
            else if(str=="計") return "Both";
        }
        const sum=(arr)=>arr.reduce((acc,cur)=>acc+cur,0);
        return {
            pref:val[1].replace("*",""),
            gender:gender(val[2]),
            age:{
                all:val[3],
                "65-":sum(val.slice(17,)),
                "-64":sum(val.slice(4,17)),
            },
        };
    });
    file=a.filter(val=>val.gender=="Both").map((val,idx)=>{
        return {
            pref:val.pref,
            Both:val.age,
            M:a[3*idx+1].age,
            F:a[3*idx+2].age,
        };
    });
    download(file);
}
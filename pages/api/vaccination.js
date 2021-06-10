const elem=(id)=>document.getElementById(id);
const prefectures=[{"pre":"北海道","all":5381733,"plus65":1558387},{"pre":"青森県","all":1308265,"plus65":390940},{"pre":"岩手県","all":1279594,"plus65":386573},{"pre":"宮城県","all":2333899,"plus65":588240},{"pre":"秋田県","all":1023119,"plus65":343301},{"pre":"山形県","all":1123891,"plus65":344353},{"pre":"福島県","all":1914039,"plus65":542384},{"pre":"茨城県","all":2916976,"plus65":771678},{"pre":"栃木県","all":1974255,"plus65":508392},{"pre":"群馬県","all":1973115,"plus65":540026},{"pre":"埼玉県","all":7266534,"plus65":1788735},{"pre":"千葉県","all":6222666,"plus65":1584419},{"pre":"東京都","all":13515271,"plus65":3005516},{"pre":"神奈川県","all":9126214,"plus65":2158157},{"pre":"新潟県","all":2304264,"plus65":685085},{"pre":"富山県","all":1066328,"plus65":322899},{"pre":"石川県","all":1154008,"plus65":317151},{"pre":"福井県","all":786740,"plus65":222408},{"pre":"山梨県","all":834930,"plus65":234544},{"pre":"長野県","all":2098804,"plus65":626085},{"pre":"岐阜県","all":2031903,"plus65":567571},{"pre":"静岡県","all":3700305,"plus65":1021283},{"pre":"愛知県","all":7483128,"plus65":1760763},{"pre":"三重県","all":1815865,"plus65":501046},{"pre":"滋賀県","all":1412916,"plus65":337877},{"pre":"京都府","all":2610353,"plus65":703419},{"pre":"大阪府","all":8839469,"plus65":2278324},{"pre":"兵庫県","all":5534800,"plus65":1481646},{"pre":"奈良県","all":1364316,"plus65":388614},{"pre":"和歌山県","all":963579,"plus65":296239},{"pre":"鳥取県","all":573441,"plus65":169092},{"pre":"島根県","all":694352,"plus65":222648},{"pre":"岡山県","all":1921525,"plus65":540876},{"pre":"広島県","all":2843990,"plus65":774440},{"pre":"山口県","all":1404729,"plus65":447862},{"pre":"徳島県","all":755733,"plus65":230914},{"pre":"香川県","all":976263,"plus65":286296},{"pre":"愛媛県","all":1385262,"plus65":417186},{"pre":"高知県","all":728276,"plus65":237012},{"pre":"福岡県","all":5101556,"plus65":1304764},{"pre":"佐賀県","all":832832,"plus65":229335},{"pre":"長崎県","all":1377187,"plus65":404686},{"pre":"熊本県","all":1786170,"plus65":511484},{"pre":"大分県","all":1166338,"plus65":351745},{"pre":"宮崎県","all":1104069,"plus65":322975},{"pre":"鹿児島県","all":1648177,"plus65":479734},{"pre":"沖縄県","all":1433566,"plus65":278337}];             
var result,dates;
const loadFile=()=>{
    let reader=new FileReader();
    reader.onload=(event)=>{
        result=event.target.result.split("\n").join(",");
        result=JSON.parse("["+result.substr(0,result.length-1)+"]").map(val=>{
            val.prefecture=Number(val.prefecture)-1;
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
    };
    reader.readAsText(elem("file").files[0],"utf-8");
};
var setting={
    count:true,
    density:true,
    gender:"Both",
    age:"all",
    status:0,
    popup:"gender",
    ranking:true,
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
    elem("popup_pref").innerText=prefectures[num].pre;
    let data=dates.map((date,idx)=>{
        let a;
        if(setting.popup=="gender") a={date:0,M:0,F:0,U:0};
        else if(setting.popup=="age") a={date:0,"65-":0,"-64":0,"UNK":0};
        else if(setting.popup=="status") a={date:0,1:0,2:0};
        a.date=new Date(date);
        let countdata=result;
        if(setting.density) countdata=result.filter(val=>val.date==date);
        else countdata=result.slice(0,result.map(val=>val.date).indexOf(dates[idx+1]));
        countdata
            .filter(val=>val.prefecture==num)
            .forEach((val)=>{
                a[val[setting.popup]]+=val.count;
            });
        return a;
    });
    data.y="Counts";
    data.columns=Object.keys(data[0]).filter(val=>val!="date");
    data.columns.unshift("date");
    d3.select("#map1").select("svg").remove();
    const charts=(()=>{
        const height=300;
        const margin={
            top:20,
            right:30,
            bottom:30,
            left:50,
        };
        let series=d3.stack().keys(data.columns.slice(1))(data);
        let x=d3.scaleUtc()
            .domain(d3.extent(data,d=>d.date))
            .range([margin.left,innerWidth-margin.right]);
        let y=d3.scaleLinear()
            .domain([0,d3.max(series,d=>d3.max(d,d=>d[1]))]).nice()
            .range([height-margin.bottom,margin.top]);
        let xAxis=g=>g
            .attr("transform","translate(0,"+String(height-margin.bottom)+")")
            .call(d3.axisBottom(x).ticks(innerWidth/80).tickSizeOuter(0));
        let yAxis=g=>g
            .attr("transform","translate("+String(margin.left)+",0)")
            .call(d3.axisLeft(y))
            .call(g=>g.select(".domain").remove())
            .call(g=>g.select(".tick:last-of-type text").clone()
                .attr("x",3)
                .attr("text-anchor","start")
                .attr("font-weight","bold")
                .text(data.y)
            );
        let area=d3.area()
            .x(d=>x(d.data.date))
            .y0(d=>y(d[0]))
            .y1(d=>y(d[1]));            
        let color=d3.scaleOrdinal()
            .domain(data.columns.slice(1))
            .range(d3.schemeCategory10);
        let hover=(svg,path)=>{
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
        let svg=d3.select("#map1")
            .append("svg")
            .attr("viewBox",[0,0,innerWidth,height]);
        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);
        let path=svg.append("g")
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
    }
    const counter=(countdata)=>{
        if(setting.density) countdata=countdata.filter(val=>val.date==countdata[countdata.length-1].date);
        if(setting.gender!="Both") countdata=countdata.filter(val=>val.gender==setting.gender);
        if(setting.age!="all") countdata=countdata.filter(val=>val.age==setting.age);
        if(setting.status!=0) countdata=countdata.filter(val=>val.status==setting.status);
        const counts=prefectures.map((val,idx)=>{
            val.count=countdata.filter(v=>v.prefecture==idx).reduce((acc,cur)=>acc+cur.count,0);
            return val;
        });
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
        if(setting.count) counts.sort((a,b)=>b.count-a.count);
        else counts.sort((a,b)=>b.ratio-a.ratio);
        return counts.map(val=>{
            return {
                pref:val.pre,
                count:val.count,
                ratio:val.ratio,
            };
        });
    };
    const count1=counter(result);
    const count2=counter(result.slice(0,result.map(val=>val.date).indexOf(result[result.length-1].date)));
    count1.forEach((val,idx)=>{
        val.rank=count2.map(v=>v.pref).indexOf(val.pref)-idx;
    });
    if(setting.density) count1.forEach(val=>val.ratio=(val.ratio*1000).toFixed(1)+"/1e5");
    else count1.forEach(val=>val.ratio=val.ratio.toFixed(1)+"%");
    count1.forEach(val=>val.count=String(val.count)+" 回");
    elem("table").innerHTML=count1.map((val,idx)=>{
        let div="<div class=Arrow-Top></div>";
        if(val.rank<0) div="<div class=Arrow-Bottom></div>";
        else if(val.rank==0) div="<div class=stay></div>";
        const num=prefectures.map(v=>v.pre).indexOf(val.pref);
        return "<tr onclick=button(['pref',"+String(num)+"]); align=right><td>"+[idx+1,div].join("</td><td>")+"</td><td class=lefter>"+[Math.abs(val.rank),val.pref,val.count,val.ratio].join("</td><td>")+"</td></tr>";
    }).join("");
};
const map2=()=>{
    let countdata=result;
    if(setting.gender!="Both") countdata=countdata.filter(val=>val.gender==setting.gender);
    if(setting.age!="all") countdata=countdata.filter(val=>val.age==setting.age);
    if(setting.status!=0) countdata=countdata.filter(val=>val.status==setting.status);
    let dates=[countdata[0].date];
    while(dates[dates.length-1]!=countdata[countdata.length-1].date){
        let a=new Date(dates[dates.length-1]);
        a.setDate(a.getDate()+1);
        const bi=(str)=>{
            if(str<10) str="0"+str;
            return str;
        };
        dates.push(a.getFullYear()+"-"+bi(a.getMonth()+1)+"-"+bi(a.getDate()));
    }
    let counts=prefectures.map((val,idx)=>{
        return {
            pref:val.pre,
            values:dates.map(date=> countdata.filter(v=>v.date==date&&v.prefecture==idx).reduce((cur,now)=>cur+now.count,0)),
        };
    });
    if(!setting.density){
        counts.forEach(val=>{
            val.values=val.values.map((v,idx,arr)=>arr.slice(0,idx+1).reduce((acc,cur)=>cur+acc,0));
        });
    } 
    if(!setting.count){
        if(setting.age=="all"){
            counts.forEach((val,idx)=>{
            val.values=val.values.map(v=>v/prefectures[idx].all);
        });
        }else if(setting.age=="65-"){
            counts.forEach((val,idx)=>{
                val.values=val.values.map(v=>v/prefectures[idx].plus65);
            });
        }else if(setting.age=="-64"){
            counts.forEach((val,idx)=>{
                val.values=val.values.map(v=>v/(prefectures[idx].all-prefectures[idx].plus65));
            });
        }
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
    let data={
        y:"Vaccination",
        series:counts,
        dates:dates.map(d3.utcParse("%Y-%m-%d")),
    };
    const chart=(()=>{
        d3.select("#map2").select("svg").remove();
        let height=600;
        let margin={
            top:20,
            right:20,
            bottom:30,
            left:40,
        };
        let x=d3.scaleUtc()
            .domain(d3.extent(data.dates))
            .range([margin.left,innerWidth-margin.right]);
        let y;
        if(setting.ranking) y=d3.scaleLinear()
            .domain([47,1]).nice()
            .range([height-margin.bottom,margin.top]);
        else y=d3.scaleLinear()
            .domain([0,d3.max(data.series,d=>d3.max(d.values))]).nice()
            .range([height-margin.bottom,margin.top]);
        let xAxis=(g)=>g
            .attr("transform","translate(0,"+String(height-margin.bottom)+")")
            .call(d3.axisBottom(x).ticks(innerWidth/80).tickSizeOuter(0));
        let yAxis=(g)=>g
            .attr("transform","translate("+String(margin.left)+",0)")
            .call(d3.axisLeft(y))
            .call(g=>g.select(".domain").remove())
            .call(g=>g.select(".tick:last-of-type text").clone()
                .attr("x",3)
                .attr("text-anchor","start")
                .attr("font-weight","bold")
                .text(data.y)
            );
        let line=d3.line()
            .defined(d=>!isNaN(d))
            .x((d,i)=>x(data.dates[i]))
            .y(d=>y(d));
        let hover=(svg,path)=>{
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
        let svg=d3.select("#map2")
            .append("svg")
            .attr("viewBox",[0,0,innerWidth,height])
            .style("overflow","visible");
        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);
        let path=svg.append("g")
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
    elem("popup").checked="checked";
    ranking();
    map2();
}
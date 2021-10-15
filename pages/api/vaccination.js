const elem=(id)=>document.getElementById(id);
const prefectures=[{"pref":"全国","Both":{"all":127138033,"65-":35486813,"-64":91651156},"M":{"all":62036028,"65-":15436335,"-64":46599675},"F":{"all":65102005,"65-":20050478,"-64":45051481}},{"pref":"北海道","Both":{"all":5267762,"65-":1656347,"-64":3609378},"M":{"all":2488629,"65-":693358,"-64":1794586},"F":{"all":2779133,"65-":962989,"-64":1814792}},{"pref":"青森県","Both":{"all":1275783,"65-":417143,"-64":858272},"M":{"all":604405,"65-":171815,"-64":432520},"F":{"all":671378,"65-":245328,"-64":425752}},{"pref":"岩手県","Both":{"all":1235517,"65-":405394,"-64":829808},"M":{"all":594846,"65-":171056,"-64":423715},"F":{"all":640671,"65-":234338,"-64":406093}},{"pref":"宮城県","Both":{"all":2292385,"65-":635388,"-64":1656909},"M":{"all":1117911,"65-":277081,"-64":840787},"F":{"all":1174474,"65-":358307,"-64":816122}},{"pref":"秋田県","Both":{"all":985416,"65-":360083,"-64":624996},"M":{"all":465346,"65-":149120,"-64":316148},"F":{"all":520070,"65-":210963,"-64":308848}},{"pref":"山形県","Both":{"all":1082296,"65-":358208,"-64":723582},"M":{"all":522624,"65-":154455,"-64":368102},"F":{"all":559672,"65-":203753,"-64":355480}},{"pref":"福島県","Both":{"all":1881981,"65-":576837,"-64":1304347},"M":{"all":923403,"65-":251178,"-64":672005},"F":{"all":958578,"65-":325659,"-64":632342}},{"pref":"茨城県","Both":{"all":2921436,"65-":839989,"-64":2081444},"M":{"all":1464779,"65-":379935,"-64":1084843},"F":{"all":1456657,"65-":460054,"-64":996601}},{"pref":"栃木県","Both":{"all":1965516,"65-":555063,"-64":1410452},"M":{"all":983189,"65-":248777,"-64":734412},"F":{"all":982327,"65-":306286,"-64":676040}},{"pref":"群馬県","Both":{"all":1969439,"65-":576463,"-64":1392892},"M":{"all":976529,"65-":255937,"-64":720570},"F":{"all":992910,"65-":320526,"-64":672322}},{"pref":"埼玉県","Both":{"all":7390054,"65-":1935968,"-64":5454075},"M":{"all":3696958,"65-":877763,"-64":2819190},"F":{"all":3693096,"65-":1058205,"-64":2634885}},{"pref":"千葉県","Both":{"all":6319772,"65-":1702637,"-64":4617076},"M":{"all":3153116,"65-":767299,"-64":2385795},"F":{"all":3166656,"65-":935338,"-64":2231281}},{"pref":"東京都","Both":{"all":13834925,"65-":3122050,"-64":10712754},"M":{"all":6805301,"65-":1356032,"-64":5449224},"F":{"all":7029624,"65-":1766018,"-64":5263530}},{"pref":"神奈川県","Both":{"all":9209442,"65-":2304899,"-64":6904488},"M":{"all":4594239,"65-":1029806,"-64":3564407},"F":{"all":4615203,"65-":1275093,"-64":3340081}},{"pref":"新潟県","Both":{"all":2236042,"65-":715891,"-64":1520002},"M":{"all":1086237,"65-":308982,"-64":777207},"F":{"all":1149805,"65-":406909,"-64":742795}},{"pref":"富山県","Both":{"all":1055999,"65-":334940,"-64":721058},"M":{"all":512805,"65-":142493,"-64":370311},"F":{"all":543194,"65-":192447,"-64":350747}},{"pref":"石川県","Both":{"all":1139612,"65-":333053,"-64":806559},"M":{"all":552621,"65-":142661,"-64":409960},"F":{"all":586991,"65-":190392,"-64":396599}},{"pref":"福井県","Both":{"all":780053,"65-":232456,"-64":547581},"M":{"all":379141,"65-":100663,"-64":278464},"F":{"all":400912,"65-":131793,"-64":269117}},{"pref":"山梨県","Both":{"all":826579,"65-":249117,"-64":577363},"M":{"all":405480,"65-":109253,"-64":296174},"F":{"all":421099,"65-":139864,"-64":281189}},{"pref":"長野県","Both":{"all":2087307,"65-":650867,"-64":1436003},"M":{"all":1020093,"65-":285867,"-64":734098},"F":{"all":1067214,"65-":365000,"-64":701905}},{"pref":"岐阜県","Both":{"all":2032490,"65-":600871,"-64":1431546},"M":{"all":990526,"65-":263927,"-64":726580},"F":{"all":1041964,"65-":336944,"-64":704966}},{"pref":"静岡県","Both":{"all":3708556,"65-":1087483,"-64":2620959},"M":{"all":1833956,"65-":481310,"-64":1352612},"F":{"all":1874600,"65-":606173,"-64":1268347}},{"pref":"愛知県","Both":{"all":7575530,"65-":1873042,"-64":5702425},"M":{"all":3798329,"65-":837664,"-64":2960642},"F":{"all":3777201,"65-":1035378,"-64":2741783}},{"pref":"三重県","Both":{"all":1813859,"65-":529547,"-64":1284104},"M":{"all":888711,"65-":231449,"-64":657243},"F":{"all":925148,"65-":298098,"-64":626861}},{"pref":"滋賀県","Both":{"all":1420948,"65-":365681,"-64":1055230},"M":{"all":702078,"65-":162971,"-64":539097},"F":{"all":718870,"65-":202710,"-64":516133}},{"pref":"京都府","Both":{"all":2545899,"65-":737018,"-64":1808810},"M":{"all":1220157,"65-":316247,"-64":903878},"F":{"all":1325742,"65-":420771,"-64":904932}},{"pref":"大阪府","Both":{"all":8849635,"65-":2378447,"-64":6471166},"M":{"all":4269330,"65-":1028580,"-64":3240740},"F":{"all":4580305,"65-":1349867,"-64":3230426}},{"pref":"兵庫県","Both":{"all":5549568,"65-":1566196,"-64":3983371},"M":{"all":2660257,"65-":675204,"-64":1985052},"F":{"all":2889311,"65-":890992,"-64":1998319}},{"pref":"奈良県","Both":{"all":1353837,"65-":416789,"-64":936857},"M":{"all":642835,"65-":181334,"-64":461414},"F":{"all":711002,"65-":235455,"-64":475443}},{"pref":"和歌山県","Both":{"all":954258,"65-":308934,"-64":645012},"M":{"all":451835,"65-":130358,"-64":321326},"F":{"all":502423,"65-":178576,"-64":323686}},{"pref":"鳥取県","Both":{"all":561175,"65-":176788,"-64":384256},"M":{"all":268605,"65-":74446,"-64":194121},"F":{"all":292570,"65-":102342,"-64":190135}},{"pref":"島根県","Both":{"all":679324,"65-":229369,"-64":449708},"M":{"all":326391,"65-":97219,"-64":229123},"F":{"all":352933,"65-":132150,"-64":220585}},{"pref":"岡山県","Both":{"all":1903627,"65-":566122,"-64":1337382},"M":{"all":919966,"65-":243665,"-64":676258},"F":{"all":983661,"65-":322457,"-64":661124}},{"pref":"広島県","Both":{"all":2826858,"65-":816324,"-64":2010494},"M":{"all":1372858,"65-":351988,"-64":1020859},"F":{"all":1454000,"65-":464336,"-64":989635}},{"pref":"山口県","Both":{"all":1369882,"65-":464980,"-64":904877},"M":{"all":651350,"65-":195006,"-64":456340},"F":{"all":718532,"65-":269974,"-64":448537}},{"pref":"徳島県","Both":{"all":742505,"65-":242908,"-64":499479},"M":{"all":354885,"65-":104318,"-64":250527},"F":{"all":387620,"65-":138590,"-64":248952}},{"pref":"香川県","Both":{"all":981280,"65-":301588,"-64":679673},"M":{"all":475122,"65-":130429,"-64":344688},"F":{"all":506158,"65-":171159,"-64":334985}},{"pref":"愛媛県","Both":{"all":1369131,"65-":441678,"-64":927349},"M":{"all":650114,"65-":185730,"-64":464361},"F":{"all":719017,"65-":255948,"-64":462988}},{"pref":"高知県","Both":{"all":709230,"65-":245686,"-64":463168},"M":{"all":335068,"65-":102560,"-64":232362},"F":{"all":374162,"65-":143126,"-64":230806}},{"pref":"福岡県","Both":{"all":5129841,"65-":1396860,"-64":3732855},"M":{"all":2441112,"65-":585541,"-64":1855505},"F":{"all":2688729,"65-":811319,"-64":1877350}},{"pref":"佐賀県","Both":{"all":823810,"65-":244686,"-64":579092},"M":{"all":391579,"65-":102969,"-64":288602},"F":{"all":432231,"65-":141717,"-64":290490}},{"pref":"長崎県","Both":{"all":1350769,"65-":433727,"-64":916955},"M":{"all":636703,"65-":181380,"-64":455290},"F":{"all":714066,"65-":252347,"-64":461665}},{"pref":"熊本県","Both":{"all":1769880,"65-":542906,"-64":1226752},"M":{"all":839522,"65-":229642,"-64":609801},"F":{"all":930358,"65-":313264,"-64":616951}},{"pref":"大分県","Both":{"all":1151229,"65-":372287,"-64":778901},"M":{"all":547650,"65-":157011,"-64":390624},"F":{"all":603579,"65-":215276,"-64":388277}},{"pref":"宮崎県","Both":{"all":1095903,"65-":347417,"-64":748351},"M":{"all":518860,"65-":147382,"-64":371423},"F":{"all":577043,"65-":200035,"-64":376928}},{"pref":"鹿児島県","Both":{"all":1630146,"65-":512711,"-64":1117047},"M":{"all":769447,"65-":218674,"-64":550684},"F":{"all":860699,"65-":294037,"-64":566363}},{"pref":"沖縄県","Both":{"all":1481547,"65-":323501,"-64":1157708},"M":{"all":731130,"65-":145610,"-64":585344},"F":{"all":750417,"65-":177891,"-64":572364}}];
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
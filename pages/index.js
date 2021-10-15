import	Head	from	'next/head'
import	styles	from	'../styles/Home.module.css';

export	async	function	getStaticProps()	{
	const	res	=	await	fetch("http://vrs-data.cio.go.jp/vaccination/opendata/latest/prefecture.ndjson");
	if(!res.ok)	throw	new	Error();
	const	text	=	(await	res.text()).replace(/\n/g,",").replace(/,$/,"");
	const	arr=JSON.parse("\["+text+"\]").map(val=>{
		return	{
			a:val.age=="65-"?"t":"f",
			c:val.count,
			d:val.date,
			g:val.gender,
			p:Number(val.prefecture),
			s:val.status,
		};
	});//.filter(val=>val.date<"2021-10-01");
	console.log(arr.length);
	return	{
		props:{
			arr
		},
		revalidate:1,
	};
}

function	Home(props){
	if(props){
		const	str=JSON.stringify(props.arr);
//		return	(<div>{str.slice(0,1000)}</div>)
		const	button=(event)=>{
			const	arr=event.target.value.split(",");
			if(arr[1]=="true")	arr[1]=true;
			else	if(arr[1]=="false")	arr[1]=false;
			setting[arr[0]]=arr[1];
			if(result){
				if(["popup","pref"].includes(arr[0])){
					popup();
				}else	if(arr[0]=="ranking"){
					map2();
				}else{
					ranking();
					map2();
				}
				if(elem("popup").className=="popup")	popup();
			}else	console.log(setting);
		}
		const	close=()=>{
			elem("popup").className="invisible";
		}
		return	(
			<div	className={styles.container}>
				<Head>
					<title>Vaccination</title>
					<meta	name="description"	content="Generated	by	create	next	app"	/>
					<link	rel="stylesheet"	href="https://onekodate.web.fc2.com/vaccination.css"/>
					<script	src="https://d3js.org/d3.v7.js"></script>
					<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
					<script	src="https://onekodate.web.fc2.com/vaccination.js"></script>
				<script>
					result={str};
					start();
				</script>
				</Head>
				<div	className="body">
					<div	className="menu">
						<label><input	type="radio"	name="count"	onChange={button}	value="count,false"		id="count"	></input><em>比率</em></label>
						<label><input	type="radio"	name="count"	onChange={button}	value="count,true"					></input><em>回数</em></label><br></br>
						<label><input	type="radio"	name="density"	onChange={button}	value="density,false"	id="density"></input><em>累積</em></label>
						<label><input	type="radio"	name="density"	onChange={button}	value="density,true"				></input><em>日別</em></label><br></br>
						<label><input	type="radio"	name="gender"	onChange={button}	value="gender,Both"		id="gender"	></input><em>全性別</em></label>
						<label><input	type="radio"	name="gender"	onChange={button}	value="gender,M"					></input><em>男性</em></label>
						<label><input	type="radio"	name="gender"	onChange={button}	value="gender,F"					></input><em>女性</em></label><br></br>
						<label><input	type="radio"	name="age"		onChange={button}	value="age,all"			id="age"	></input><em>全年齢</em></label>
						<label><input	type="radio"	name="age"		onChange={button}	value="age,65-"						></input><em>65+</em></label>
						<label><input	type="radio"	name="age"		onChange={button}	value="age,-64"						></input><em>64-</em></label><br></br>
						<label><input	type="radio"	name="status"	onChange={button}	value="status,0"					></input><em>総回数</em></label>
						<label><input	type="radio"	name="status"	onChange={button}	value="status,1"					></input><em>1回目</em></label>
						<label><input	type="radio"	name="status"	onChange={button}	value="status,2"		id="status"	></input><em>2回目</em></label><br></br>	
					</div>
					<div	className="main">
						<p>都道府県ワクチン接種ランキング<b	id="up_date"></b></p>
						<table	className="ranking">
							<thead>
								<tr>
									<th>#</th><th>	</th><th>	</th><th>都道府県</th><th><a	onClick={button}	value="count,true">回数</a></th><th><a	onClick={button}	value="count,false">比率</a></th>
								</tr>
							</thead>
							<tbody	id="table">
								<tr>
									<th>1</th><th>↑</th><th>東京都</th><th>18%</th><th>120人</th>
								</tr>
							</tbody>
						</table>
						<p>
							<label><input	type="radio"	name="ranking"	onChange={button}	value="ranking,false"	id="ranking"></input><em>絶対数</em></label>
							<label><input	type="radio"	name="ranking"	onChange={button}	value="ranking,true"></input><em>順位</em></label><br></br>
						</p>
						<div	id="map2"></div>
						<div	className="invisible"	id="popup">	
							<p><b	id="popup_pref"></b>　　<a	onClick={close}>Close</a></p>
							<p>
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,gender"></input><em>性別</em></label>
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,age"	id="popupradio"></input><em>年齢</em></label>
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,status"></input><em>何回目</em></label>
							</p>
							<div	id="map1"></div>
						</div>
						<p	className="left">
							<a	target="_blank"	href="https://cio.go.jp/c19vaccine_dashboard">政府のオープンデータを利用しています。</a><br></br>
							<a	target="_blank"	href="https://www.kantei.go.jp/jp/headline/kansensho/vaccine.html">官邸もExcelファイルを公開しているが履歴データはなし。</a><br></br>
							<a	target="_blank"	href="https://www.soumu.go.jp/main_sosiki/jichi_gyousei/daityo/jinkou_jinkoudoutai-setaisuu.html">人口データは令和3年1月1日住民基本台帳から。</a><br></br>
							<a	target="_blank"	href="https://mainichi.jp/articles/20210418/k00/00m/040/107000c">#オリンピックよりもこっちのレースの方が盛り上がるに決まってるだろ</a><br></br>
							<a	target="_blank"	href="https://www.jacom.or.jp/column/2021/05/210506-51058.php">#市町村別ワクチン接種者数APIを公開して💕</a><br></br>
							<a	target="_blank"	href="https://mstdn.beer/@onekodate">お問い合わせはこちらまで、気軽に報告要望ください。</a><br></br>
							<a	target="_blank"	href="https://github.com/onekodate/vaccination">ソースコードhttps://github.com/onekodate/vaccination</a><br></br>
							<a	target="_blank"	href="https://lets-go-vaccine-jp.vercel.app">参考にしたものhttps://lets-go-vaccine-jp.vercel.app/</a>
						</p>
					</div>
				</div>
				<a	id="download"></a>
			</div>
		);
	}else	return	(<div>Loading...</div>);
}

export	default	Home;
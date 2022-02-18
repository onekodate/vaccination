import Head from 'next/head'
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
	const res = await fetch("https://data.vrs.digital.go.jp/vaccination/opendata/latest/prefecture.ndjson");
	if(!res.ok) throw new Error();
	const text = (await res.text()).replace(/\n/g,",").replace(/,$/,"");
	const arr=JSON.parse("\["+text+"\]").map(val=>{
		return [
			val.age=="65-"?"t":"f",
			val.count,
			val.date,
			val.gender,
			Number(val.prefecture),
			val.status,
		];
	});//.filter(val=>val.date<"2021-10-01");
	console.log(arr.length);
	return {
		props:{
			arr
		},
		revalidate:1,
	};
}

function Home(props){
	if(props){
		const str=JSON.stringify(props.arr);
		const button=(event)=>{
			const arr=event.target.value.split(",");
			arr[1]=(arr[1]=="true")?true
				:(arr[1]=="false")?false
				:arr[0]==="status"?Number(arr[1])
				:arr[1];
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
		};
		const close=()=>{
			elem("popup").style.display="none";
		};
		return (
			<div className={styles.container}>
				<Head>
					<title>Vaccination</title>
					<meta name="description" content="Generated by create next app" />
					<script src="https://d3js.org/d3.v7.js"></script>
					<script src="https://onekodate.web.fc2.com/vaccination.js"></script>
				<script>
					result={str};
					start();
				</script>
				</Head>
				<div className="body">
					<div className="menu">
						<p>
							<label><input	type="radio"	name="count"	onChange={button}	value="count,false"	id="count"	></input><em>比率</em></label>
							<label><input	type="radio"	name="count"	onChange={button}	value="count,true"						></input><em>回数</em></label>
						</p>
						<p>
							<label><input	type="radio"	name="density"	onChange={button}	value="density,false"	id="density"></input><em>累積</em></label>
							<label><input	type="radio"	name="density"	onChange={button}	value="density,true"					></input><em>日別</em></label>
						</p>
						<p>
							<label><input	type="radio"	name="gender"	onChange={button}	value="gender,Both"	id="gender"	></input><em>全性別</em></label>
							<label><input	type="radio"	name="gender"	onChange={button}	value="gender,M"						></input><em>男性</em></label>
							<label><input	type="radio"	name="gender"	onChange={button}	value="gender,F"						></input><em>女性</em></label>
						</p>
						<p>
							<label><input	type="radio"	name="age"		onChange={button}	value="age,all"		id="age"	></input><em>全年齢</em></label>
							<label><input	type="radio"	name="age"		onChange={button}	value="age,65-"							></input><em>65+</em></label>
							<label><input	type="radio"	name="age"		onChange={button}	value="age,-64"							></input><em>64-</em></label>
						</p>
						<p>
							<label><input	type="radio"	name="status"	onChange={button}	value="status,0"						></input><em>総回数</em></label>
							<label><input	type="radio"	name="status"	onChange={button}	value="status,1"						></input><em>1回目</em></label>
							<label><input	type="radio"	name="status"	onChange={button}	value="status,2"						></input><em>2回目</em></label>	
							<label><input	type="radio"	name="status"	onChange={button}	value="status,3"	id="status"	></input><em>3回目</em></label>
						</p>
					</div>
					<div className="main">
						<p className="center">都道府県ワクチン接種ランキング<b id="up_date"></b></p>
						<table className="ranking">
							<thead>
								<tr>
									<th>#</th><th>	</th><th>	</th><th>都道府県</th><th>回数</th><th>比率</th>
								</tr>
							</thead>
							<tbody	id="table">
							</tbody>
						</table>
						<p className="center">
							<label><input	type="radio"	name="ranking"	onChange={button}	value="ranking,false"	id="ranking"></input><em>絶対数</em></label>
							<label><input	type="radio"	name="ranking"	onChange={button}	value="ranking,true"	></input><em>順位</em></label><br></br>
						</p>
						<div id="map2"></div>
						<div id="popup" style={{display:"none"}}>	
							<p className="center"><b	id="popup_pref"></b>　　<a	onClick={close}>Close</a></p>
							<p className="center">
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,gender"	></input><em>Gender</em></label>
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,age"		></input><em>Age</em></label>
								<label><input	type="radio"	name="popup"	onChange={button}	value="popup,status"	id="popupradio"></input><em>Status</em></label>
							</p>
							<div	id="map1"></div>
						</div>
						<div>
							<p>オープンデータの所管がデジタル庁に移管されていました。出典はデジタル庁: <a	target="_blank"	href="https://info.vrs.digital.go.jp/dashboard">https://info.vrs.digital.go.jp/dashboard</a></p>
							<p>官邸もExcelファイルを公開していますが履歴データはありません。<a	target="_blank"	href="https://www.kantei.go.jp/jp/headline/kansensho/vaccine.html">https://www.kantei.go.jp/jp/headline/kansensho/vaccine.html</a></p>
							<p>人口データは令和3年1月1日住民基本台帳を利用しています。出典は総務省: <a	target="_blank"	href="https://www.soumu.go.jp/main_sosiki/jichi_gyousei/daityo/jinkou_jinkoudoutai-setaisuu.html">https://www.soumu.go.jp/main_sosiki/jichi_gyousei/daityo/jinkou_jinkoudoutai-setaisuu.html</a></p>
							<p>お問い合わせはこちらまで、気軽に報告要望ください。<a	target="_blank"	href="https://mstdn.beer/@onekodate">https://mstdn.beer/@onekodate</a></p>
							<p>ソースコード: <a	target="_blank"	href="https://github.com/onekodate/vaccination">https://github.com/onekodate/vaccination</a></p>
						</div>
					</div>
				</div>
				<a	id="download"></a>
			</div>
		);
	}else	return	(<div>Loading...</div>);
}

export	default	Home;
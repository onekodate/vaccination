import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.css'
import { url } from '../lib/constants'
import { useEffect, useRef, useCallback } from 'react'
import crypto from 'crypto'
import styles from './svg.module.css'
function Syringe() {
    return (
      <svg
        aria-hidden={true}
        xmlns='http://www.w3.org/2000/svg'
        className={styles.svg}
        viewBox='0 0 36 36'
      >
        <path
          fill='#CCD6DD'
          d='M27.071 9.929c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414 0 0 8.802-8.168 9.192-7.778.391.391-7.778 9.192-7.778 9.192-.195.195-.451.293-.707.293z'
        />
        <path
          fill='#ADD3E0'
          d='M28.839 11.404c-.586.586-1.536.585-2.121 0l-2.121-2.121c-.586-.586-.586-1.536 0-2.122C25.182 6.575 28.414 5.414 29 6l1 1c.586.585-.575 3.818-1.161 4.404z'
        />
        <path
          fill='#C1E1EA'
          d='M17.464 25.606c-.781.781-2.047.781-2.828 0l-4.243-4.242c-.781-.781-.781-2.048 0-2.829l12.021-12.02c.781-.781 2.048-.781 2.828 0l4.243 4.243c.781.781.781 2.047 0 2.829L17.464 25.606z'
        />
        <path
          fill='#D2ECF3'
          d='M10.394 21.364c-.781-.781-.781-2.048 0-2.829l12.02-12.02c.781-.781 2.048-.781 2.828 0L10.394 21.364z'
        />
        <path
          fill='#CCD6DD'
          d='M7.272 32.971L3.03 28.728l11.777-11.777 4.243 4.241z'
        />
        <path
          fill='#99AAB5'
          d='M7.747 35.324c-.585.586-1.536.586-2.122 0l-4.95-4.95c-.586-.586-.585-1.535 0-2.121.585-.586 1.536-.586 2.122 0l4.95 4.95c.586.585.586 1.535 0 2.121zm10.071-7.243c-.585.586-1.536.586-2.121 0l-7.778-7.777c-.586-.586-.585-1.536 0-2.122.585-.586 1.536-.586 2.122 0l7.778 7.778c.585.586.585 1.536-.001 2.121z'
        />
        <path
          fill='#292F33'
          d='M14.322 14.607l-1.042 1.042.04.04 7.035 7.035 1.042-1.042z'
        />
        <path
          fill='#66757F'
          d='M14.322 14.607l-1.042 1.042.04.04 1.374 1.374 1.042-1.042zm8.291 3.333c-.288.288-.288.754 0 1.042l.742.742 1.042-1.042-.742-.742c-.288-.288-.754-.288-1.042 0zm1.875-1.875c-.288.288-.288.754 0 1.042l.742.742 1.042-1.042-.742-.742c-.288-.288-.754-.288-1.042 0zm2.917-1.875c-.288-.288-.755-.288-1.042 0-.288.288-.288.754 0 1.042l.742.742 1.042-1.042-.742-.742z'
        />
      </svg>
    )
  }
function GitHub() {
  return (
    <svg
      aria-hidden={true}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      className={styles.svg}
    >
      <path
        fillRule='evenodd'
        fill='rgb(107, 114, 128)'
        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
      ></path>
    </svg>
  )
}
function Twitter() {
  return (
    <svg
      aria-hidden={true}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 248 204'
      className={styles.svg}
    >
      <path
        fill='#fff'
        d='M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z'
      />
    </svg>
  )
}
const description = '新型コロナワクチン 高齢者等1日当たり接種回数'
const title = '💉レッツゴーワクチン(仮)💉'
const tweetIds = [
  '1398454311663718400',
  '1398456142695571458',
  '1398456864535302145',
  '1398459461077925889',
  '1398465619738075138',
  '1398840305034481666'
]

export default function Home({
  year,
  month,
  day,
  prevYear,
  prevMonth,
  prevDay,
  firstYear,
  firstMonth,
  firstDay,
  avg,
  prevAvg,
  latestChange,
  dateCacheKey,
  ratio,
  dayOfWeek,
  table,
  total
}) {
  const { query, replace, isReady } = useRouter()
  useEffect(() => {
    if (isReady && (!query.v || query.v !== dateCacheKey) && !query.share) {
      replace(`/?v=${dateCacheKey}`)
    }
  }, [isReady, replace, query.v, query.share, dateCacheKey])
  const divRef = useRef()
  const onScrollClick = useCallback(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [divRef.current])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:locale' content='ja_JP' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={title} />
        <meta name='twitter:creator' content='@chibicode' />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:description' content={description} />
        <meta name='description' content={description} />
        <meta
          property='og:image'
          content={`${url}/api/og/${dateCacheKey}`}
        ></meta>
        <link rel='icon' href='/1f489.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=DotGothic16&display=swap'
          rel='stylesheet'
        />
        {isReady && !query.share && (
          <script
            async
            src='https://platform.twitter.com/widgets.js'
            charset='utf-8'
          />
        )}
      </Head>
      <div className='text-gray-900 xs:tracking-wider'>
        <div className={`min-h-screen flex flex-col ${styles.bg}`}>
          <header className='text-center pb-3 xs:pb-4 sm:pb-5 pt-2 xs:pt-3 sm:pt-4 px-4 text-xl xs:text-2xl sm:text-3xl  bg-green-50'>
            <h1>
              <Syringe />
              <span className={`${styles.greenHighlight} align-middle`}>
                レッツゴーワクチン
                <span className='text-gray-500'>(仮)</span>
              </span>
              <Syringe />
            </h1>
          </header>
          <main className='text-center py-8 px-1 sm:px-2 flex-1 flex items-center'>
            <div className='w-full'>
              <div className='mb-7'>
                <h4 className='text-base xs:text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3'>
                  コロナワクチン<span className='hidden xs:inline'> </span>
                  高齢者等
                  <span className={styles.blueHighlight}>1日当たり</span>
                  接種回数
                </h4>
                <h3 className='text-lg xs:text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4'>
                  {prevYear}/
                  <span className={styles.blueHighlight}>
                    {prevMonth}/{prevDay}〜{prevYear !== year ? `${year}/` : ''}
                    {month}/{day}
                  </span>
                  <span className='text-base xs:text-lg sm:text-xl md:text-2xl ml-1'>
                    の直近7日間平均
                  </span>
                </h3>
                <h6 className='text-xxs xs:text-xs sm:text-sm md:text-base text-gray-500'>
                  ※四捨五入。医療従事者を除く(
                  <a
                    href='https://cio.go.jp/c19vaccine_opendata'
                    target='_blank'
                    className='hover:underline'
                    rel='noopener'
                  >
                    データ元
                  </a>
                  未対応)
                </h6>
              </div>
              <h2 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 md:mb-8'>
                <Syringe />
                <span className='align-middle'>
                  <span className={styles.yellowHighlight}>約{avg}万回</span>
                </span>
                <Syringe />
              </h2>
              <h4 className='text-base xs:text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12'>
                {month}/{day}({dayOfWeek}):
                <span className={`${styles.greenHighlight} ml-1`}>
                  +{latestChange}万
                </span>
              </h4>
              <h3 className='text-lg xs:text-xl sm:text-2xl md:text-3xl'>
                前週平均:
                <span className={styles.yellowHighlight}>約{prevAvg}万回</span>
                <span className='text-base xs:text-lg sm:text-xl md:text-2xl ml-1'>
                  (前週比:
                  <span
                    className={`${
                      ratio > 1 ? styles.greenHighlight : styles.redHighlight
                    }`}
                  >
                    {ratio}倍
                  </span>
                  )
                </span>
              </h3>
              {query.share ? (
                <div id='share' />
              ) : (
                <div className='mt-12'>
                  <div className='flex justify-center mb-6'>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `${url}/?v=${dateCacheKey}`
                      )}&text=${encodeURIComponent(
                        `#レッツゴーワクチン 高齢者等1日当たり接種回数
${prevMonth}/${prevDay}〜${
                          prevYear !== year ? `${year}/` : ''
                        }${month}/${day}の直近1週間平均: 約${avg}万回 (前週比${ratio}倍)`
                      )}`}
                      className='mx-1 border border-transparent focus:ring-offset-2 inline-flex items-center text-white px-5 text-sm xs:text-base sm:text-lg py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 hover:border-gray-900'
                      style={{ background: '#1D9BF0' }}
                      target='_blank'
                      rel='noopener'
                    >
                      <span className='inline-flex mr-1 -ml-1 text-2xl'>
                        <Twitter />
                      </span>
                      ツイート
                    </a>
                    <a
                      href='https://github.com/chibicode/lets-go-vaccine-jp'
                      className='mx-1 border border-transparent focus:ring-offset-2 inline-flex items-center px-4 sm:px-5 text-sm xs:text-base sm:text-lg py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 bg-gray-100 hover:border-gray-900'
                      target='_blank'
                      rel='noopener'
                    >
                      <span
                        className='inline-flex mr-1 -ml-1 text-3xl'
                        style={{ marginTop: '-1px' }}
                      >
                        <GitHub />
                      </span>
                      ソース
                      <span className='sm:text-xs text-xxs inline-flex mt-1'>
                        (Next.js)
                      </span>
                    </a>
                  </div>
                  <div className='text-xxs xs:text-xs sm:text-sm md:text-base text-gray-600'>
                    <div className='mb-1'>
                      <button
                        onClick={onScrollClick}
                        className='hover:underline tracking-wider'
                        target='_blank'
                        rel='noopener'
                      >
                        スクロールして詳しい接種状況を表示
                      </button>
                    </div>
                    <div>
                      <span className={styles.pointDownArrow}>↓</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
          <footer className='bg-gray-50'>
            <div className='text-center py-4 text-gray-500 text-xxs leading-loose px-3 sm:px-4'>
              データ入力の遅れにより過去の接種回数が変更される場合があります。
              <br className='hidden xs:block lg:hidden' />
              データ:
              <a
                href='https://cio.go.jp/c19vaccine_opendata'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                政府CIOポータル「新型コロナワクチンの接種状況」
              </a>
              (
              <a
                href='https://creativecommons.org/licenses/by/4.0/deed.ja'
                target='_blank'
                className='hover:underline'
                rel='noopener'
              >
                CC BY 4.0
              </a>
              )<span className='inline xs:hidden md:inline'>・</span>
              <br className='hidden xs:block md:hidden' />
              絵文字:
              <a
                href='https://github.com/twitter/twemoji'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                Twemoji
              </a>
              (
              <a
                href='https://creativecommons.org/licenses/by/4.0/'
                target='_blank'
                className='hover:underline'
                rel='noopener'
              >
                CC BY 4.0
              </a>
              )・作成:
              <a
                href='https://twitter.com/chibicode'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                @chibicode
              </a>
            </div>
          </footer>
        </div>
        <div className='bg-gray-50 pt-6 pb-12 px-4' ref={divRef}>
          <div className='pt-5 pb-10'>
            <h3 className='text-center mb-1 sm:mb-2 text-base xs:text-lg sm:text-xl md:text-2xl'>
              高齢者等接種回数の合計
            </h3>
            <h5 className='text-center text-xxs xs:text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 leading-relaxed'>
              {firstYear}/{firstMonth}/{firstDay}〜
              {firstYear !== year ? `${year}/` : ''}/{month}/{day}
            </h5>
            <div className='text-center  text-lg xs:text-xl sm:text-2xl md:text-3xl mb-5 sm:mb-6'>
              <span className={styles.yellowHighlight}>
                {Math.floor(total / 10000)}万{total % 10000}回
              </span>
            </div>
            <div className='text-center text-xxs xs:text-xs sm:text-sm text-gray-500 mb-16 leading-relaxed'>
              <a
                href='https://cio.go.jp/c19vaccine_dashboard'
                className='underline hover:text-gray-600'
                target='_blank'
                rel='noopener'
              >
                さらに詳細なダッシュボードはこちら(政府CIOポータル)
              </a>
            </div>
            <h3 className='text-center mb-2 text-base xs:text-lg sm:text-xl md:text-2xl'>
              直近3週間の高齢者等接種回数
            </h3>
            <h5 className='text-center text-xxs xs:text-xs sm:text-sm text-gray-500 mb-5 leading-relaxed'>
              1回目と2回目の接種回数の合計。1週間毎に色の濃淡を変えた。
            </h5>
            <div className='flex justify-center mb-5'>
              <div className='rounded-lg border border-gray-200 overflow-hidden'>
                <table className='divide-y divide-gray-200 text-sm xs:text-base sm:text-lg md:text-xl'>
                  <thead className='bg-gray-100 '>
                    <tr className='divide-x divide-gray-200'>
                      <th
                        scope='col'
                        className='py-1 sm:py-2 px-4 font-medium text-center'
                      >
                        日付
                      </th>
                      <th
                        scope='col'
                        className='py-1 sm:py-2 px-4 font-medium text-center'
                      >
                        回数
                      </th>
                      <th
                        scope='col'
                        className='py-1 sm:py-2 px-4 font-medium text-center'
                      >
                        100万回到達率
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {table.map(
                      (
                        [tMonth, tDay, tTenK, tRest, tPercentage, tDow],
                        tIndex
                      ) => {
                        return (
                          <tr
                            key={`${tMonth}${tDay}`}
                            className='divide-x divide-gray-200'
                          >
                            <td
                              className={`py-1 sm:py-2 pl-3 pr-2 text-right ${
                                tIndex < 7
                                  ? 'bg-yellow-100'
                                  : tIndex < 14
                                  ? 'bg-yellow-50'
                                  : ''
                              }`}
                            >
                              {tMonth}/{tDay}
                              <small>({tDow})</small>
                            </td>
                            <td
                              className={`py-1 sm:py-2 px-3 text-left ${
                                tIndex < 7
                                  ? 'bg-yellow-100'
                                  : tIndex < 14
                                  ? 'bg-yellow-50'
                                  : ''
                              }`}
                            >
                              {tTenK < 10 ? '\u00A0' : ''}
                              {tTenK}
                              <small>万{tRest}</small>
                            </td>
                            <td
                              className={`py-1 sm:py-2 px-3 text-left ${
                                tIndex < 7
                                  ? 'bg-yellow-100'
                                  : tIndex < 14
                                  ? 'bg-yellow-50'
                                  : ''
                              }`}
                            >
                              <span
                                className={`flex mx-auto w-24 xs:w-28 sm:w-32 md:w-36 border border-gray-400 rounded-md h-1em overflow-hidden ${styles.barBg}`}
                              >
                                <span
                                  className='h-full bg-green-400 border-green-500'
                                  style={{ width: `${tPercentage}%` }}
                                />
                              </span>
                            </td>
                          </tr>
                        )
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <h5 className='text-center text-xxs xs:text-xs sm:text-sm text-gray-500 mb-5 leading-relaxed'>
              <a
                href='http://vrs-data.cio.go.jp/vaccination/opendata/latest/summary_by_date.csv'
                target='_blank'
                className='underline hover:text-gray-600'
                rel='noopener'
              >
                CSVファイルへのリンクはこちら(政府CIOポータル)
              </a>
            </h5>
          </div>
          {tweetIds.map((tweetId) => (
            <div className='py-5' key={tweetId}>
              <blockquote
                className='twitter-tweet'
                data-conversation='none'
                data-align='center'
                data-lang='ja'
                data-dnt='true'
                aria-label='ツイート'
              >
                <a href={`https://twitter.com/chibicode/status/${tweetId}`} />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'http://vrs-data.cio.go.jp/vaccination/opendata/latest/summary_by_date.csv'
  )
  if (!res.ok) {
    throw new Error()
  }
  const text = (await res.text()).trim()
  const data = text
    .split('\n')
    .slice(1)
    .map((x) => x.split(/[\-,]+/).map((x) => parseInt(x, 10)))

  if (data.length <= 1 || data[data.length - 1].length < 5) {
    throw new Error()
  }

  const latestChange = Math.round(
    (data[data.length - 1][3] + data[data.length - 1][4]) / 10000
  )

  const avg = Math.round(
    data
      .slice(data.length - 7)
      .map((x) => x[3] + x[4])
      .reduce((prev, current) => prev + current) / 70000
  )

  const prevAvg = Math.round(
    data
      .slice(data.length - 14, data.length - 7)
      .map((x) => x[3] + x[4])
      .reduce((prev, current) => prev + current) / 70000
  )

  if (latestChange < 0 || avg <= 0 || prevAvg <= 0) {
    throw new Error()
  }

  const year = data[data.length - 1][0]
  const month = data[data.length - 1][1]
  const day = data[data.length - 1][2]

  const prevYear = data[data.length - 7][0]
  const prevMonth = data[data.length - 7][1]
  const prevDay = data[data.length - 7][2]

  const firstYear = data[0][0]
  const firstMonth = data[0][1]
  const firstDay = data[0][2]

  const dateCacheKey = crypto
    .createHash('sha256')
    .update(`${year}-${month}-${day}`)
    .digest('hex')
    .slice(0, 6)

  const dayOfWeek = new Date(year, month - 1, day).toLocaleString('ja-JP', {
    weekday: 'short'
  })

  const ratio = Math.round((avg / prevAvg) * 10) / 10

  const total = data
    .map((x) => x[3] + x[4])
    .reduce((current, prev) => prev + current)

  const table = data
    .slice(data.length - 21)
    .reverse()
    .map(([tYear, tMonth, tDay, tFirst, tSecond]) => {
      return [
        tMonth,
        tDay,
        Math.floor((tFirst + tSecond) / 10000),
        (tFirst + tSecond) % 10000,
        (tFirst + tSecond) / 10000,
        new Date(tYear, tMonth - 1, tDay).toLocaleString('ja-JP', {
          weekday: 'short'
        })
      ]
    })

  return {
    props: {
      latestChange,
      avg,
      year,
      month,
      day,
      prevAvg,
      dateCacheKey,
      prevYear,
      prevMonth,
      prevDay,
      firstYear,
      firstMonth,
      firstDay,
      total,
      ratio,
      dayOfWeek,
      table
    },
    revalidate: 300
  }
}
Home();

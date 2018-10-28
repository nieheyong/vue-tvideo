import videos from './videos'

export default function getVideos(count) {
  return new Promise(function (resolve, reject) {
    var res = videos.sort(() => 0.5 - Math.random()).slice(0, count || 0)
    window.setTimeout(function () {
      resolve(res)
    }, 100 + 300 * Math.random())
  })
}

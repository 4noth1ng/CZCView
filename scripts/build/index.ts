import delPath from '../utils/delpath'
import { series, parallel, src, dest } from 'gulp'
import { pkgPath, componentPath } from '../utils/paths'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from '../utils/run'
//删除dist

export const removeDist = () => {
  return delPath(`${pkgPath}/QRView`)
}

//打包样式
export const buildStyle = () => {
  return src(`${pkgPath}/theme-chalk/src/*.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/QRView/lib/src/theme-chalk`))
    .pipe(dest(`${pkgPath}/QRView/es/src/theme-chalk`))
}

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)

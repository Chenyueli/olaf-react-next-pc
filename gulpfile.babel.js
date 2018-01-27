import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';

import config from './config.global';

const plugins = gulpLoadPlugins();
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const prefix = config[env].staticUrl;
const now = Date.now();

const project = 'olaf-react-next-pc';

const paths = {
  server: 'server/**/*.js',
  build: ['.next/bundles/**/*.js', '.next/dist/**/*.js']
};

gulp.task('babel', () =>
  gulp.src(paths.server)
    .pipe(plugins.newer('app'))
    .pipe(plugins.babel())
    .pipe(gulp.dest('app')));

gulp.task('watch_server', () => {
  const watcher = gulp.watch(paths.server);
  watcher.on('change', (event) => {
    if (event.type === 'deleted') {
      const delFile = event.path.replace(`${__dirname}/server`, './app');
      del(delFile);
    }
  });
});

gulp.task('nodemon', ['watch_server'], () =>
  plugins.nodemon({
    script: 'www',
    ext: 'js',
    watch: 'server',
    tasks: ['babel']
  }));

gulp.task('server', () => {
  runSequence('babel', 'nodemon');
});

gulp.task('next', () => {
  gulp.src(paths.build)
    .pipe(plugins.change(performChange))
    .pipe(gulp.dest(file => file.base));
});

function performChange(content) {
  const assetSrcArr = content.match(/['"]\/static\/cdn.+?['"]/g);
  if (!assetSrcArr) {
    return false;
  }
  assetSrcArr.forEach((assetSrc) => {
    let assetSrcContent = assetSrc.substr(1);
    assetSrcContent = assetSrcContent.substring(0, assetSrcContent.length - 1);
    if (assetSrc.substr(0, 1) === '"') {
      res = res.replace(assetSrc, `"${prefix}${assetSrcContent}?_t=${now}"`);
      // 模拟常用cdn地址事例
      // res = res.replace(assetSrc, `"${prefix}${project}${assetSrcContent}?_t=${now}"`);
    } else {
      res = res.replace(assetSrc, `'${prefix}${assetSrcContent}?_t=${now}'`);
      // 模拟常用cdn地址事例
      // res = res.replace(assetSrc, `'${prefix}${project}${assetSrcContent}?_t=${now}'`);
    }
  });
  return res;
}

gulp.task('default', ['server']);

const gulp = require('gulp');

/**
 * clean:
 * Limpa os arquivos JavaScript compilados dos diretórios.
 */
gulp.task('clean', () => require('del')(['./dist/', './exemplos/**/*.js', './test/**/*.js']));

/**
 * copy:
 * Copia os recursos necessários para a pasta "dist".
 */
gulp.task('copy', () =>
  gulp
    .src(['package*.json', 'README.md', './src/**/*.p'])
    .pipe(gulp.dest('./dist')));

/**
 * compile:
 * Compila os arquivos TypeScript e move os arquivos JavaScript compilados para
 * a pasta "dist".
 */
gulp.task('compile', gulp.series('clean', () => {
  const ts = require('gulp-typescript');
  const tsProject = ts.createProject('./tsconfig.json');

  return gulp.src(['./src/**/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'));
}));

/**
 * build:
 * Efetua o build do projeto.
 */
gulp.task('build', gulp.series('compile', 'copy', () => {
  const uglify = require('gulp-uglify-es').default;
  return gulp.src('./dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest((file) => file.base));
}));

/**
 * compile-test:
 * Compila os arquivos TypeScript dos testes do projeto.
 */
gulp.task('compile-test', () => {
  const ts = require('gulp-typescript');
  const tsProject = ts.createProject('./tsconfig.json');

  return gulp.src(['./test/**/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest('./test'));
});

/**
 * test:
 * Efetua o build e executa os testes do projeto.
 */
gulp.task('test', gulp.series('build', 'compile-test', () => {
  const protractor = require('gulp-protractor').protractor;
  return gulp.src('./test/*.spec.js').pipe(protractor({ configFile: './test/e2e/conf.js' }));
}));

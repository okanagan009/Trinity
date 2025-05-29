import gulp from 'gulp';
import { build } from './gulpfile.mjs';

(async () => {
  try {
    await gulp.series(build)();
    console.log('✅ Сборка завершена успешно!');
  } catch (err) {
    console.error('❌ Ошибка во время сборки:', err);
    process.exit(1);
  }
})(); 
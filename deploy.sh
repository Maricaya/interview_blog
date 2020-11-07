rm -rf docs/.vuepress/dist &&
yarn build &&
cd docs/.vuepress/dist &&
git init &&
git config user.email 915270549@qq.com &&
git config user.name Maricaya &&
git add . &&
git commit -m "first commit" &&
git push -f  https://github.com/Maricaya/interview_blog.git master:gh_pages &&
echo 'https://maricaya.github.io/interview_blog/'



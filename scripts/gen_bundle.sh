
# github info
branch="bundle"
repo="https://@github.com/hoho1234578/Front.git"
date=`date +%Y-%m-%d`
commit_log="Generate bundle for testing on ${date}"

rm -rf build
git clone $repo --depth 1 -b $branch build # Depth 用於指定 clone 深度，為 1 表示只 clone 最近一次 commit
rm -rf build/*

# Move files in dist folder to build folder
yarn build
cp -r dist/. build/

# Add
cd build
git add . -f

# Commit
echo $commit_log
git commit -m "$commit_log"


# git tag -a v${TRAVIS_BUILD_NUMBER} -m "Travis build $TRAVIS_BUILD_NUMBER pushed a tag."

# Push
git pull origin $branch
git push origin $branch

# Remove build folder
cd ..
rm -rf build

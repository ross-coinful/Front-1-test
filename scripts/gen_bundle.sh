
# github info
branch="test"
repo="https://github.com/hoho1234578/Front.git"
date=`date +%Y-%m-%d`
commit_log="generate bundle for testing on ${date}"

# rm -rf build
# cd build

git clone --depth=1 $repo --branch $branch build # Depth 用於指定 clone 深度，為 1 表示只 clone 最近一次 commit

# exists=`git rev-parse --verify origin/test`
# echo $?

# if [$? -eq 0]
# then
# 	echo "Branch exists"

# # else

# fi

# mkdir -p build # Creat build folder if not exist
# rm -rf build/*
# git clone --depth=1 $repo --branch $branch build # Depth 用於指定 clone 深度，為 1 表示只 clone 最近一次 commit

# Copy the latest files under dist folder to build folder
# rm -rf build/*
# cp -r dist/. build/

# # Add
# cd build
# git add . -f

# # Commit
# echo $commit_log
# git commit -m "$commit_log"

# # Push
# git push origin $branch -f

# # Remove build folder
# cd ..
# rm -rf build

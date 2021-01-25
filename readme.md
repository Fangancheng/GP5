# readme文档
- 项目说明文档
- 一般与项目放一起

# git操作

## 初始化版本库 (只是第一次提交需要)
- git init
- 初始化成功后，当前目录后面有（master）
- 初始化成功后当前目录下有个隐藏文件.git (不要去操作它)

## 工作区
- 所看到的实际文件和代码为工作区
- 我们平时增删改查的这些文件都是工作的内容

## 提交到暂存区
- 可以理解为我们看不到的一个地方，存在于用户电脑中
- 本地仓库的一个主要组成部分

## 本地仓库
- 也是我们看不到的一个区域，是一个概念
- 存在于用户电脑中
- 用于存储项目代码及版本相关记录

## 提交到暂存区
- git add 文件名
- 作用：将工作区的变动提交到暂存区
- 上面的提交为某个文件，当想所有变动一起提交时为 
- git add .

## 查看工作区和暂存区的状态(增删改)
- git status

## 暂存区提交到本地仓库
- git commit -m '提交注释'

## 查看日志
- git log 完整版日志
- git reflog 简单版日志

## 版本回退
- git reset --hart HEAD^   (回退到上一个版本[一个^表示回退上一个版本，可多个])
- git reset --hart 版本号    回退到指定版本
- 注意把当前代码提交到本地仓库
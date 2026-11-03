# 作文评阅研究室

双页网站，使用 GitHub Pages。公开页面用于共享研究概览与可公开图表。团队通过 GitHub 的提交与 PR 共同维护内容，合并到 main 后由 Pages 重新发布。

## 本地预览

在本目录运行 `py -m http.server 8000 --directory docs`，打开 http://localhost:8000/。

## GitHub 部署

将本目录作为仓库根目录。在 Settings → Pages → Build and deployment 选择 Deploy from a branch，选择 main 与 /docs。发布后可在任意页面复制当前页面的分享链接。

## 协作

- `docs/content.js` 是两页的公开内容源。具有仓库写权限的成员可从页面点击「在 GitHub 编辑公开概览」，提交修改或开 PR。公开图表可提交到 `docs/` 下并在相应页面引用。
- 受限资料使用单独的私有团队仓库。邀请合作者后，可在 `docs/config.js` 填入该仓库的 owner/repo，网站将显示入口。团队可按考试号存放题面与去标识样卡，按受访者代号存放访谈和逐条摘要，再按运行 ID 整理分析结果与案例。
- 公开仓库只提交经确认可公开的汇总和图表。学生答题卡、成绩表、访谈原件与身份信息保留在受控位置。
- GitHub Pages 网页提供浏览与分享。保存、附件上传、版本历史和协作合并在 GitHub 仓库完成。

[GitHub Pages 发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)


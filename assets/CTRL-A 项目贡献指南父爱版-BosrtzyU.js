import{j as n}from"./index-B2qNje00.js";function r(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:"第一步：加入团队"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"邀请与认证"}),"：联系项目管理员申请加入 ",n.jsx(s.strong,{children:"CTRL-A 团队"}),"，并获得 GitLab（ZJUGit）的访问权限。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"验证"}),"：接受邀请后，需完成账号验证。"]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{children:"2. 环境准备"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"安装 Conda"}),"：推荐使用轻量级的 Miniconda。安装后在终端确认 ",n.jsx(s.code,{children:"conda"})," 命令可用。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"创建并激活环境"}),"：例如"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda create -n ctrl-a-env python=3.8
conda activate ctrl-a-env
`})}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第二步：配置开发环境"})}),`
`,n.jsx(s.h3,{children:"2.1 安装 Conda"}),`
`,n.jsx(s.p,{children:"你有两个选择："}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Anaconda"}),"（功能完整，但体积大）"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Miniconda"}),"（推荐，更轻量，适合只做开发环境管理）"]}),`
`]}),`
`]}),`
`,n.jsx(s.p,{children:"👉 操作步骤："}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["Miniconda安装网址：",n.jsx(s.a,{href:"https://www.anaconda.com/download/success",children:"Download Success | Anaconda"}),"   ",n.jsx(s.em,{children:"科学上网获取更加体验！"})]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"安装完成后，打开终端（或命令提示符），输入："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda --version
`})}),`
`,n.jsx(s.p,{children:"如果能输出版本号，说明安装成功。"}),`
`]}),`
`]}),`
`,n.jsx(s.p,{children:"⚠️ 小提示："}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["如果你 ",n.jsx(s.strong,{children:"C盘空间不足"}),"，可以在安装时把 Conda 路径指定到其他盘（例如 D盘）。"]}),`
`,n.jsx(s.li,{children:`终端如图：
![[Pasted image 20250920221209.png]]`}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"2.2 创建并激活环境"}),`
`,n.jsx(s.p,{children:"安装好 Conda 后，在终端里运行："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda create -n ctrl-a-env python=3.8
conda activate ctrl-a-env
`})}),`
`,n.jsxs(s.p,{children:["这样就创建了一个名为 ",n.jsx(s.code,{children:"ctrl-a-env"})," 的 Python 3.8 开发环境，并激活了它。"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第三步：Git 配置"})}),`
`,n.jsx(s.h3,{children:"3.1 安装 Git"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"检查是否已安装"}),"：",n.jsx(s.br,{}),`
`,"在终端输入："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git --version
`})}),`
`,n.jsxs(s.p,{children:["如果返回了版本号（例如 ",n.jsx(s.code,{children:"git version 2.x.x"}),"），说明已经安装好了，可以跳过这一步。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"如果未安装"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["Windows 用户：前往 ",n.jsx(s.a,{href:"https://git-scm.com/download/win",children:"Git 官网"})," 下载并安装。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"macOS 用户："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`brew install git
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"Linux (Debian/Ubuntu)："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`sudo apt-get install git
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"3.2Windows 下配置 Conda 到 Git Bash PATH"}),`
`,n.jsx(s.h4,{children:"1. 找到 Conda 的安装路径"}),`
`,n.jsx(s.p,{children:"如果你装的是 Miniconda，默认位置大概是："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`C:\\Users\\你的用户名\\miniconda3
`})}),`
`,n.jsxs(s.p,{children:["里面会有 ",n.jsx(s.code,{children:"Scripts"})," 和 ",n.jsx(s.code,{children:"Library\\bin"})," 这些子目录。"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h4,{children:"2. 编辑 Git Bash 的启动配置"}),`
`,n.jsxs(s.p,{children:["在 ",n.jsx(s.strong,{children:"Git Bash"})," 中执行："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`nano ~/.bashrc
`})}),`
`,n.jsxs(s.p,{children:["（如果提示没有 nano，可以用 ",n.jsx(s.code,{children:"vim ~/.bashrc"}),"，或者用记事本打开 ",n.jsx(s.code,{children:"C:\\Users\\你的用户名\\.bashrc"}),"）"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h4,{children:"3. 在文件最后添加以下内容"}),`
`,n.jsxs(s.p,{children:["假设你的 Miniconda 在 ",n.jsx(s.code,{children:"C:\\Users\\B\\miniconda3"}),"："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`# Miniconda 路径配置
export PATH="/c/Users/B/miniconda3:/c/Users/B/miniconda3/Scripts:/c/Users/B/miniconda3/Library/bin:$PATH"
`})}),`
`,n.jsx(s.p,{children:"⚠️ 注意："}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["Windows 路径里的 ",n.jsx(s.code,{children:"\\"})," 要换成 ",n.jsx(s.code,{children:"/"}),"，并且盘符要写成小写（",n.jsx(s.code,{children:"C:"})," → ",n.jsx(s.code,{children:"/c/"}),"）。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"请根据你实际的安装目录修改。"}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h4,{children:"4. 让配置生效"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`source ~/.bashrc
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h4,{children:"5. 测试是否成功"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda --version
`})}),`
`,n.jsxs(s.p,{children:["如果能输出版本号，就说明 Conda 在 Git Bash 里可用了 ✅。",n.jsx(s.br,{}),`
`,"然后你就可以在 Git Bash 里同时运行："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda activate ctrl-a-env
git status
`})}),`
`,n.jsx(s.p,{children:"这样 Conda 和 Git 就能统一用一个终端了。"}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"3.3 配置 Git 账户"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"设置用户名和邮箱"}),"（建议与你 ZJUGit 上的账号一致）："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
`})}),`
`,n.jsx(s.p,{children:"保留上下引号，例：“zyz”"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"生成 SSH 密钥（推荐方式）"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:`在终端运行：终端用这个
![[Pasted image 20250920221603.png]]`}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`ssh-keygen -t rsa -C "你的邮箱"
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["一路回车即可，最终会出现一个奇怪的图形。在 ",n.jsx(s.code,{children:"~/.ssh/"})," 下生成 ",n.jsx(s.code,{children:"id_rsa"})," 和 ",n.jsx(s.code,{children:"id_rsa.pub"}),`
（~/指c盘）`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["用文本编辑器打开 ",n.jsx(s.code,{children:"id_rsa.pub"}),"，复制里面的内容。"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"把 SSH Key 添加到 ZJUGit"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["登录 ZJUGit → 进入个人设置 → 点击搜索框 → 点击profile → ",n.jsx(s.strong,{children:"SSH Keys"})," → 粘贴公钥（",n.jsx(s.code,{children:"id_rsa.pub"}),"） → 保存。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"测试是否成功："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`ssh -T git@git.zju.edu.cn
`})}),`
`,n.jsx(s.p,{children:"如果提示你 “Welcome ...” 或类似欢迎信息，就成功了 ✅"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第四步：获取项目代码"})}),`
`,n.jsxs(s.p,{children:["⚠️ 通过 ",n.jsx(s.strong,{children:"Fork + Pull Request (PR)"})," 的方式来贡献。"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"4.1 通过 Fork 获取代码（推荐）"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"在 ZJUGit 上 Fork 仓库"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["打开 ",n.jsx(s.a,{href:"https://git.zju.edu.cn/ctrl-a/CseHub",children:"CseHub 项目仓库"})]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["点击右上角 ",n.jsx(s.strong,{children:"Fork"})," 按钮，把仓库 Fork 到你自己的账户。"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"克隆你的 Fork 仓库到本地"}),n.jsx(s.br,{}),`
`,"在 Fork 的页面点击code，找到 ",n.jsx(s.strong,{children:"SSH 链接"}),`，点击复制，然后再git bash中输入：
git clone + 复制内容`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git clone git@git.zju.edu.cn:your-username/CseHub.git   /示例ssh
cd CseHub
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"配置上游仓库"}),"（方便和主仓库保持同步）："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git remote add upstream git@git.zju.edu.cn:ctrl-a/CseHub.git
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"安装依赖"}),"（项目基于 mkdocs）："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`pip install -r requirements.txt
`})}),`
`,n.jsx(s.p,{children:n.jsx(s.em,{children:"建议科学上网，否则会飘红"})}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第五步：打开项目"})}),`
`,n.jsx(s.h3,{children:"1. 找到本地项目路径"}),`
`,n.jsxs(s.p,{children:["你刚才是在 ",n.jsx(s.strong,{children:"Git Bash"})," 里 clone 的，提示路径大概是："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`~/CseHub
`})}),`
`,n.jsx(s.p,{children:"在 Windows 下，这个路径通常会对应到："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`C:\\Users\\你的用户名\\CseHub
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"2. 用文件资源管理器打开"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["打开 ",n.jsx(s.strong,{children:"资源管理器"}),"，找到 ",n.jsx(s.code,{children:"CseHub"})," 文件夹。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["你会看到里面有项目的代码、文档、",n.jsx(s.code,{children:"requirements.txt"})," 等文件。"]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"3. 用代码编辑器打开（推荐 VS Code）"}),`
`,n.jsxs(s.p,{children:["如果你用的是 ",n.jsx(s.strong,{children:"VS Code"}),"："]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"打开 VS Code。"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["点击左上角 ",n.jsx(s.strong,{children:"File → Open Folder（打开文件夹）"}),"。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["选择你本地的 ",n.jsx(s.code,{children:"CseHub"})," 文件夹。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"打开后，就能在左侧目录树看到所有项目文件了。"}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{children:"4. 预览文档网站（可选）"}),`
`,n.jsxs(s.p,{children:["这个项目用的是 ",n.jsx(s.strong,{children:"MkDocs"}),"（文档生成工具）。",n.jsx(s.br,{}),`
`,"你可以本地运行它，直接看到网页效果："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`mkdocs serve
`})}),`
`,n.jsxs(s.p,{children:["然后在浏览器打开提示的网址（一般是 ",n.jsx(s.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," ）。",n.jsx(s.br,{}),`
`,"这样你可以实时预览修改后的文档。"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第六步：提交修改与贡献"})}),`
`,n.jsx(s.h2,{children:"6.1 创建分支"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"在做修改前"}),"，建议新建一个功能分支（不要直接在 ",n.jsx(s.code,{children:"master"})," 上改）："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git checkout -b feature/your-feature-name
`})}),`
`,n.jsx(s.p,{children:"例如："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git checkout -b feature/add-login-page
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{children:"6.2 修改代码"}),`
`,n.jsxs(s.p,{children:["在本地编辑器里进行你要的开发或文档修改。",n.jsx(s.br,{}),`
`,"完成后可以查看修改状态："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git status
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{children:"6.3 提交修改"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"添加修改文件："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git add .
`})}),`
`,n.jsx(s.p,{children:"（或者指定文件名）"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"提交并写明说明："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git commit -m "添加登录页面功能" 
`})}),`
`,n.jsx(s.p,{children:"⚠️ 提交信息要简洁说明本次修改的内容。"}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{children:"6.4 推送分支"}),`
`,n.jsxs(s.p,{children:["推送到你的 ",n.jsx(s.strong,{children:"个人 Fork 仓库"}),"："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git push origin feature/your-feature-name
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{children:"6.5 创建合并请求 (MR / PR)"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"登录 ZJUGit，进入你的 Fork 仓库。"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["你会看到刚推送的分支，点击 ",n.jsx(s.strong,{children:'"Create merge request"'}),"。（网页上方）"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["选择目标仓库 → ",n.jsx(s.code,{children:"ctrl-a/CseHub"}),"，目标分支 → ",n.jsx(s.code,{children:"master"}),"。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"写上修改说明，然后提交。"}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"等待管理员或维护者审核和合并。"}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:n.jsx(s.strong,{children:"第七步：再次修改"})}),`
`,n.jsx(s.h1,{children:"后续每次贡献"}),`
`,n.jsx(s.p,{children:"以后你要修改代码/文档，只需要："}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"进入项目文件夹"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`cd CseHub
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"激活 Conda 环境"}),"（每次开新终端都要做一次）"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`conda activate ctrl-a-env
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"查看当前分支"})}),`
`]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`	git branch
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:["当前所在分支会在前面有一个 ",n.jsx(s.code,{children:"*"})," 标记。"]}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:"例如："}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`* master
  feature/add-login-page
`})}),`
`]}),`
`]}),`
`,n.jsxs(s.ol,{start:"4",children:[`
`,n.jsx(s.li,{children:"切换到已有分支（或新建分支详见前文）"}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`	git checkout 分支名
`})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"比如要切换到之前建的分支："}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`	git checkout feature/add-login-page
`})}),`
`,n.jsxs(s.ol,{start:"5",children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"同步主分支最新代码"}),"（避免冲突）"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git checkout master
git pull upstream master
`})}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"修改 → 提交 → 推送 → 发起 MR"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`git add .
git commit -m "描述修改内容"
git push origin feature/your-new-change
`})}),`
`,n.jsxs(s.p,{children:["然后去 ZJUGit 发起 ",n.jsx(s.strong,{children:"Merge Request"}),"。"]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{children:"⚠️ 特殊情况"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"依赖更新"}),"：如果项目维护者更新了 ",n.jsx(s.code,{children:"requirements.txt"}),"，你需要重新安装依赖："]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`pip install -r requirements.txt
`})}),`
`]}),`
`,n.jsxs(s.li,{children:[`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"换电脑/新环境"}),"：需要重新做一次 ",n.jsx(s.strong,{children:"Clone + 安装依赖"}),"。"]}),`
`]}),`
`]}),`
`,n.jsx(s.hr,{})]})}function l(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{l as default};



---

# 第一步：加入团队

- **邀请与认证**：联系项目管理员申请加入 **CTRL-A 团队**，并获得 GitLab（ZJUGit）的访问权限。
    
- **验证**：接受邀请后，需完成账号验证。
    

---

## 2. 环境准备

- **安装 Conda**：推荐使用轻量级的 Miniconda。安装后在终端确认 `conda` 命令可用。
    
- **创建并激活环境**：例如
    
    ```bash
    conda create -n ctrl-a-env python=3.8
    conda activate ctrl-a-env
    ```
    


---

# **第二步：配置开发环境**

### 2.1 安装 Conda

你有两个选择：

- **Anaconda**（功能完整，但体积大）
    
- **Miniconda**（推荐，更轻量，适合只做开发环境管理）
    

👉 操作步骤：

1. Miniconda安装网址：[Download Success | Anaconda](https://www.anaconda.com/download/success)   *科学上网获取更加体验！*
    
2. 安装完成后，打开终端（或命令提示符），输入：
    
    ```bash
    conda --version
    ```
    
    如果能输出版本号，说明安装成功。
    

⚠️ 小提示：

- 如果你 **C盘空间不足**，可以在安装时把 Conda 路径指定到其他盘（例如 D盘）。
- 终端如图：
	![[Pasted image 20250920221209.png]]
---

### 2.2 创建并激活环境

安装好 Conda 后，在终端里运行：

```bash
conda create -n ctrl-a-env python=3.8
conda activate ctrl-a-env
```

这样就创建了一个名为 `ctrl-a-env` 的 Python 3.8 开发环境，并激活了它。

---


# **第三步：Git 配置**

### 3.1 安装 Git

1. **检查是否已安装**：  
    在终端输入：
    
    ```bash
    git --version
    ```
    
    如果返回了版本号（例如 `git version 2.x.x`），说明已经安装好了，可以跳过这一步。
    
2. **如果未安装**：
    
    - Windows 用户：前往 [Git 官网](https://git-scm.com/download/win) 下载并安装。
        
    - macOS 用户：
        
        ```bash
        brew install git
        ```
        
    - Linux (Debian/Ubuntu)：
        
        ```bash
        sudo apt-get install git
        ```
        

---


### 3.2Windows 下配置 Conda 到 Git Bash PATH

#### 1. 找到 Conda 的安装路径

如果你装的是 Miniconda，默认位置大概是：

```
C:\Users\你的用户名\miniconda3
```

里面会有 `Scripts` 和 `Library\bin` 这些子目录。

---

#### 2. 编辑 Git Bash 的启动配置

在 **Git Bash** 中执行：

```bash
nano ~/.bashrc
```

（如果提示没有 nano，可以用 `vim ~/.bashrc`，或者用记事本打开 `C:\Users\你的用户名\.bashrc`）

---

#### 3. 在文件最后添加以下内容

假设你的 Miniconda 在 `C:\Users\B\miniconda3`：

```bash
# Miniconda 路径配置
export PATH="/c/Users/B/miniconda3:/c/Users/B/miniconda3/Scripts:/c/Users/B/miniconda3/Library/bin:$PATH"
```

⚠️ 注意：

- Windows 路径里的 `\` 要换成 `/`，并且盘符要写成小写（`C:` → `/c/`）。
    
- 请根据你实际的安装目录修改。
    

---

#### 4. 让配置生效

```bash
source ~/.bashrc
```

---

#### 5. 测试是否成功

```bash
conda --version
```

如果能输出版本号，就说明 Conda 在 Git Bash 里可用了 ✅。  
然后你就可以在 Git Bash 里同时运行：

```bash
conda activate ctrl-a-env
git status
```

这样 Conda 和 Git 就能统一用一个终端了。

---


### 3.3 配置 Git 账户

1. **设置用户名和邮箱**（建议与你 ZJUGit 上的账号一致）：
    
    ```bash
    git config --global user.name "你的名字"
    git config --global user.email "你的邮箱"
    ```
    保留上下引号，例：“zyz”
2. **生成 SSH 密钥（推荐方式）**
    
    - 在终端运行：终端用这个
        ![[Pasted image 20250920221603.png]]
        ```bash
        ssh-keygen -t rsa -C "你的邮箱"
        ```
        
    - 一路回车即可，最终会出现一个奇怪的图形。在 `~/.ssh/` 下生成 `id_rsa` 和 `id_rsa.pub`
        （~/指c盘）
    - 用文本编辑器打开 `id_rsa.pub`，复制里面的内容。
        
3. **把 SSH Key 添加到 ZJUGit**
    
    - 登录 ZJUGit → 进入个人设置 → 点击搜索框 → 点击profile → **SSH Keys** → 粘贴公钥（`id_rsa.pub`） → 保存。
        
    - 测试是否成功：
        
        ```bash
        ssh -T git@git.zju.edu.cn
        ```
        
        如果提示你 “Welcome ...” 或类似欢迎信息，就成功了 ✅
        

---

# **第四步：获取项目代码**

⚠️ 通过 **Fork + Pull Request (PR)** 的方式来贡献。  

---

### 4.1 通过 Fork 获取代码（推荐）

1. **在 ZJUGit 上 Fork 仓库**
    
    - 打开 [CseHub 项目仓库](https://git.zju.edu.cn/ctrl-a/CseHub)
        
    - 点击右上角 **Fork** 按钮，把仓库 Fork 到你自己的账户。
        
2. **克隆你的 Fork 仓库到本地**  
    在 Fork 的页面点击code，找到 **SSH 链接**，点击复制，然后再git bash中输入：
     git clone + 复制内容
    ```bash
    git clone git@git.zju.edu.cn:your-username/CseHub.git   /示例ssh
    cd CseHub
    ```
    
3. **配置上游仓库**（方便和主仓库保持同步）：
    
    ```bash
    git remote add upstream git@git.zju.edu.cn:ctrl-a/CseHub.git
    ```
    
4. **安装依赖**（项目基于 mkdocs）：
    
    ```bash
    pip install -r requirements.txt
    ```
     *建议科学上网，否则会飘红*

---



# **第五步：打开项目**

### 1. 找到本地项目路径

你刚才是在 **Git Bash** 里 clone 的，提示路径大概是：

```
~/CseHub
```

在 Windows 下，这个路径通常会对应到：

```
C:\Users\你的用户名\CseHub
```

---

### 2. 用文件资源管理器打开

- 打开 **资源管理器**，找到 `CseHub` 文件夹。
    
- 你会看到里面有项目的代码、文档、`requirements.txt` 等文件。
    

---

### 3. 用代码编辑器打开（推荐 VS Code）

如果你用的是 **VS Code**：

1. 打开 VS Code。
    
2. 点击左上角 **File → Open Folder（打开文件夹）**。
    
3. 选择你本地的 `CseHub` 文件夹。
    
4. 打开后，就能在左侧目录树看到所有项目文件了。
    

---

### 4. 预览文档网站（可选）

这个项目用的是 **MkDocs**（文档生成工具）。  
你可以本地运行它，直接看到网页效果：

```bash
mkdocs serve
```

然后在浏览器打开提示的网址（一般是 [http://127.0.0.1:8000/](http://127.0.0.1:8000/) ）。  
这样你可以实时预览修改后的文档。

---



# **第六步：提交修改与贡献**

## 6.1 创建分支

**在做修改前**，建议新建一个功能分支（不要直接在 `master` 上改）：

```bash
git checkout -b feature/your-feature-name
```

例如：

```bash
git checkout -b feature/add-login-page
```

---

## 6.2 修改代码

在本地编辑器里进行你要的开发或文档修改。  
完成后可以查看修改状态：

```bash
git status
```

---

## 6.3 提交修改

1. 添加修改文件：
    
    ```bash
    git add .
    ```
    
    （或者指定文件名）
    
2. 提交并写明说明：
    
    ```bash
    git commit -m "添加登录页面功能" 
    ```
    
    ⚠️ 提交信息要简洁说明本次修改的内容。
    

---

## 6.4 推送分支

推送到你的 **个人 Fork 仓库**：

```bash
git push origin feature/your-feature-name
```

---

## 6.5 创建合并请求 (MR / PR)

1. 登录 ZJUGit，进入你的 Fork 仓库。
    
2. 你会看到刚推送的分支，点击 **"Create merge request"**。（网页上方）
    
3. 选择目标仓库 → `ctrl-a/CseHub`，目标分支 → `master`。
    
4. 写上修改说明，然后提交。
    
5. 等待管理员或维护者审核和合并。
    

---

# **第七步：再次修改**


#  后续每次贡献

以后你要修改代码/文档，只需要：

1. **进入项目文件夹**
    
    ```bash
    cd CseHub
    ```
    
2. **激活 Conda 环境**（每次开新终端都要做一次）
    
    ```bash
    conda activate ctrl-a-env
    ```
    
3.  **查看当前分支**
	
```bash
	git branch
```
	
- 当前所在分支会在前面有一个 `*` 标记。
    
- 例如：
    
    ```
    * master
      feature/add-login-page
    ```
	
4. 切换到已有分支（或新建分支详见前文）
	
```bash
	git checkout 分支名
```
	
- 比如要切换到之前建的分支：
	
```bash
	git checkout feature/add-login-page
```
5. **同步主分支最新代码**（避免冲突）
    
    ```bash
    git checkout master
    git pull upstream master
    ```
    
---

1. **修改 → 提交 → 推送 → 发起 MR**
    
    ```bash
    git add .
    git commit -m "描述修改内容"
    git push origin feature/your-new-change
    ```
    
    然后去 ZJUGit 发起 **Merge Request**。
    

---

# ⚠️ 特殊情况

- **依赖更新**：如果项目维护者更新了 `requirements.txt`，你需要重新安装依赖：
    
    ```bash
    pip install -r requirements.txt
    ```
    
- **换电脑/新环境**：需要重新做一次 **Clone + 安装依赖**。
    

---


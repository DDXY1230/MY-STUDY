(function () {
    // 让下面的区域自适应
    let header = tools.$('.header')[0]
    console.log(header)
    let weiyubnContent = tools.$('.weiyun-content')[0]
    let headerH = header.offsetHeight
    console.log(headerH)
    changeHeight()

    function changeHeight() {
        let viewHeight = document.documentElement.clientHeight
        weiyubnContent.style.height = viewHeight - headerH + 'px'
        console.log('当前高度', weiyubnContent.style.height)
    }
    window.onresize = changeHeight
    // 要准备的数据
    let datas = data.files
    // 渲染文件区域
    let renderId = 0 // 默认以上就要渲染这个id下的所有子数据
    // 文件区域的容器
    let fileList = tools.$('.file-list')[0]
    // 渲染指定id下所有子数据构成的html结构
    fileList.innerHTML = createFilesHtml(datas, 0)
    // 利用事件委托，点击每个文件夹
    tools.addEvent(fileList, 'click', function (ev) {
        let target = ev.target
        if (tools.parents(target, '.item')) {
            target = tools.parents(target, '.item')
            console.log('target', target)
            // 找到文件的id
            let fileId = target.dataset.fileId
            console.log('fileIda', fileId)
            // 点击文件区域获取到被点击的文件id，左侧目录树相应的改变
            renderNavFilesTree(fileId)
        }
    })
    // 渲染菜单区域
    let treeMenu = tools.$('.tree-menu')[0]
    // 文件导航栏容器
    let pathNav = tools.$('.path-nav')[0]
    // 文件导航区域点击，利用时间委托
    tools.addEvent(pathNav, 'click', function (ev) {
        let target = ev.target
        if (tools.parents(target, 'a')) {
            target = tools.parents(target, 'a')
            let fileId = target.dataset.fileId
            renderNavFilesTree(fileId)
        }
    })
    // 没有文件提醒的结构
    let empty = tools.$('.g-empty')[0]
    treeMenu.innerHTML = treeHtml(datas, -1)
    positionTreeById(0)
    // 渲染文件导航
    pathNav.innerHTML = createPathNavHtml(datas, 0)
    // 利用事件委托，点击树形菜单的区域，找到事件源就可以
    tools.addEvent(treeMenu,'click', function(ev){
        let target = ev.target
        if(tools.parents(target, '.tree-title')) {
            target = tools.parents(target, '.tree-title')
            // 找到div身上的id
            console.dir(target)
            let fileId = target.dataset.fileId
            renderNavFilesTree(fileId)
        }
    })
    // 通过指定的id渲染文件区域，文件导航区域，树形菜单区域
    function renderNavFilesTree(fileId){
        // 渲染文件导航
        pathNav.innerHTML = createPathNavHtml(datas,fileId)
        // 如果指定的id没有子数据需要提醒
        let hasChild = dataControl.hasChilds(datas,fileId)
        if(hasChild) {
            // 如果有子数据就渲染出子数据的结构
            // 找到当前这个id下面所有的子数据，渲染在文件区域
            empty.style.display = 'none'
            fileList.innerHTML = createFilesHtml(datas,fileId)
        }else {
            empty.style.display = 'block'
        }
        // 需要给点击的div添加样式， 其余的div没有样式
        let treeNav = tools.$('.tree-nav',treeMenu)[0]
        tools.removeClass(treeNav, 'tree-nav')
        positionTreeById(fileId)
    }
}())
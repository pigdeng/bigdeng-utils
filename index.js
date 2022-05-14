// 文件大小转换
// c 参数：表示要被转化的容量大小，以字节为单
// b 参数：表示如果转换时出小数，四舍五入保留多少位 默认为2位小数
export function formatBytes (a, b) {
    if (a === 0) return '0 B'
    let c = 1024
    let d = b || 2
    let e = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let f = Math.floor(Math.log(a) / Math.log(c))
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

// 深拷贝
export function deepClone (target) {
    // 定义一个变量
    let result
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
      // 如果是一个数组的话
      if (Array.isArray(target)) {
        result = [] // 将result赋值为一个数组，并且执行遍历
        for (let i in target) {
          // 递归克隆数组中的每一项
          result.push(deepClone(target[i]))
        }
        // 判断如果当前的值是null的话；直接赋值为null
      } else if (target === null) {
        result = null
        // 判断如果当前的值是一个RegExp对象的话，直接赋值
      } else if (target.constructor === RegExp) {
        result = target
      } else {
        // 否则是普通对象，直接for in循环，递归赋值对象的所有值
        result = {}
        for (let i in target) {
          result[i] = deepClone(target[i])
        }
      }
      // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
      result = target
    }
    // 返回最终结果
    return result
}

// 过滤对象空值
export function removeNull (data) {
    let newData = {}
    for (let key in data) {
      if (
        (data[key] &&
          data[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') ||
        data[key] === 0
      ) {
        newData[key] = data[key]
      }
    }
    return newData
}

export function blobToFile (blob, name) {
    // new Blob([data])用来创建URL的file对象或者blob对象
    let url = window.URL.createObjectURL(new Blob([blob]))
    // 生成一个a标签
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.download = name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

/**
 * 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
 **/
 export function isNumber (val) {
    var regPos = /^[0-9]+.?[0-9]*/ // 判断是否是数字。
  
    if (regPos.test(val)) {
      return true
    } else {
      return false
    }
}


// 获取浏览器参数
export function getQueryVariable (variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
    return false
}

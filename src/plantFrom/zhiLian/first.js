import { createPublishTimeTag } from "./index"
// 在页面第一次打开时处理职位列表
;(function firstOpenZhiLianPage() {
  const initialData = window.__INITIAL_STATE__ || {}
  const positionList = initialData.positionList || []

  // 如果职位列表为空，则不执行任何操作
  if (positionList.length === 0) return

  positionList.forEach((item, index) => {
    // 获取职位对应的DOM元素
    const positionElement = document.querySelector(
      `.positionlist > *:nth-child(${index + 1})`
    )

    if (positionElement) {
      const timeTag = createPublishTimeTag(item.firstPublishTime)
      positionElement.appendChild(timeTag)
    }
  })
})()

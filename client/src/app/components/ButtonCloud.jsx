'use client'
import React, { useEffect, useState } from 'react'
import { DownOutlined, CarOutlined } from '@ant-design/icons'

import { Button, Dropdown, message, Space } from 'antd'

const ButtonCloud = ({ options, label }) => {
  const [currentItem, setCurrentItem] = useState('')
  const handleMenuClick = (e) => {
    if (label == 'Brand' && e.key == '7') {
      return
    }
    const obj = options.find((item) => item.key == e.key)
    if (label == 'Brand') {
      setCurrentItem(obj.label.props.children[1].trim())
    } else {
      setCurrentItem(obj.label)
    }
  }
  useEffect(() => {
    if (currentItem) {
      let tempObj = localStorage.getItem('filters')
      if (!tempObj) {
        tempObj = {}
      } else {
        tempObj = JSON.parse(tempObj)
      }
      if (label == 'Brand') {
        tempObj[label] = currentItem.innerText
      }
      tempObj[label] = currentItem
      localStorage.setItem('filters', JSON.stringify(tempObj))
    }
  }, [currentItem])
  const menuProps = { onClick: handleMenuClick, items: options }
  return (
    <Space wrap>
      <Dropdown menu={menuProps} trigger={['click']} placement="bottom">
        <Button size="large">
          <Space className="button-cloud">
            {currentItem ? currentItem : label}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  )
}

export default ButtonCloud

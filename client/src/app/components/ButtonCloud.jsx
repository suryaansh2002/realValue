'use client';
import React, { useState } from 'react';
import { DownOutlined, CarOutlined } from '@ant-design/icons';

import { Button, Dropdown, message, Space } from 'antd';

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const ButtonCloud = ({ options, label }) => {
  const menuProps = { onClick: handleMenuClick, items: options };

  return (
    <Space wrap>
      <Dropdown menu={menuProps}>
        <Button size='large'>
          <Space className='button-cloud'>
            {label}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};

export default ButtonCloud;

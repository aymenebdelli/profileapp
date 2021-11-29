import React from 'react';
import { Form, Input, Tooltip, Space, Typography } from 'antd';

const FullName = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='bg-danger' style={{ borderRadius: '15px' }}>
      <Form
        name='complex-form'
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label='Fullname' style={{ fontStyle: 'strong' }}>
          <Space>
            <Form.Item
              name='Full Name'
              noStyle
              rules={[{ required: true, message: 'Full Name is required' }]}
            >
              <Input style={{ width: 90 }} placeholder='Please input' />
            </Form.Item>
            <Tooltip title='Useful information'>
              <Typography.Link
                href='#API'
                style={{ color: 'black', fontStyle: 'strong' }}
              >
                Need Help?
              </Typography.Link>
            </Tooltip>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FullName;

import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const Address = () => {
  return (
    <div>
      <Form.Item
        label='Address'
        className='bg-danger'
        style={{
          fontStyle: 'oblique',
          fontSize: '20px',
          height: '8rem',
          borderRadius: '15px',
        }}
      >
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder='Select province'>
              <Option value='Tunisia'>Tunisia</Option>
              <Option value='Béja'>Béja</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder='Input street' />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </div>
  );
};
export default Address;
